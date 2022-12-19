import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [JogadoresModule],
  controllers: [JogadoresController],
  providers: [],
})
export class AppModule {}
