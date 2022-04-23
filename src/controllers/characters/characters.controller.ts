import { Controller, Get, Param } from '@nestjs/common';

@Controller('characters')
export class CharactersController {
  @Get()
  findAll(@Param() params: any) {
    return {
      message: 'This action returns all characters',
      payload: {
        params,
      },
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      message: 'This action returns a single character',
      payload: {
        id,
      },
    };
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
