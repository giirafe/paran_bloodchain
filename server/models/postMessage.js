const mongoose = require('mongoose');
const express = require('express');

const postSchema = mongoose.Schema({
    address: String,
    title: String,
    content : String,
    createdAt:{ // 글을 생성한 날짜 
        type : Date,
        default : Date.now
    }
}, {timestamps:true})

const UserSchema = mongoose.Schema({
    address: String
});


const PostMessage = mongoose.model('datalist', postSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {PostMessage, User}