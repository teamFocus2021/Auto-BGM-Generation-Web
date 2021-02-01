import { Controller, Get, Post, Query, Render, UseInterceptors, UploadedFile, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, videoFileFilter } from './utils/file-upload.utils';

@Controller()
export class AppController {
  
  @Get()
  @Render('home')
  public home() {

  }

  @Get('/start')
  @Render('start')
  public start() {
  } 

  @Get('/about')
  @Render('about')
  public about() {
  }

  @Get('/music')
  @Render('music')
  public music() {
  }

  @Get('/connect')
  @Render('connect')
  public connect() {
  }

  @Get('/download')
  public download(){
    const shell = require('shelljs');
    shell.exec('node NewVideo.js');
  }
  
  @Get('/video')
  public video(){
    console.log("serverside");
    const shell = require('shelljs');
    shell.exec('python GoogleStorage.py') ;
    shell.exec('node PythonToJs.js') ;
  }
  //video processing main page: 비디오 processing 메인 페이지
  @Get('/make')
  @Render('make')
  public make() {
    

//serverside에서 Nest.js 차원에서 command 명령어 실행하여
//python 파일 실행하기 shelljs 생성 -> exec로 실행하기 
    
    // console.log("serverside");
    // const shell = require('shelljs');
    // shell.exec('python GoogleStorage.py') ;
    // shell.exec('node PythonToJs.js') ;

    // 잘린 프레임 넘기기

    const fs = require('fs');

    // const emotion_string = JSON.stringify(emotion);

    const data = JSON.parse(fs.readFileSync('upload/emotion/emotions.json', 'utf8'));

    const keys = Object.keys(data);
  //   for (const item of Object.keys(data)) {
  //     console.log(item);
  //     console.log(data[item]);
  // }
  //   console.log(keys);
  //   console.log(emotion_length);
    return {
      //title value 값 넘겨서 받아주는지 확인하는 테스트
      //비디오 프로세싱 과정에서는 우선 신경쓰지 않아도 됨
      emotions: keys      
    }
  }



  // @Render('handle')
  @Post('/make')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/original_video',
        filename: editFileName,
      }),
      fileFilter: videoFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file: any) { // 
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }
  // @Get(':filepath')
  // @Render('handle')
  // seeUploadedFile(@Param('filepath') file: any, @Res() res: any) {
  //   return res.sendFile(file, { root: './upload/original_video' });
  // }
}

