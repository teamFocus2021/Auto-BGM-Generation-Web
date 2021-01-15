//user.controller.ts : 유저의 접근을 직접 받는 부분
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
    //리스트 반환 (service의 함수 사용해서)
  }
}