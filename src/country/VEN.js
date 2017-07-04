import { TWO_LEVELS } from '../constants'
import { secondLevelPostalCodes } from '../transforms/postalCodes'
import { getOneLevel, getTwoLevels } from '../transforms/addressFieldsOptions'

const countryData = {
  Anzoategui: {
    'Anaco ': '6001',
    'Aragua ': '6002',
    'Simón Bolivar ': '6003',
    'San Juan de Capristano': '6004',
    'Pedro María Freites': '6005',
    'Manuel Ezequiel Bruzual': '6006',
    'Sir Arthur Mc Gregor ': '6007',
    'Simón Rodriguez': '6008',
    Guanta: '6009',
    'Diego Bautista Urbaneja': '6010',
    'Jose Gregorio Monagas': '6011',
    'Juan Manuel Cajigal': '6012',
    'Francisco de Miranda ': '6013',
    'Píritu ': '6014',
    'Juan Antonio Sotillo': '6015',
    'Fernando de Peñalver': '6016',
    'San Jose de Guanipa/Guanipa': '6017',
    Libertad: '6018',
    'Santa Ana ': '6019',
    'Indpendencia ': '6020',
    'Francisco del Carmen Carvajal ': '6021',
  },
  Aragua: {
    Urdaneta: '2335',
    Sucre: '2336',
    Camatagua: '2337',
    'Jose Rafael Revenga': '2338',
    'Jose Felix Ribas': '2339',
    Girardot: '2340',
    'Libertador ': '2341',
    'San casimiro': '2342',
    Bolivar: '2343',
    'San Sebastian': '2344',
    'Jose Angel Lamas': '2345',
    Zamora: '2346',
  },
  Barinas: {
    'Barinas ': '5201',
    'Bolívar ': '5202',
    'Cruz Paredes': '5203',
    Pedraza: '5204',
    'Rojas ': '5205',
    Obispos: '5206',
    'Alberto Arvelo Torrealba': '5207',
  },
  Bolívar: {
    Heres: '5208',
  },
  Carabobo: {
    Bejuma: '2040',
    Guacara: '2041',
    'Carlos Arvelo ': '2042',
    'Los Guayos': '2043',
    Miranda: '2044',
    Montalbán: '2045',
    'Juan José Mora': '2046',
    Naguanagua: '2047',
    'Puerto Cabello ': '2048',
    'San Diego': '2049',
    Libertador: '2050',
    Valencia: '2051',
  },
  Cojedes: {
    Anzoátegui: '2209',
    Girardot: '2210',
    'Pao de San Juan Bautista': '2211',
    Ricaurte: '2212',
    'Lima Blanco': '2213',
    'San Carlos': '2214',
    Tinaco: '2215',
  },
  'Distrito Capital': {
    Libertador: '2216',
  },
  Falcón: {
    Dabajuro: '2217',
    Colina: '2218',
    Miranda: '2219',
    'Zamora ': '2220',
    Carirubana: '2221',
  },
  Guárico: {
    'José Tadeo Monagas': '2320',
    'Francisco de Miranda': '2321',
    Chaguaramas: '2322',
    'El Socorro': '2323',
    'Julián Mellado': '2324',
    'San Gerónimo de Guayabal': '2325',
    'Las Mercedes': '2326',
    Ortíz: '2327',
    'San José de Guaribe': '2328',
    'Juan Germán Roscio': '2329',
    'Santa María de Ipire': '2330',
    'José Félix Ribas': '2331',
    'Leonardo Infante': '2390',
  },
  Lara: {
    Palavecino: '2391',
  },
  Mérida: {
    'Rivas Dávila': '2392',
    'Campo Elías': '2393',
    Libertador: '2394',
    Tovar: '2395',
  },
  Miranda: {
    'Pedro Gual': '2396',
    Carrizal: '2397',
    Acevedo: '2398',
    Chacao: '2399',
    'Cristóbal Rojas': '2400',
    'El Hatillo': '2401',
    Plaza: '2402',
    'Zamora ': '2403',
    Brión: '2404',
    Guaicaipuro: '2405',
    Baruta: '2406',
    Sucre: '2407',
    'Los Salias': '2408',
    'Simón Bolívar': '2409',
    'Andrés Bello': '2410',
    'Paz Castillo': '2411',
    Independencia: '2412',
  },
  Monagas: {
    Piar: '6200',
    Sotillo: '6201',
    Cedeño: '6202',
    Caripe: '6203',
    Maturín: '6204',
    Acosta: '6205',
    'Santa Bárbara': '6206',
  },
  'Nueva Esparta': {
    'Península de Macanao': '6300',
    Garcia: '6301',
    Marcano: '6302',
    Arismendi: '6303',
    'Antolín del Campo': '6304',
    Maneiro: '6306',
    Mariño: '6311',
    Tubores: '6312',
    Díaz: '6313',
    'Villalba ': '6314',
    Gómez: '6315',
  },
  Portuguesa: {
    Páez: '3300',
    Araure: '3301',
    Guanare: '3303',
  },
  Sucre: {
    Sucre: '6500',
    Montes: '6501',
    Bolívar: '6502',
    Mejía: '6503',
  },
  Táchira: {
    Guásimos: '5015',
    'San Cristobal': '5016',
    Cárdenas: '5017',
    Córdoba: '5018',
  },
  Trujillo: {
    'Rafael Rangel': '3115',
    Boconó: '3116',
    'Juan Vicente Campo Elías': '3117',
    Candelaria: '3118',
    Miranda: '3119',
    Motatán: '3120',
    Pampán: '3121',
    Sucre: '3122',
    'La ceiba': '3123',
    'Valera ': '3124',
  },
  Vargas: {
    Vargas: '1162',
  },
  Yaracuy: {
    Bruzual: '3202',
    'Independencia ': '3201',
    Cocorote: '3203',
    Sucre: '3204',
    'José Antonio Páez': '3205',
    'San Felipe': '3206',
    'Arístides Bastidas': '3207',
    Peña: '3208',
  },
  Zulia: {
    Cabimas: '4013',
    Maracaibo: '4014',
    'San Francisco': '4015',
  },
}

