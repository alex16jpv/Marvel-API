import { HttpException, Injectable } from '@nestjs/common';
import { Request } from '../Request';

@Injectable()
export class CharactersService {
  constructor(private request: Request) {}

  async getCharacters(query: any) {
    try {
      const response = await this.request.get('/characters', query);
      return {
        statusCode: response.code,
        data: response.data,
      };
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async getCharacter(id: string) {
    try {
      const response = await this.request.get(`/characters/${id}`);

      return {
        statusCode: response.code,
        data: response.data,
      };
    } catch (error) {
      const { status, statusText } = error.response;

      throw new HttpException(statusText, status);
    }
  }

  async getCharacterComics(id: string, query: any) {
    try {
      const response = await this.request.get(
        `/characters/${id}/comics`,
        query,
      );

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
