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

  //video processing main page
  @Get('/make')
  @Render('make')
  public make() {
  }

  @Get('/editor')
  @Render('editor')
  public editor() {
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

