//영상처리 and 감정분석

// python -m pip install opencv-python (in vscode)
// python extension pack 다운로드 (in vscode)
// python -m pip install requests 안되면 
// git clone git://github.com/psf/requests.git -> cd requests -> python -m pip install .

const shell = require('shelljs');
const fs = require('fs');
const file_name = './upload/original_video/test.mp4';
// 0.5초 간격으로 영상 이미지 처리
function toFrame(file_name){
    !fs.existsSync('upload/frames') && fs.mkdirSync('upload/frames');
    if (shell.exec(`ffmpeg -i ${file_name} -vf fps=1 upload/frames/%04d.jpg`).code !== 0) {
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
toFrame(file_name)
setTimeout(() => faceApi(), 10);
