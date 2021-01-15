import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { TypeOrmModule } from '@nestjs/typeorm';
import Next from 'next';
import { AppController } from './app.controller';
import { UserModule } from './UserComponent/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '35.189.140.44', //our private info
      port: 3306,
      username: 'root',
      password: 'gimdodo4564', //our private info
      database: 'ourdb', //our private info
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false },
      }),
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
