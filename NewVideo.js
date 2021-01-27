// 영상업로드하면 자동으로 음악 입혀져 나오는 기능
const fs = require('fs');
const shell = require('shelljs');

// 업로드하면 얻는 파일 이름을 fime_name 초기화, 파일이름 설정하면 new_name 초기화
// 음악 클릭하면 그에 맞게 emotions.json 변경
const file_name = './upload/test.mp4';
const new_name = 'new_video.mp4';
var music  = {};

//------영상처리 and 감정분석------
toFrame(file_name);
setTimeout(() => faceApi(), 10);

//--------auto-make video---------
deleteFile();
setTimeout(() => makeVideo(), 10);

function makeVideo(){
    const data = JSON.parse(fs.readFileSync('emotions.json', 'utf8'));

    keys = Object.keys(data)
    
    // 첫 번째 값에 대한 처리
    var k = 0;
    var time = 0;
    var regex = /[^0-9]/g; // 숫자가 아닌 문자열 선택 정규식
    var current_image, current_emotion;
    var new_image, new_emotion;

    if (keys[0] == "0001"){ 
        current_image = keys[0];
        current_emotion = data[current_image];
        k += 1;   
    }else{ 
        current_image = "0001";
        current_emotion = data[keys[0]];
    }
    
    for(var i = k; i < keys.length - 2; i++){
        new_image = keys[i];
        new_emotion = data[new_image];
        time = new_image - current_image; // 1초 간격
        music_num = current_emotion.replace(regex, ''); //숫자가 아닌 모든 것을 삭제. smile5 -> 5 추출.
        if(music_num){
            current_emotion = current_emotion.replace(music_num, '');
            cutAudio(current_emotion, time, current_image, music_num);              
        }
        else{
            cutAudio(current_emotion, time, current_image);
        }
        current_image = new_image;
        current_emotion = new_emotion;
        time = 0;
    }

    // 마지막 오디오 처리
    total_time = data[keys[keys.length - 2]]
    time = total_time - current_image;
    music_num = current_emotion.replace(regex, '');

    if(music_num){
        current_emotion = current_emotion.replace(music_num, '');
        cutAudio(current_emotion, time, current_image, music_num);              
    }
    else{
        cutAudio(current_emotion, time, current_image);
    }

    setTimeout(() => {
        var json = JSON.stringify(music);
        fs.appendFile('music.json', json , 'utf8', function (err) {
            if (err) throw err;
          }); 
    }, 10)

    //함수 동기 실행
    setTimeout(() => getAudio(file_name), 10);
    setTimeout(() => concatAudio(), 10);
    setTimeout(() => mixAudio(), 10);
    setTimeout(() => {
        console.log("-----ready to download!-----");
    }, 10);
    setTimeout(() => mergeVideo(file_name, new_name), 10); // 버튼 누르면 실행시켜서 저장되게 만들기(option : 다운로드 눌렀을 때 저장할 이름 설정)
    setTimeout(() => {
    console.log("-----download complete!-----");
    }, 10);
}


//----------------------------------기능별 함수----------------------------------

// cut -> 0001.mp3 추출
// get -> origin.mp3 추출
// concat : mylist.txt -> new.mp3 추출
// mix : new.mp3 + origin.mp3 -> output.mp3 추출
// merge : output.mp3 -> new_video.mp4 추출

// 오디오 자르기
function cutAudio(emotion, duration, frame_num, music_num=0) {
    !fs.existsSync('new') && fs.mkdirSync('new');
    if(music_num){
        var id = music_num
    }
    else{
        var id = Math.ceil(Math.random() * 10);
    }
    music[frame_num] = emotion+id
    if (shell.exec(`ffmpeg -i http://sehwa98.dothome.co.kr/mp3/${emotion}/${emotion}(${id}).mp3 -acodec copy -t ${duration} new/${frame_num}.mp3`).code !== 0) {
        shell.echo('Error: audio cut failed')
        shell.exit(1)
    }
    fs.appendFile('mylist.txt', `file \'new/${frame_num}.mp3\'\n`, 'utf8', function (err) {
        if (err) throw err;
      });   
};

// 자른 오디오끼리 붙이기
function concatAudio() {
    if (shell.exec('ffmpeg -f concat -i mylist.txt -c copy new/new.mp3').code !== 0) {
        shell.echo('Error: audio concat failed');
        shell.exit(1);
    }
};

// 원래 오디오 추출
function getAudio(file_name){
    !fs.existsSync('new') && fs.mkdirSync('new');
    if (shell.exec(`ffmpeg -i ${file_name} -vn new/origin.mp3`).code !== 0) {
        shell.echo('Error: audio extract failed');
        shell.exit(1);
    }
}

// 오디오 믹스(영상소리 + 음악)
function mixAudio(){
    if (shell.exec('ffmpeg -i new/origin.mp3 -i new/new.mp3 -filter_complex amix=inputs=2:duration=longest new/output.mp3').code !== 0) {
        shell.echo('Error: audio mix failed');
        shell.exit(1);
    }    
}

// 자른 오디오 합친 거랑 영상 합치기
function mergeVideo(video, new_name) {
    if (shell.exec(`ffmpeg -i ${video} -i new/output.mp3 -c:v copy -c:a aac -shortest -strict experimental -map 0:v:0 -map 1:a:0 ${new_name}`).code !== 0) {
        shell.echo('Error: audio and video merge failed')
        shell.exit(1)
    }
    // //new directory 안에 파일 모두 삭제 후
    fs.readdir('new', (err, files) => {
        if(err)
            console.log(err);
        else{
            for(let file of files){
                fs.unlink('./new/' + file, (err) => {
                    if(err)
                        console.log(err);
                    else{
                    }
                })
            }     
        }
    })
    //mylist.txt 삭제
    fs.unlink('mylist.txt', function(err){
        if( err ) throw err;
    });
    //new directory 삭제
    fs.rmdir("new", () => { 
    });
    fs.unlink('music.json', function(err){

    });    
    // //emotions.json 삭제
    // fs.unlink('emotions.json', function(err){
    //     if( err ) throw err;
    // });

    // fs.readdir('save_img', (err, files) => {
    //     if(err)
    //         console.log(err);
    //     else{
    //         // for(let file of files){
    //         //     fs.unlink('./save_img/' + file, (err) => {
    //         //         if(err)
    //         //             console.log(err);
    //         //         else{
    //         //         }
    //         //     })
    //         // }                                    
    //         //save directory 삭제
    //         fs.rmdir("save_img", () => { 
    //           });                  
    //     }
    // })
    console.log("--------The End--------");

};

function deleteFile(){
    //new directory 안에 파일 모두 삭제 후
    fs.readdir('new', (err, files) => {
        if(err){

        }    
        else{
            for(let file of files){
                fs.unlink('./new/' + file, (err) => {
                    if(err){
                        
                    }
                    else{                                                
                    }
                })
            }
            //mylist.txt 삭제
            fs.unlink('mylist.txt', function(err){

            });
            //new directory 삭제
            fs.rmdir("new", () => { 
            });
            fs.unlink('music.json', function(err){

            });                 
        }
    })
}

// 0.5초 간격으로 영상 이미지 처리
function toFrame(file_name){
    !fs.existsSync('save_img') && fs.mkdirSync('save_img');
    if (shell.exec(`ffmpeg -i ${file_name} -vf fps=1 save_img/%04d.jpg`).code !== 0) {
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
