import { POSTAL_CODE } from '../constants'

export default {
  country: 'MEX',
  abbr: 'MX',
  postalCodeFrom: POSTAL_CODE,
  fields: [
    {
      name: 'postalCode',
      label: 'postalCode',
      required: true,
      mask: '99999',
      regex: '^\\d{5}$',
      postalCodeAPI: true,
      forgottenURL: 'http://www.sepomex.gob.mx/servicioslinea/paginas/ccpostales.aspx',
      size: 'small',
    },
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'number',
      label: 'exteriorNumber',
      required: true,
      size: 'mini',
    },
    {
      name: 'complement',
      label: 'interiorNumber',
      size: 'large',
    },
    {
      name: 'neighborhood',
      label: 'colony',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'city',
      label: 'municipalityDelegation',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'state',
      label: 'state',
      required: true,
      size: 'xlarge',
      isUpperCase: false,
      options: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de México',
        'Coahuila De Zaragoza',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México',
        'Michoacán de Ocampo',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
  ],
  geolocation: {
    postalCode: { valueIn: 'long_name', types: ['postal_code'], required: true },
    number: { valueIn: 'long_name', types: ['street_number'], required: false },
    street: { valueIn: 'long_name', types: ['route'], required: false },
    neighborhood: {
      valueIn: 'long_name',
      types: ['neighborhood'],
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
