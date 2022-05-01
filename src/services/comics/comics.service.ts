import { HttpException, Injectable } from '@nestjs/common';
import { Request } from '../Request';

@Injectable()
export class ComicsService extends Request {
  async getComics(query: any) {
    try {
      const response = await this.get('/comics', query);
      return {
        statusCode: response.code,
        data: response.data,
      };
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async getComic(id: string) {
    try {
      const response = await this.get(`/comics/${id}`);

      return {
        statusCode: response.code,
        data: response.data,
      };
    } catch (error) {
      const { status, statusText } = error.response;

      throw new HttpException(statusText, status);
    }
  }
}
