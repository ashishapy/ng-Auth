var config = require('./config.js');
var jwt = require('jwt-simple');
var _ = require('underscore');
var fs = require('fs');

var model = {
  verifyUrl: 'http://localhost:3000/auth/verifyEmail?token=',
  title: 'ngAuth',
  subTitle: 'Thanks for signing up!',
  body: 'Please verify your email address by clicking the button below'
}

exports.send = function (email) {
  var payload = {
    sub: email
  };

  var token = jwt.encode(payload, config.EMAIL_SECRET);

  console.log(getHtml(token));
}

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

function getHtml(token){
  var path = './views/emailVerification.html';
  var html = fs.readFileSync(path, encoding='utf8');

  var template = _.template(html);

  model.verifyUrl += token;

  return template(model);
}