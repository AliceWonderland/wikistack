// 'use strict'
//
// const express = require('express'); //server
// const app = express();
// const morgan=require('morgan');   //middleware logger
// const bodyParser = require('body-parser');
// const nunjucks=require('nunjucks');
//
// // Where your server and express app are being defined:
//
// var models = require('./models');
//
// // ... other stuff
//
// models.User.sync({})
// .then(function () {
//     return models.Page.sync({})
// })
// .then(function () {
//     // make sure to replace the name below with your express app
//     app.listen(1337, function () {
//         console.log('Server is listening on port 1337!');
//     });
// })
// .catch(console.error);
//
//
//
//
// // app.listen(1337,function () {
// //     console.log("Listening on port 1337...");
// // });
//
// // express
// app.use(express.static('/public'));
//
//
//
// // morgan
// app.use(morgan('dev'));
//
// // body parser
// app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
// app.use(bodyParser.json()); // would be for AJAX requests
//
// // nunjucks
// var env = nunjucks.configure('views', {noCache: true});
// // have res.render work with html files
// app.set('view engine', 'html');
// // when res.render works with html files, have it use nunjucks to do so
// app.engine('html', nunjucks.render);
//
// app.get("/",function(req,res,next){
//         res.render("index");
//     }
// );