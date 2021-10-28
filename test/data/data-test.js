const parseArgsData = [
  {
    in: ["--filter=uc", "--count"],
    out: { filter: 'uc', count: true },
  },
  {
    in: ["--filte=ry", "--count"],
    out: { filter: '', count: true },
  },
  {
    in: ["--filter=ry", "--cont"],
    out: { filter: 'ry', count: false },
  },
  {
    in: [],
    out: { filter: '', count: false },
  },
  {
    in: ["--filter=ry", "--count", "--filter=yo"],
    out: { filter: 'ry', count: true },
  },
];

const calculateNameData = [
  {
    in: {name: 'Jean Michel', count: true, length: 10},
    out: 'Jean Michel [10]',
  },
  {
    in: {name: 'Jean Jacques', count: false, length: 5},
    out: 'Jean Jacques',
  },
];

const filterAndCountAnimalsData = [
  {
    in: {
      people: {
        name: 'Winifred Graham',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}
          ]
      },
      query: { filter: 'a', count: true }
    },
    out:
      {
        name: 'Winifred Graham [4]',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
          ]
      },
  },
  {
    in: {
      people: {
        name: 'Winifred Graham',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}
          ]
      },
      query: { filter: '', count: true }
    },
    out:
      {
        name: 'Winifred Graham [6]',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}
          ]
      },
  },
  {
    in: {
      people: {
        name: 'Winifred Graham',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Duck'},
            {name: 'Narwhal'},
            {name: 'Badger'},
            {name: 'Cobra'},
            {name: 'Crow'}
          ]
      },
      query: { filter: 'o', count: false }
    },
    out:
      {
        name: 'Winifred Graham',
        animals:
          [
            {name: 'Anoa'},
            {name: 'Cobra'},
            {name: 'Crow'}
          ]
      },
  },
];

const filterAndCountCountriesData = [
  {
    in: {
      countries: [
        {
          name: 'Dillauti',
          people:
            [
              {
                name: 'Winifred Graham',
                animals:
                  [
                    {name: 'Anoa'},
                    {name: 'Duck'},
                    {name: 'Narwhal'},
                    {name: 'Badger'},
                    {name: 'Cobra'},
                    {name: 'Crow'}
                  ]
              },
              {
                name: 'Blanche Viciani',
                animals:
                  [
                    {name: 'Barbet'},
                    {name: 'Rhea'},
                    {name: 'Snakes'},
                    {name: 'Antelope'},
                    {name: 'Echidna'},
                    {name: 'Crow'},
                    {name: 'Guinea Fowl'},
                    {name: 'Deer Mouse'}
                  ]
              }
            ]
        },
        {
          name: 'Tohabdal',
          people:
            [
              {
                name: 'Effie Houghton',
                animals:
                  [
                    {name: 'Zebra'},
                    {name: 'Ring-tailed Lemur'},
                    {name: 'Fly'},
                    {name: 'Blue Iguana'},
                    {name: 'Emu'},
                    {name: 'African Wild Ass'},
                    {name: 'Numbat'}
                  ]
              }
            ]
        }
      ],
      query: { filter: 'u', count: true }
    },
    out:
      [
        {
          name: 'Dillauti [2]',
          people:
            [
              {
                name: 'Winifred Graham [1]',
                animals:
                  [
                    {name: 'Duck'},
                  ]
              },
              {
                name: 'Blanche Viciani [2]',
                animals:
                  [
                    {name: 'Guinea Fowl'},
                    {name: 'Deer Mouse'}
                  ]
              }
            ]
        },
        {
          name: 'Tohabdal [1]',
          people:
            [
              {
                name: 'Effie Houghton [4]',
                animals:
                  [
                    {name: 'Ring-tailed Lemur'},
                    {name: 'Blue Iguana'},
                    {name: 'Emu'},
                    {name: 'Numbat'}
                  ]
              }
            ]
        }
      ],
  },
  {
    in: {
      countries: [{
        name: 'Tohabdal',
        people:
          [
            {
              name: 'Effie Houghton',
              animals:
                [
                  {name: 'Zebra'},
                  {name: 'Ring-tailed Lemur'},
                  {name: 'Fly'},
                  {name: 'Blue Iguana'},
                  {name: 'Emu'},
                  {name: 'African Wild Ass'},
                  {name: 'Numbat'}
                ]
            }
          ]
      }],
      query: { filter: '', count: true }
    },
    out:
      [{
        name: 'Tohabdal [1]',
        people:
          [
            {
              name: 'Effie Houghton [7]',
              animals:
                [
                  {name: 'Zebra'},
                  {name: 'Ring-tailed Lemur'},
                  {name: 'Fly'},
                  {name: 'Blue Iguana'},
                  {name: 'Emu'},
                  {name: 'African Wild Ass'},
                  {name: 'Numbat'}
                ]
            }
          ]
      }],
  },
  {
    in: {
      countries: [{
        name: 'Tohabdal',
        people:
          [
            {
              name: 'Effie Houghton',
              animals:
                [
                  {name: 'Zebra'},
                  {name: 'Ring-tailed Lemur'},
                  {name: 'Fly'},
                  {name: 'Blue Iguana'},
                  {name: 'Emu'},
                  {name: 'African Wild Ass'},
                  {name: 'Numbat'}
                ]
            }
          ]
      }],
      query: { filter: 'n', count: false }
    },
    out:
      [{
        name: 'Tohabdal',
        people:
          [
            {
              name: 'Effie Houghton',
              animals:
                [
                  {name: 'Ring-tailed Lemur'},
                  {name: 'Blue Iguana'},
                  {name: 'African Wild Ass'}
                ]
            }
          ]
      }],
  },
];


module.exports = {
  parseArgsData,
  calculateNameData,
  filterAndCountAnimalsData,
  filterAndCountCountriesData
};
