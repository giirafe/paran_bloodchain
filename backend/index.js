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

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            
            user.generateToken((err, user) => {
                
            })

        })
    })
})


app.listen(port, () => console.log(`listening on port ${port}!`))