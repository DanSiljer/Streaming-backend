"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(db) {
        this.db = db;
    }
    async createUser(dados) {
        if (dados.password !== dados.confirmpassword) {
            throw new common_1.UnauthorizedException('Passwords do not match');
        }
        const emailExist = await this.db.user.findUnique({
            where: { email: dados.email },
        });
        const userNameExist = await this.db.user.findUnique({
            where: { userName: dados.userName },
        });
        if (userNameExist) {
            throw new common_1.ConflictException('Username already in use');
        }
        if (emailExist) {
            throw new common_1.ConflictException('Email is already in use.');
        }
        const salt = 10;
        const hashPassword = await bcrypt.hash(dados.password, salt);
        const user = await this.db.user.create({
            data: Object.assign(Object.assign({}, dados), { password: hashPassword }),
        });
        delete user.confirmpassword;
        delete user.password;
        return user;
    }
    async findUser(id) {
        const user = await this.db.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('ID not found in database');
        }
        delete user.password;
        delete user.confirmpassword;
        return user;
    }
    async findMany() {
        const user = await this.db.user.findMany();
        const userNoPass = user.map((_a) => {
            var { password } = _a, resto = __rest(_a, ["password"]);
            return resto;
        });
        return userNoPass;
    }
    async update(id, dadosDoUsuario) {
        const user = await this.db.user.update({
            data: dadosDoUsuario,
            where: { id: id },
        });
        delete user.password;
        return user;
    }
    async deleteUser(id) {
        const user = await this.db.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('ID not found in database');
        }
        else {
            await this.db.user.delete({
                where: { id },
            });
        }
        return {
            message: 'successful deleting user',
        };
    }
    async addList(user, filmeId) {
        const filme = await this.db.filme.findUnique({
            where: { id: filmeId },
        });
        if (!filme) {
            throw new common_1.NotFoundException('Filme not Found.');
        }
        const usuario = await this.db.user.update({
            where: { id: user.id },
            data: {
                filmes: {
                    connect: {
                        id: filme.id,
                    },
                },
            },
            include: {
                filmes: true,
            },
        });
        delete usuario.password;
        delete usuario.confirmpassword;
        return usuario;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map