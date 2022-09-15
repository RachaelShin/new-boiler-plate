/* model, schema */

// mongoose 불러오기
const mongoose = require("mongoose");

// schema 생성
const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true, // 띄어쓰기 등 메일형식에 맞지않는 string err 방지
    unique: 1, // 같은 이메일 쓰지 않게
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 20,
  },
  lastname: {
    type: String,
    maxlength: 20,
  },
  role: {
    // 유저와 관리자를 구분
    type: Number,
    default: 0, // ex) 유저 0, 관리자 1
  },
  image: String,
  token: {
    // 유효성 검사
    type: String,
  },
  tokenExp: {
    // 유효성 기간설정
    type: Number,
  },
});

// schema를 model로 감싸주기
const User = mongoose.model("User", userSchema);

// 다른곳에서도 사용할 수 있도록 export
// * module 객체모음
module.exports = { User };
