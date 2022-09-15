/*
 * 개발을 local환경에서 하는 경우 or 배포 후 하는 경우
 * 경우에 따른 환경변수 설정을 다르게 한다.
 */

// process.env.NODE_ENV : 환경변수
if (process.env.NODE_ENV === "production") {
  // 배포 후 >> production
  module.exports = require("./production");
} else {
  // local 환경에서 >> development
  module.exports = require("./development");
}
