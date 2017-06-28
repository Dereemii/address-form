import { TWO_LEVELS } from '../constants'

export default {
  country: 'COL',
  abbr: 'CO',
  postalCodeFrom: TWO_LEVELS,
  postalCodeLevels: ['state', 'city'],
  fields: [
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'complement',
      label: 'complement',
      size: 'large',
    },
    {
      name: 'neighborhood',
      label: 'neighborhood',
      size: 'large',
    },
    {
      name: 'state',
      label: 'department',
      required: true,
      size: 'large',
      isUpperCase: false,
    },
    {
      name: 'city',
      label: 'municipality',
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
    number: { valueIn: 'long_name', types: ['street_number'], required: false },
    street: {
      valueIn: 'long_name',
      types: ['route'],
      required: false,
      handler: (address, googleAddress) => {
        address.street = { value: googleAddress.name }
        return address
      },
    },
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
      valueIn: 'short_name',
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
