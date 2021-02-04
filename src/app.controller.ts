import { Controller, Get, Post, Query, Render, UseInterceptors, UploadedFile, Res, Param, Body } from '@nestjs/common';
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
    shell.exec('python GoogleStorageResult.py') ;

  }
  
  @Get('/video')
  public video(){
    console.log("serverside");
    const shell = require('shelljs');
    shell.exec('node PythonToJs.js') ;
    shell.exec('python GoogleStorage.py') ;
  }

  @Post('/video')
  public editJSON(@Body() body:any){
    const fs = require('fs');
    const time = body.time;
    const music_id = body.music_id;

    console.log("selected music", music_id)
    const data = JSON.parse(fs.readFileSync('upload/emotion/emotions.json', 'utf8'));
    data[time] = music_id;
    const result = JSON.stringify(data);
    fs.writeFileSync('upload/emotion/emotions.json', result);

  }
  //video processing main page: 비디오 processing 메인 페이지
  @Get('/make')
  @Render('make')
  public make() {

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

}
