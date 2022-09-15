/* 배포사이트는 heroku */

module.exports = {
  // heroku setting에 설정한 config key와 동일하게 써준다.
  MONGO_URI: process.env.MONGO_URI,
};
