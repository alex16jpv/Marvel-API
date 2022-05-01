import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersController } from './controllers/characters/characters.controller';
import { CharactersService } from './services/characters/characters.service';
import { ComicsService } from './services/comics/comics.service';
import { ComicsController } from './controllers/comics/comics.controller';

@Module({
  imports: [],
  controllers: [AppController, CharactersController, ComicsController],
  providers: [AppService, CharactersService, ComicsService],
})
export class AppModule {}
