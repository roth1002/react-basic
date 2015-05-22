var koa = require('koa');
var logger = require('koa-logger');
var views = require('co-views');
var render = views('client/', { map: { html: 'swig' }, ext: 'ejs'});
var router = require('koa-router')();
var serve = require('koa-static');
var parse = require('co-body');
var app = koa();

// "database"

var posts = [];

//
app.use(logger());
app.use(serve('client'));


router.get('/', function *() {
  console.log(posts);
  this.body = yield render('index', { posts: posts });
});

router.get('/post/new', function *(id) {
  var post = posts[id];
  this.body = yield render('newpost');
});

router.get('/post/:id', function *() {
  this.body = yield render('show', { posts: posts });
});

router.post('/post', function *() {
  var post = yield parse(this);
  var id = posts.push(post) - 1;
  post.created_at = new Date;
  post.id = id;
  this.redirect('/');
});

app.use(router.routes());

app.listen(4000);
