import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private db;
    constructor(db: PrismaService);
    createUser(dados: CreateUserDto): Promise<User>;
    findUser(id: string): Promise<User>;
    findMany(): Promise<any[]>;
    update(id: string, dadosDoUsuario: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    addList(user: User, filmeId: string): Promise<any>;
}
