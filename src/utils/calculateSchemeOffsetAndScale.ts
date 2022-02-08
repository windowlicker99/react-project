import { ScrollSettingsModel } from '@syncfusion/ej2-diagrams';

export const calculateSchemeOffsetAndScale = (domainsLength: number): ScrollSettingsModel => {
  let horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 130;
  let currentZoom = 1;
  switch (domainsLength) {
    case 5:
    case 6:
      currentZoom = 0.8;
      break;
    case 7:
      currentZoom = 0.7;
      break;
    case 8:
      currentZoom = 0.6;
      break;
    case 9:
      currentZoom = 0.55;
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 60;
      break;
    case 10:
      currentZoom = 0.5;
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 50;
      break;
    case 11:
      currentZoom = 0.45;
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 50;
      break;
    case 12:
      currentZoom = 0.4;
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 60;
      break;
    case 13:
    case 14:
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 50;
      currentZoom = 0.35;
      break;
    case 15:
    case 16:
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 50;
      currentZoom = 0.3;
      break;
    case 17:
    case 18:
    case 19:
    case 20:
      horizontalOffset = document.getElementById('architectureScheme')?.offsetWidth / 2 - 50;
      currentZoom = 0.25;
      break;
    default:
      currentZoom = 1;
      break;
  }

  return { horizontalOffset, currentZoom, verticalOffset: 30 };
};
