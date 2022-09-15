// nodemon -g

const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

// mongoDB 개인 앱코드가 저장된 설정파일 가져오기
const config = require("./config/key");

// import model-schema
const { User } = require("./models/User");

// x-www-form-urlencoded 형식으로 넘어오는 body값
app.use(express.urlencoded({ extended: true }));

// json형식으로 넘어오는 body 값
app.use(express.json());

mongoose
  // 불러온 config에 있는 MONGO_URI를 대신 넣어준다.
  .connect(config.MONGO_URI)
  .then(() => console.log("몽고db 연결 성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello node");
});

app.post("/register", (req, res) => {
  // 회원가입 정보를 client에서 가져와 db에 넣는다.
  const user = new User(req.body);
  // save는 mongoDB 메소드
  user.save((err, userInfo) => {
    // err가 있을 경우, json형식으로 err 메세지를 띄움 >> {success: false}
    if (err) return res.json({ success: false, err });

    // 성공한 경우, status 200(요청 성공) + json 메세지
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`port ${port}에서 서버대기중..`);
});
