//user.service.ts
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  //유저의 모든 데이터를 가지고 오는 함수 (test용으로 확인)
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}