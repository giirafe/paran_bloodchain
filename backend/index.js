const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const {User} = require("./models/User")

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//몽고 디비
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://juyeon:whoami728@bloodchain.ixrutaq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//서버 메인 페이지 테스트 메시지
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    //회원 가입할 때 필요한 정보들을 client에서 가져오면
    //디비에 넣어준다
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

//로그인
//아직 연동안됨
app.post('/login', (req,res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json ({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        console.log('ping');
        user.comparePassword(req.body.password, (err, isMatch) => {
            console.log('ping2');
            if(!isMatch)
                return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            // 비밀번호 맞으면 토큰 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                //쿠키와 로컬저장소에 토큰 저장    
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess: true, userId: user.id})
            })

        })
    })
})


app.listen(port, () => console.log(`listening on port ${port}!`))