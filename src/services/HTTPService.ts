import axios, { AxiosPromise } from 'axios';
import { IParams } from '@interfaces/interfaces';

const baseUrl = (path: string) => `${process.env.API_URL || ''}${path}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TData = Record<string, any>;
export default class HTTPService {
  static get(path = '', params: IParams = {}) {
    return axios({
      method: 'GET',
      url: baseUrl(path),
      params,
    });
  }

  static post(path: string, data: TData): AxiosPromise {
    return axios({
      method: 'POST',
      url: baseUrl(path),
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  static patch(path: string, data: TData): AxiosPromise {
    return axios({
      method: 'PATCH',
      url: baseUrl(path),
      data,
    });
  }

  static put(path: string, data: TData): AxiosPromise {
    return axios({
      method: 'PUT',
      url: baseUrl(path),
      data,
    });
  }

  static delete(path: string): AxiosPromise {
    return axios({
      method: 'DELETE',
      url: baseUrl(path),
    });
  }
}
