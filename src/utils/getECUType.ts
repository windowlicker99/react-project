import { EECUTypes } from '@/interfaces/enums';

interface IGetTypeArgs {
  isRegular: boolean;
  hostVMorDocker: string | boolean;
  runVMorDocker: string | boolean;
}

export const getECUType = ({ isRegular, hostVMorDocker, runVMorDocker }: IGetTypeArgs): EECUTypes => {
  if (isRegular) {
    return EECUTypes.regular;
  }

  if (hostVMorDocker) {
    return EECUTypes.hostECU;
  }

  if (runVMorDocker) {
    return EECUTypes.VM;
  }

  return EECUTypes.regular;
};
