import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from '../../services/characters/characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private service: CharactersService) {}

  @Get()
  async findAll(@Query() query: any) {
    return await this.service.getCharacters(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.getCharacter(id);
  }

  @Get(':id/comics')
  findComics(@Param('id') id: string) {
    return {
      message: 'This action returns a single character comics',
      payload: {
        id,
      },
    };
  }

  @Get(':id/series')
  findSeries(@Param('id') id: string) {
    return {
      message: 'This action returns a single character series',
      payload: {
        id,
      },
    };
  }

  @Get(':id/stories')
  findStories(@Param('id') id: string) {
    return {
      message: 'This action returns a single character stories',
      payload: {
        id,
      },
    };
  }
}
