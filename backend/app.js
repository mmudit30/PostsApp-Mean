// Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mmudit:uMuiTl4JaM7RAvYn@cluster0-xcjvq.mongodb.net/test?retryWrites=true&w=majority')
        .then(()=>{
            console.log('Connected to Database');
        })
        .catch(()=>{
            console.log('Connection Failed');
        });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//middleware to remove CORS error, when getting data from one server to another
app.use((req,res,next)=> {
    res.setHeader(
        "Access-Control-Allow-Origin", 
        "*"
        );
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
        );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
        );
    next();
});

app.post('/api/posts',(req, res, next)=>{
    const post= new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    post.save().then(createdPost=>{
        res.status(201).json({
            message: 'Post added successfully',
            postId: createdPost._id
        });

    });
});

app.get('/api/posts' ,(req, res, next)=>{
    Post.find()
        .then(document=>{
            res.status(200).json({
                message: 'Post fetched Successfully',
                posts: document
            });        
        });
});

app.delete('/api/posts/:id', (req, res, next)=>{
    Post.deleteOne({ _id : req.params.id})
        .then(result=>{
            console.log(result);
            res.status(200).json({ message: "Post deleted" });
        });
});

module.exports = app;

//mongoDB cluster0 access users-> 
//Uname- mmudit
//Password- uMuiTl4JaM7RAvYn

