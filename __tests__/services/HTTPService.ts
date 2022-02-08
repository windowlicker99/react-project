import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HTTPService from '@services/HTTPService';

describe('HTTPService tests', () => {
  it('Should return response', () => {
    const mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet('/domains').reply(200, data);

    HTTPService.get('/domains').then((res) => expect(res.data).toEqual(data));
  });
});
