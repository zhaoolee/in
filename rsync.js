const Rsync = require("rsync");

const path = require("path");

const chmodr = require('chmodr');

const fs = require("fs");

const fse = require("fs-extra");


const target_path = "/usr/share/nginx/v2fy.com/in";

// 将本目录同步服务器
async function update_data() {
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
      .source(path.join(__dirname, 'dist/' ))
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

  // 先同步数据到服务端
  await update_data();

}

main();
