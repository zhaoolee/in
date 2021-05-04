const Rsync = require("rsync");

const path = require("path");


// 将本目录同步服务器
async function update_data(target_path) {
  await new Promise((resolve, reject) => {
    // Build the command
    var rsync = new Rsync()
      .shell("ssh")
      .flags({
        a: true,
        z: true,
        v: true
      })
      .delete()
      .progress()
      .compress()
      .exclude([".*/", "up.js"])
      .output(
        function(data) {
          // do things like parse progress
          console.log("=传输数据=>>", data.toString());
        },
        function(data) {
          // do things like parse error output
          console.log("=数据传输报错=>>", data.toString());
        }
      )
      .source(path.join(__dirname, 'docs/' ))
      .destination("root@v2fy.com:" + target_path);

    // Execute the command
    rsync.execute(function(error, code, cmd) {
      console.log("error", error);
      console.log("code", code);
      console.log("cmd", cmd);
      resolve();
    });
  }).then(() => {});
}


async function main() {

  // 同步到v2方圆
  await update_data("/usr/share/nginx/v2fy.com/in");
  // 同步到方圆小站
  await update_data("/usr/share/nginx/fangyuanxiaozhan.com/in");

}

main();
