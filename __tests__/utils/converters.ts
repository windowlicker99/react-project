import { convertDomainsToRows } from '@utils/converters';
import { IDomain } from '@interfaces/interfaces';

describe('convertDomainsToRows test', () => {
  const mockedDomains: IDomain[] = [
    {
      id: 'nkj67g',
      model: 'TSI',
      platform: '2018',
      name: 'test',
      domainUsage: 'test',
      communication: ['online'],
      onlineConnectivity: 'Online',
      author: {
        id: 'vh6jk',
        name: 'Author',
        password: 'kjhk',
        avatar: '',
      },
      lastUpdate: '27.08',
      color: 'red',
      background: 'pink',
    },
  ];

  it('Should convert onlineConnectivity to connectivity', () => {
    const rows = convertDomainsToRows(mockedDomains);
    expect(rows[0].connectivity).toEqual(mockedDomains[0].onlineConnectivity);
  });
});
