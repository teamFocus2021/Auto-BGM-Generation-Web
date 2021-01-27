#!/usr/bin/env node 
//./PythonTest.js 로 실행가능하게 만듬 / 안쓰면 node PythonTest.js

// python -m pip install opencv-python (in vscode)
// python extension pack 다운로드 (in vscode)
// python -m pip install requests 안되면 
// git clone git://github.com/psf/requests.git -> cd requests -> python -m pip install .

const shell = require('shelljs');
const fs = require('fs');

// 0.5초 간격으로 영상 이미지 처리
function toFrame(file_name){
    !fs.existsSync('save_img') && fs.mkdirSync('save_img');
    if (shell.exec(`ffmpeg -i ${file_name} -vf fps=2 save_img/%04d.jpg`).code !== 0) {
        shell.echo('Error: cut frame failed')
        shell.exit(1)
    }
}

// 감정추출
function faceApi(){
    console.log("---loading---");
    if (shell.exec('python FaceApi.py').code !== 0) {
        shell.echo('Error: python FaceApi failed')
        shell.exit(1)
    }
    console.log("---face API complete !---");
}

// example
toFrame('test.mp4')
setTimeout(() => faceApi(), 10);
