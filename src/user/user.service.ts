import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity.js';
import { CreateUserReqDto } from './dto/create-user.req.dto.js';
import { HashHelper } from '../helper/hash.help.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly hashHelper: HashHelper,
  ) { }

  async create(dto: CreateUserReqDto) {
    const email = dto.email.toLowerCase();

    const oldUser = await this.userRepository.findOneBy({
      email,
    });

    if (oldUser) {
      throw new ConflictException(
        'User with this email is already registered',
      );
    }

    const passwordHash = await this.hashHelper.hash(
      dto.password,
    );

    const user = this.userRepository.create({
      email,
      fullname: dto.fullname,
      password_hash: passwordHash,
      is_block: false,
    });

    const savedUser = await this.userRepository.save(user);

    return {
      message: 'User registered successfully',
      user: {
        id: savedUser.id,
        email: savedUser.email,
        fullname: savedUser.fullname,
      },
    };
  }
}