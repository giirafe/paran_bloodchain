const mongoose = require('mongoose');
const express = require('express');

function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds));
}

const postSchema = mongoose.Schema({
    address: String,
    title: String,
    content : String,
    createdAt:{ // 글을 생성한 날짜 
        type : Date,
        default : getCurrentDate(),
    }
}, {timestamps:true})

postSchema.index({address: 'text'})

const UserSchema = mongoose.Schema({
    address: String
});

const PostMessage = mongoose.model('datalist', postSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {PostMessage, User}