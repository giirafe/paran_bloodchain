const express = require('express')
const app = express()
const router = express.Router();
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
//const {User} = require("./models/User")
const {PostMessage, User} = require("./models/postMessage")

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

//몽고 디비
const mongoose = require('mongoose')
const { Router } = require('express')
mongoose.connect('mongodb+srv://juyeon:whoami728@bloodchain.ixrutaq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//서버 메인 페이지 테스트 메시지
//app.use('/', (req, res) => res.json({project:'P:LOW'}))

const getPosts = async (req, res) => {
  try {
    const data = await PostMessage.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("해당 id는 없습니다!");
  } else {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.json(updatedPost);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("삭제 할수 없습니다.");
  } else {
    await PostMessage.findByIdAndRemove(id);
    console.log(`${id}가 삭제되었습니다.`);
    res.json({ meessage: "삭제 완료" });
  }
};

const updateLike = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("해당 값이 없습니다.");
  } else {
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );

    res.json(updatedPost);
  }
};



app.get("/community", getPosts);
app.post("/writecontent", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", updateLike);

app.listen(port, () => console.log(`listening on port ${port}!`))