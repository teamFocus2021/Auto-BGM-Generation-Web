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
  
  @Get('/editor')
  @Render('editor')
  public editor() {
  }

  //video processing main page: 비디오 processing 메인 페이지
  @Get('/make')
  @Render('make')
  public make() {
    //serverside에서 Nest.js 차원에서 command 명령어 실행하여
    //python 파일 실행하기 shelljs 생성 -> exec로 실행하기 
    console.log("serverside");
    const shell = require('shelljs')
    shell.exec('node NewVideo.js') 

    //cmd창에서만 실행됨, why? > newVideo를 결과물로 가짐!
    //오류, 왜 실행이 안되지? cmd 창에서 직접 실행하는 것만 되고 명령어로 실행 안됨

    /*
    function toFrame(){
      if (shell.exec('python ToFrame.py').code !== 0) {
          shell.echo('Error: python toFrame failed')
          shell.exit(1)
      }
    }
    function faceApi(){
        if (shell.exec('python FaceApi.py').code !== 0) {
            shell.echo('Error: python FaceApi failed')
            shell.exit(1)
        }
    }

    //face detect 실행하기: <make> 페이지 로드 시 자동 실행
    toFrame()
    setTimeout(() => faceApi(), 10);
    
    console.log("command compelete!");
    */

    return {
      //title value 값 넘겨서 받아주는지 확인하는 테스트
      //비디오 프로세싱 과정에서는 우선 신경쓰지 않아도 됨
      title: 'Nest with Next'
      
    }
  }
  @Post('/handle')
  @Render('handle')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: editFileName,
      }),
      fileFilter: videoFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file: any) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  @Get(':filepath')
  @Render('handle')
  seeUploadedFile(@Param('filepath') file: any, @Res() res: any) {
    return res.sendFile(file, { root: './upload' });
  }
}

