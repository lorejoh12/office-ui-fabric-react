  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-3"`,
      src: `url('${baseUrl}fabric-icons-3-089e217a.woff') format('woff')`
    },
    icons: {
      'ChevronDownSmall': '\uE96E',
      'ChevronLeftSmall': '\uE96F',
      'ChevronRightSmall': '\uE970',
      'ChevronUpMed': '\uE971',
      'ChevronDownMed': '\uE972',
      'ChevronLeftMed': '\uE973',
      'ChevronRightMed': '\uE974',
      'Devices2': '\uE975',
      'PC1': '\uE977',
      'PresenceChickletVideo': '\uE979',
      'Reply': '\uE97A',
      'HalfAlpha': '\uE97E',
      'ConstructionCone': '\uE98F',
      'DoubleChevronLeftMed': '\uE991',
      'Volume0': '\uE992',
      'Volume1': '\uE993',
      'Volume2': '\uE994',
      'Volume3': '\uE995',
      'Chart': '\uE999',
      'Robot': '\uE99A',
      'Manufacturing': '\uE99C',
      'LockSolid': '\uE9A2',
      'FitPage': '\uE9A6',
      'FitWidth': '\uE9A7',
      'BidiLtr': '\uE9AA',
      'BidiRtl': '\uE9AB',
      'RightDoubleQuote': '\uE9B1',
      'Sunny': '\uE9BD',
      'CloudWeather': '\uE9BE',
      'Cloudy': '\uE9BF',
      'PartlyCloudyDay': '\uE9C0',
      'PartlyCloudyNight': '\uE9C1',
      'ClearNight': '\uE9C2',
      'RainShowersDay': '\uE9C3',
      'Rain': '\uE9C4',
      'Thunderstorms': '\uE9C6',
      'RainSnow': '\uE9C7',
      'Snow': '\uE9C8',
      'BlowingSnow': '\uE9C9',
      'Frigid': '\uE9CA',
      'Fog': '\uE9CB',
      'Squalls': '\uE9CC',
      'Duststorm': '\uE9CD',
      'Unknown': '\uE9CE',
      'Precipitation': '\uE9CF',
      'Ribbon': '\uE9D1',
      'AreaChart': '\uE9D2',
      'Assign': '\uE9D3',
      'FlowChart': '\uE9D4',
      'CheckList': '\uE9D5',
      'Diagnostic': '\uE9D9',
      'Generate': '\uE9DA',
      'LineChart': '\uE9E6',
      'Equalizer': '\uE9E9',
      'BarChartHorizontal': '\uE9EB',
      'BarChartVertical': '\uE9EC',
      'Freezing': '\uE9EF',
      'FunnelChart': '\uE9F1',
      'Processing': '\uE9F5',
      'Quantity': '\uE9F8',
      'ReportDocument': '\uE9F9',
      'StackColumnChart': '\uE9FC',
      'SnowShowerDay': '\uE9FD',
      'HailDay': '\uEA00',
      'WorkFlow': '\uEA01',
      'HourGlass': '\uEA03',
      'StoreLogoMed20': '\uEA04',
      'TimeSheet': '\uEA05',
      'TriangleSolid': '\uEA08',
      'UpgradeAnalysis': '\uEA0B',
      'VideoSolid': '\uEA0C',
      'RainShowersNight': '\uEA0F',
      'SnowShowerNight': '\uEA11',
      'Teamwork': '\uEA12',
      'HailNight': '\uEA13',
      'PeopleAdd': '\uEA15',
      'Glasses': '\uEA16',
      'DateTime2': '\uEA17',
      'Shield': '\uEA18',
      'Header1': '\uEA19',
      'PageAdd': '\uEA1A',
      'NumberedList': '\uEA1C',
      'PowerBILogo': '\uEA1E',
      'Info2': '\uEA1F',
      'MusicInCollectionFill': '\uEA36',
      'Asterisk': '\uEA38',
      'ErrorBadge': '\uEA39',
      'CircleFill': '\uEA3B',
      'Record2': '\uEA3F',
      'AllAppsMirrored': '\uEA40',
      'BookmarksMirrored': '\uEA41',
      'BulletedListMirrored': '\uEA42',
      'CaretHollowMirrored': '\uEA45',
      'CaretSolidMirrored': '\uEA46',
      'ChromeBackMirrored': '\uEA47',
      'ClearSelectionMirrored': '\uEA48',
      'ClosePaneMirrored': '\uEA49',
      'DockLeftMirrored': '\uEA4C',
      'DoubleChevronLeftMedMirrored': '\uEA4D',
      'GoMirrored': '\uEA4F'
    }
  };

  registerIcons(subset, options);
}
