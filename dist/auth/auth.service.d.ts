import { PrismaService } from 'src/prisma.service';
import { CrendentialsDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private db;
    private jwt;
    constructor(db: PrismaService, jwt: JwtService);
    login(dados: CrendentialsDto): Promise<{
        token: string;
    }>;
}
