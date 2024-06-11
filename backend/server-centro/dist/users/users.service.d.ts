import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create_user(data: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        area: string;
    }>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    login_user(loginUserDto: LoginUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        area: string;
    }>;
}
