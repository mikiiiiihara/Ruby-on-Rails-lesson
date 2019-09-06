const express = require('express') //const=varの変更できないver. varは今時let→調べる！
const app = express()

app.get('/', function (req, res) {
    res.send('Got a GET request');
  });//get:取得する,post:作成する,put:編集する,delete:削除する→Create Read Update Delete⇨データ操作の基本
// ブラウザに表示する（レスポンス）ときはGETのみおk
// 「/」・・・トップページに表示　ここでurl・ページを管理
// hello = function(){console.log("Hello World");}
// hello = () => console.log("Hello World");
// hello = (name) => console.log("Hello World"+name);
// GetとPostの違い：リクエスト（データを送信）のとき（e.g.:ツイートを作成するとき）postだと画像を送ることができるけど、getは文章しか送れない・レスポンスのとき（データ取得）は大丈夫
app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

// Get以外を表示したいとき（自由に操作したいとき）※ブラウザ側
// fetch('/',{method: "POST"})
//   .then((response) => response.body.getReader()) // ReadableStreamを取得する。
//   .then((reader) => {
//     // ReadableStream.read()はPromiseを返す。
//     // Promiseは{ done, value }として解決される。
//     reader.read().then(({done, value}) => {
//       // データを読み込んだとき：doneはfalse, valueは値。
//       // データを読み込み終わったとき：doneはtrue, valueはundefined。
//       const decoder = new TextDecoder();
//       console.log(decoder.decode(value));
//     });
//   });

// var mysql = require('mysql')
//  var connection = mysql.createConnection({
//      host: 'localhost',
//      user: 'root',
//      password:'root',
//      socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock',
//      database: 'people'
//  });
 
//  app.get('/hello', function (req, res) {
//      connection.connect()
 
//      connection.query('select * from person', function (err, rows, fields) {
//          if (err) throw err
//          res.send(rows[0].name);
//      })
 
//      connection.end()
//  }); 
 
 app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/Vuejs'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// node.jsによる、サーバー接続方法
// 1. ctrl+Cでサーバー接続を中止
// 2. $node app.js でサーバーを再起動

