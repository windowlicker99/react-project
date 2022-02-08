import { EPhase, ERegulations } from '@/interfaces/enums';
import { IVehicle } from '@/interfaces/interfaces';

export const initialVehicle: IVehicle = {
  id: '',
  manufacturer: 'Skoda',
  model: '2021 TSI | MQB37W',
  riskLevel: 'noData',
  brand: { fullName: 'Skoda', name: 'Skoda', logo: '' },
  complianceLevel: 0,
  lastUpdate: '',
  logo: '',
  photo: '',
  platform: '',
  name: '',
  raProgress: 0,
  phase: EPhase.development,
  regulation: ERegulations.wp29,
  development: '10/09/2021',
  testing: '02/12/2021',
  compliancy: '03/12/2021',
  production: '04/12/2021',
};
