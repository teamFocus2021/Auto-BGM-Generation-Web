import { extname } from 'path';

export const videoFileFilter = (req: any, file: any, callback: any) => {
  if (!file.originalname.match(/\.(webm|mkv|flv|vob|avi|wmv|amv|mp4|m4p|m4v|f4v|f4p|f4a|f4b)$/)) {
    return callback(new Error('Only video files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req: any, file: any, callback: any) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};