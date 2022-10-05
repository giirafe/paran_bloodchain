const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//user 데이터 구조
/*
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 10
    },
})

//회원 정보 저장(회원가입 관련)
userSchema.pre('save', function(next) {
    var user = this;
    //비밀번호가 맞다면
    if(user.isModified('password')) {
        //비밀번호 암호화
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)
            
            bcrypt.hash(user.password, salt, function(err, hash) {
             if(err) return next(err)
             user.password = hash
             next()
            })
         })
    } else {
        next()
    }
})

//비밀번호 비교
userSchema.methods.comparePassword = function(palinPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err),
        cb(null, isMatch)
    })
}

//인증관련 토큰 생성
//아직 사용 안함
userSchema.methods.generateToken = function(cb) {

    var user = this;

    var token = jwt.sign(user._id, 'secretToken')

    //user._id + 'secretToken' = token
}

const User = mongoose.model('User', userSchema)

module.exports = {User}
*/