import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create_user(data: CreateUserDto) {
    const { area, name, email, password } = data;
    const passHash = await bcrypt.hash(password, 10);
    const newUser = this.prisma.user.create({
      data: {
        area,
        name,
        password: passHash,
        email,
      },
    });
    return newUser;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user and ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login_user(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const userFind = await this.prisma.user.findUnique({ where: { email } });
    if (!userFind) {
      throw new NotFoundException('User not found');
    }
    const comparePassword = await bcrypt.compare(
      password,
      loginUserDto.password,
    );
    if (!comparePassword) {
      throw new NotFoundException('The password not exist');
    }
    const dataUser = userFind;
    return dataUser;
  }
}
