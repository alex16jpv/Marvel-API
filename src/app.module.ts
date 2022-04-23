import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersController } from './controllers/characters/characters.controller';

@Module({
  imports: [],
  controllers: [AppController, CharactersController],
  providers: [AppService],
})
export class AppModule {}