export default {
  country: 'VEN',
  abbr: 'VE',
  postalCodeFrom: TWO_LEVELS,
  postalCodeLevels: ['state', 'city'],
  secondLevelPostalCodes: secondLevelPostalCodes(countryData),
  fields: [
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'number',
      label: 'number',
      required: true,
      size: 'mini',
    },
    {
      name: 'complement',
      label: 'complement',
      size: 'large',
    },
    {
      name: 'state',
      label: 'region',
      required: true,
      size: 'large',
      level: 1,
      options: getOneLevel(countryData),
    },
    {
      name: 'city',
      label: 'city',
      required: true,
      size: 'large',
      level: 2,
      basedOn: 'state',
      optionsMap: getTwoLevels(countryData),
    },
    {
      name: 'neighborhood',
      label: 'neighborhood',
      required: true,
      size: 'large',
    },
  ],
  geolocation: {
    postalCode: {
      valueIn: 'long_name',
      types: ['postal_code'],
      required: false,
    },
    complement: {
      valueIn: 'long_name',
      types: ['street_number'],
      required: false,
    },
    street: { valueIn: 'long_name', types: ['route'], required: false },
    neighborhood: {
      valueIn: 'long_name',
      types: [
        'neighborhood',
        'sublocality_level_1',
        'sublocality_level_2',
        'sublocality_level_3',
        'sublocality_level_4',
        'sublocality_level_5',
      ],
      required: false,
    },
    state: {
      valueIn: 'long_name',
      types: ['administrative_area_level_1'],
      required: false,
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2', 'locality'],
      required: false,
    },
  },
}
