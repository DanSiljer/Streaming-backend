import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CrendentialsDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dados: CrendentialsDto): Promise<{
        token: string;
    }>;
    profile(user: User): User;
}
