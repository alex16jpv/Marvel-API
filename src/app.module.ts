import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersController } from './controllers/characters/characters.controller';
import { CharactersService } from './services/characters/characters.service';
import { Request } from './services/Request';

@Module({
  imports: [],
  controllers: [AppController, CharactersController],
  providers: [AppService, CharactersService, Request],
})
export class AppModule {}
