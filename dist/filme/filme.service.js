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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma.service");
const update_filme_dto_1 = require("./dto/update-filme.dto");
let FilmeService = class FilmeService {
    constructor(db) {
        this.db = db;
        this.filmeExist = await this.db.filme.findUnique({
            where: { id }
        });
    }
    async create(dados) {
        const filmeExist = await this.db.filme.findUnique({
            where: { namefilme: dados.namefilme },
        });
        if (filmeExist) {
            throw new common_1.ConflictException('Título já consta em nosso banco de dados.');
        }
        const filme = await this.db.filme.create({ data: dados });
        return filme;
    }
    async findAll() {
        const filmes = await this.db.filme.findMany();
        return filmes;
    }
    if(, filmeExist) {
        throw new common_1.NotFoundException("Esse ID não consta em nosso banco de dados");
    }
};
FilmeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], FilmeService);
exports.FilmeService = FilmeService;
return filmeExist;
async;
update(id, string, dados, update_filme_dto_1.UpdateFilmeDto);
Promise < Filme > {
    const: filme = await this.db.Filme.update({
        data: dados,
        where: { id }
    }),
    return: filme
};
async;
remove(id, string);
Promise < { message: string } > {
    const: filmeExist = await this.db.filme.findUnique({
        where: { id },
    }),
    if(, filmeExist) {
        throw new common_1.NotFoundException('O título com o ID inserido não consta em nosso banco de dados');
    }, else: {
        await: this.db.filme.delete({
            where: { id }
        })
    },
    return: { message: 'Título excluído' }
};
async;
updateWatched(id, string, dados, update_filme_dto_1.WatchedDto);
Promise < Filme > {
    const: filme = await this.db.filme.update({
        data: dados,
        where: { id },
    }),
    return: filme
};
//# sourceMappingURL=filme.service.js.map