import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Get()
  async criarAtualizarJogador() {
    return JSON.stringify({
      nome: 'Gabriel Oliveira',
    });
  }
}
