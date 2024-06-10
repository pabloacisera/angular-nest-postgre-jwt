import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create_user(createUserDto: CreateUserDto) {
    const { area, name, email, password } = createUserDto;
    const passHash = await bcrypt.hash(password, 10);
    const newUser = {
      area,
      name,
      email,
      password: passHash,
    }
    console.log(newUser);
    //return this.prisma.user.create(data:newUser)
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
