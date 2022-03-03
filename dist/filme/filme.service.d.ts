import { PrismaService } from 'src/prisma.service';
import { Filme } from '@prisma/client';
import { CreateFilmeDto } from './dto/create-filme.dto';
export declare class FilmeService {
    private db;
    constructor(db: PrismaService);
    create(dados: CreateFilmeDto): Promise<Filme>;
    findAll(): Promise<Filme[]>;
    findOne(id: string): Promise<Filme>;
    const filmeExist: any;
    if(: any, filmeExist: any): void;
}
