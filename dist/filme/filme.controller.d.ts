import { Filme } from '@prisma/client';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto, WatchedDto } from './dto/update-filme.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
    create(createFilmeDto: CreateFilmeDto): Promise<Filme>;
    findAll(): Promise<Filme[]>;
    findOne(id: string): Promise<Filme>;
    update(id: string, updateFilmeDto: UpdateFilmeDto): Promise<Filme>;
    remove(id: string): Promise<{
        message: string;
    }>;
    updateWatched(id: string, dados: WatchedDto): Promise<Filme>;
}
