import axios from 'axios';
import { getApiHash } from '../../utils';

export class Request {
  private apiHash: any;
  private apiUrl: string = process.env.MARVEL_URL;

  constructor() {
    this.apiHash = getApiHash();
  }

  public async get(url: string, params: any = {}): Promise<any> {
    const response = await axios.get(`${this.apiUrl}${url}`, {
      params: {
        ...this.apiHash,
        ...params,
      },
    });
    return response.data;
  }
}
