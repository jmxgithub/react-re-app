const express = require('express');

const app = express();

const mongoose = require('mongoose');

// 链接mongo 并且使用 imooc这个集合
// mongod --config /usr/local/etc/mongod.conf  启动 mongo
const DB_url = 'mongodb://localhost:27017/imooc';

mongoose.connect(DB_url);

// 类似mysql 的表 mongo里面有文档 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
	user: {type: String, require: true},
	age : {type: Number, require: true}
}))

mongoose.connection.on('connected', function() {
	console.log('mongo connect success');
})

// 新增数据
// User.create({
// 	user: 'yaoyao',
// 	age: 25
// }, function (err, doc) {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// })

// 删除数据
// User.remove({ age: 10}, function(err, doc) {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// })

//  更新数据
// User.update({'user': 'yaoyao'}, {'$set': {age: '24'}}, function(err ,doc) {
// 	if (!err) {
// 		console.log(doc);
// 	} else {
// 		console.log(err);
// 	}
// })

app.get('/', function(req, res) {
	res.send('<h1>Hello world!</h1>')
})

app.get('/data', function(req, res) {
	// res.json({name: 'jiaomx', age: '25'});
	// User.findOne({user: 'jiaomx'}, function(err, doc) {
	// 	res.json(doc)
	// })

	User.find({user: 'jiaomx'}, function(err, doc) {
		res.json(doc)
	})

})

app.get('/')
app.listen(9093, function() {
	console.log('Node app start at port 9093');
})