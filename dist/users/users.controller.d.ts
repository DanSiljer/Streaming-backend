import { User } from '@prisma/client';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private service;
    constructor(service: UserService);
    createUSer(data: CreateUserDto): Promise<User>;
    editUSer(id: string, data: UpdateUserDto): Promise<User>;
    findOne(id: string): Promise<User>;
    findMany(): Promise<any[]>;
    deleteOne(id: string): Promise<{
        message: string;
    }>;
    addList(user: User, filmeId: string): any;
}
