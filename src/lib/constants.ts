import { z } from 'zod'

const SECTORS = {
  manufacturing: {
    name: 'Manufacturing',
    value: '1',
    children: [
      {
        name: 'Construction materials',
        value: '19',
        children: [],
      },
      {
        name: 'Electronics and Optics',
        value: '18',
        children: [],
      },
      {
        name: 'Food and Beverage',
        value: '6',
        children: [
          {
            name: 'Bakery & confectionery products',
            value: '342',
            children: [],
          },
          {
            name: 'Beverages',
            value: '43',
            children: [],
          },
          {
            name: 'Fish & fish products',
            value: '42',
            children: [],
          },
          {
            name: 'Meat & meat products',
            value: '40',
            children: [],
          },
          {
            name: 'Milk & dairy products',
            value: '39',
            children: [],
          },
          {
            name: 'Other',
            value: '437',
            children: [],
          },
          {
            name: 'Sweets & snack food',
            value: '378',
            children: [],
          },
        ],
      },
      {
        name: 'Furniture',
        value: '13',
        children: [
          {
            name: 'Bathroom/sauna',
            value: '389',
            children: [],
          },
          {
            name: 'Bedroom',
            value: '385',
            children: [],
          },
          {
            name: 'Children’s room',
            value: '390',
            children: [],
          },
          {
            name: 'Kitchen',
            value: '98',
            children: [],
          },
          {
            name: 'Living room',
            value: '101',
            children: [],
          },
          {
            name: 'Office',
            value: '392',
            children: [],
          },
          {
            name: 'Other (Furniture)',
            value: '394',
            children: [],
          },
          {
            name: 'Outdoor',
            value: '341',
            children: [],
          },
          {
            name: 'Project furniture',
            value: '99',
            children: [],
          },
        ],
      },
      {
        name: 'Machinery',
        value: '12',
        children: [
          {
            name: 'Machinery components',
            value: '94',
            children: [],
          },
          {
            name: 'Machinery equipment/tools',
            value: '91',
            children: [],
          },
          {
            name: 'Manufacture of machinery',
            value: '224',
            children: [],
          },
          {
            name: 'Maritime',
            value: '97',
            children: [
              {
                name: 'Aluminium and steel workboats',
                value: '271',
                children: [],
              },
              {
                name: 'Boat/Yacht building',
                value: '269',
                children: [],
              },
              {
                name: 'Ship repair and conversion',
                value: '230',
                children: [],
              },
            ],
          },
          {
            name: 'Metal structures',
            value: '93',
            children: [],
          },
          {
            name: 'Other',
            value: '508',
            children: [],
          },
          {
            name: 'Repair and maintenance service',
            value: '227',
            children: [],
          },
        ],
      },
      {
        name: 'Metalworking',
        value: '11',
        children: [
          {
            name: 'Construction of metal structures',
            value: '67',
            children: [],
          },
          {
            name: 'Houses and buildings',
            value: '263',
            children: [],
          },
          {
            name: 'Metal products',
            value: '267',
            children: [
              {
                name: 'CNC-machining',
                value: '75',
                children: [],
              },
              {
                name: 'Forgings, Fasteners',
                value: '62',
                children: [],
              },
              {
                name: 'Gas, Plasma, Laser cutting',
                value: '69',
                children: [],
              },
              {
                name: 'MIG, TIG, Aluminum welding',
                value: '66',
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Plastic and Rubber',
        value: '9',
        children: [
          {
            name: 'Packaging',
            value: '54',
            children: [],
          },
          {
            name: 'Plastic goods',
            value: '556',
            children: [],
          },
          {
            name: 'Plastic processing technology',
            value: '559',
            children: [
              {
                name: 'Blowing',
                value: '55',
                children: [],
              },
              {
                name: 'Moulding',
                value: '57',
                children: [],
              },
              {
                name: 'Plastics welding and processing',
                value: '53',
                children: [],
              },
            ],
          },
          {
            name: 'Plastic profiles',
            value: '560',
            children: [],
          },
        ],
      },
      {
        name: 'Printing',
        value: '5',
        children: [
          {
            name: 'Advertising',
            value: '148',
            children: [],
          },
          {
            name: 'Book/Periodicals printing',
            value: '150',
            children: [],
          },
          {
            name: 'Labelling and packaging printing',
            value: '145',
            children: [],
          },
        ],
      },
      {
        name: 'Textile and Clothing',
        value: '7',
        children: [
          {
            name: 'Clothing',
            value: '44',
            children: [],
          },
          {
            name: 'Textile',
            value: '45',
            children: [],
          },
        ],
      },
      {
        name: 'Wood',
        value: '8',
        children: [
          {
            name: 'Other (Wood)',
            value: '337',
            children: [],
          },
          {
            name: 'Wooden building materials',
            value: '51',
            children: [],
          },
          {
            name: 'Wooden houses',
            value: '47',
            children: [],
          },
        ],
      },
    ],
  },
  other: {
    name: 'Other',
    value: '3',
    children: [
      {
        name: 'Creative industries',
        value: '37',
        children: [],
      },
      {
        name: 'Energy technology',
        value: '29',
        children: [],
      },
      {
        name: 'Environment',
        value: '33',
        children: [],
      },
    ],
  },
  service: {
    name: 'Service',
    value: '2',
    children: [
      {
        name: 'Business services',
        value: '25',
        children: [],
      },
      {
        name: 'Engineering',
        value: '35',
        children: [],
      },
      {
        name: 'Information Technology and Telecommunications',
        value: '28',
        children: [
          {
            name: 'Data processing, Web portals, E-marketing',
            value: '581',
            children: [],
          },
          {
            name: 'Programming, Consultancy',
            value: '576',
            children: [],
          },
          {
            name: 'Software, Hardware',
            value: '121',
            children: [],
          },
          {
            name: 'Telecommunications',
            value: '122',
            children: [],
          },
        ],
      },
      {
        name: 'Tourism',
        value: '22',
        children: [],
      },
      {
        name: 'Translation services',
        value: '141',
        children: [],
      },
      {
        name: 'Transport and Logistics',
        value: '21',
        children: [
          {
            name: 'Air',
            value: '111',
            children: [],
          },
          {
            name: 'Rail',
            value: '114',
            children: [],
          },
          {
            name: 'Road',
            value: '112',
            children: [],
          },
          {
            name: 'Water',
            value: '113',
            children: [],
          },
        ],
      },
    ],
  },
}

const SECTOR_INITIAL_VALUE = {
  name: '',
  value: '',
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  sector: z.object({
    name: z.string().nonempty(),
    value: z.string().nonempty(),
  }),
  agreedToTerms: z.boolean().refine((val) => val, {
    message: 'You must agree to the terms to continue.',
  }),
})

type FormValues = z.infer<typeof formSchema>

// This can come from your database or API.
const formDefaultValues: Partial<FormValues> = {
  name: '',
  sector: SECTOR_INITIAL_VALUE,
  agreedToTerms: false,
}

export {
  SECTORS,
  SECTOR_INITIAL_VALUE,
  formSchema,
  formDefaultValues,
  type FormValues,
}
