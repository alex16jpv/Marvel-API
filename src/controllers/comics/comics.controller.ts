import { Controller, Get, Param, Query } from '@nestjs/common';
import { ComicsService } from 'src/services/comics/comics.service';

@Controller('comics')
export class ComicsController {
  constructor(private service: ComicsService) {}

  @Get()
  async findAll(@Query() query: any) {
    return await this.service.getComics(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.getComic(id);
  }
}
