import { HttpException, Injectable } from '@nestjs/common';
import { Request } from '../Request';

@Injectable()
export class CharactersService extends Request {
  async getCharacters(query: any) {
    try {
      const response = await this.get('/characters', query);
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
      const response = await this.get(`/characters/${id}`);

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
      const response = await this.get(`/characters/${id}/comics`, query);

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
