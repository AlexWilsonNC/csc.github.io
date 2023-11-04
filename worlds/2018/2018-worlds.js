const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Robin Schulz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/town-map.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 3,
            "name": "Unit Energy LPM",
            "number": "138",
            "set": "UPR"
      }
    ]
  },
  {
    firstName: 'Jeff Kolenc',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/necrozma.png',
    banned: true,
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
         "count": 2,
            "name": "Marshadow GX",
            "number": "80",
            "set": "BUS"
      },
      {
        "count": 1,
          "name": "Dawn Wings Necrozma GX",
          "number": "63",
          "set": "UPR"
      },
      {
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lunala-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mimikyu.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/10.png'
      }
    ]
  },
  {
    firstName: 'Klive Aw Junjie',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/zygarde-complete.png',
    sprite2: '../../assets/sprites/lycanroc-midnight.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/zygarde-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/10.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/xurkitree-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Eric Smith',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/latias-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/lycanroc-midnight.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Shuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/latias-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Brian Miller',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/golisopod.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/greninja.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-gale-shuriken.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/starmie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/staryu.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-water.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-splash.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/jolteon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ninja-boy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volkner.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wishful-baton.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Team Skull Grunt",
          "number": "133",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rare Candy",
          "number": "142",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/xurkitree-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/banette-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shuppet.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/banette-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shuppet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Hunter Butler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
            "name": "Oranguru",
            "number": "113",
            "set": "SUM",
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/greninja.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-gale-shuriken.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie-bubble.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/starmie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/staryu.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-water.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-splash.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Marc Lutz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Magcargo",
          "number": "24",
          "set": "CES"
      },
      {
        "count": 2,
            "name": "Slugma",
            "number": "23",
            "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Joey Ruettiger',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Team Skull Grunt",
          "number": "133",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rare Candy",
          "number": "142",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Seitaro Shibuya',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/lycanroc-midnight.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Ryan Moorhouse',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/latios.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/banette-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shuppet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Kristian Hodas',
    flag: '../../assets/flags/slovakia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/greninja.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-gale-shuriken.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/starmie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/staryu.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-water.png',
        numImg: '../../assets/06.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-splash.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/malamar.png',
    sprite2: '../../assets/sprites/hoopa-unbound.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Ángel Torres',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/pheromosa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/latias-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-lightning.png',
        numImg: '../../assets/07.png'
      }
    ]
  },
  {
    firstName: 'Treynor Wolfe',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/buzzwole.png',
    sprite2: '../../assets/sprites/lycanroc-midnight.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/hoopa-unbound.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/yveltal-break.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/yveltal.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/yveltal-strafe.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-guard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/latios.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eneporter.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-dark.png',
        numImg: '../../assets/09.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/zoroark.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 2,
            "name": "Unit Energy LPM",
            "number": "138",
            "set": "UPR"
      }
    ]
  }
]

let seniors = [
    {
      firstName: 'Magnus Pederson',
      flag: '../../assets/flags/denmark.png',
      sprite1: '../../assets/sprites/banette.png',
      sprite2: '../../assets/sprites/garbodor.png',
      list: '../../assets/list-icon.png',
      deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
      deck: [
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/banette-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shuppet.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wobbuffet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
      ]
    },
    {
        firstName: 'Conner Pederson',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/octillery.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/regirock.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/sudowoodo.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/oranguru.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/special-charge.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/shrineofpunush.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-psychic.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-rainbow.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Takumi Kaji',
        flag: '../../assets/flags/japan.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/lycanroc-midnight.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
    
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
    },
    {
        firstName: 'Matthew Campbell',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/greninja.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/greninja-break.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/greninja.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/froakie.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/starmie.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/staryu.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/evosoda.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/max-potion.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/enhanced-hammer.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/random-receiver.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/super-rod.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-water.png',
            numImg: '../../assets/06.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-splash.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Benjamin Branch-Trevathan',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/lycanroc-midnight.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Diancie ♢",
          "number": "74",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
    
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fighting.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
    },
    {
        firstName: 'Caleb Banwarie',
        flag: '../../assets/flags/canada.png',
        sprite1: '../../assets/sprites/zoroark.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/latios.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Weakness Policy",
          "number": "126",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/01.png'
      }
    ]
    },
    {
        firstName: 'Jihun Choi',
        flag: '../../assets/flags/korea.png',
        sprite1: '../../assets/sprites/golisopod.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/energy/energy-grass.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      }
    ]
    },
    {
        firstName: 'Tanner Hurley',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/zoroark.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      }, 
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
    }
]

let juniors = [
    {
        firstName: 'Naohito Inoue',
        flag: '../../assets/flags/japan.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/lycanroc-midnight.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/buzzwole-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/lycanroc-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rockruff-surprise-attack.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/regirock.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/octillery.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/max-elixir.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/beast-ring.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/super-rod.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ffb.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-fighting.png',
            numImg: '../../assets/09.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Sebastian Enriquez',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/lycanroc-midnight.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/buzzwole-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/lycanroc-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rockruff-surprise-attack.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/octillery.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/tapu-lele-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/01.png'
          },          
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/max-elixir.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/beast-ring.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/super-rod.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-fighting.png',
            numImg: '../../assets/09.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Rune Heiremans',
        flag: '../../assets/flags/belgium.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/lycanroc-midnight.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/buzzwole-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/lycanroc-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rockruff-surprise-attack.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/octillery.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/tapu-lele-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/04.png'
          },     
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/max-elixir.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/beast-ring.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },     
          {
            cardImg: '../../assets/cards/2018-17/super-rod.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-fighting.png',
            numImg: '../../assets/09.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Walker Halliburton',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/zoroark.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/zoroark-gx.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/zorua.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/tapu-lele-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/latios.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/oranguru-resource-manag.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brigette.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/delinquent.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/mysterious-treasure.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/enhanced-hammer.png',
            numImg: '../../assets/02.png'
          }, 
          {
            cardImg: '../../assets/cards/2018-17/evosoda.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/counter-catcher.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/max-potion.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/parallel-city.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-psychic.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce.png',
            numImg: '../../assets/04.png'
          }
        ]
    },
    {
        firstName: 'Kota Onohara',
        flag: '../../assets/flags/japan.png',
        sprite1: '../../assets/sprites/naganadel.png',
        sprite2: '../../assets/sprites/stakataka.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/naganadel-gx-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/poipole-spit.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/stakataka-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-dusk-mane-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-dusk-mane.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ultra-space.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-metal.png',
        numImg: '../../assets/12.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-beast-p.png',
        numImg: '../../assets/01.png'
      }
    ]
    },
    {
        firstName: 'Benjamin Bussert',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/octillery.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/nest-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/special-charge.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/shrineofpunush.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-psychic.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-rainbow.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Joao Penteado',
        flag: '../../assets/flags/brazil.png',
        sprite1: '../../assets/sprites/buzzwole.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/buzzwole.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/oranguru.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/diancie-p.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/nest-ball.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/special-charge.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/shrineofpunush.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-psychic.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-rainbow.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-beast-p.png',
            numImg: '../../assets/01.png'
          }
        ]
    },
    {
        firstName: 'Sechan Oh',
        flag: '../../assets/flags/korea.png',
        sprite1: '../../assets/sprites/zoroark.png',
        sprite2: '../../assets/sprites/garbodor.png',
        list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
        deck: [
          {
            cardImg: '../../assets/cards/2018-17/zoroark-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/zorua.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-trashalanche.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/lycanroc-gx.png',
            numImg: '../../assets/02.png'
          },{
            cardImg: '../../assets/cards/2018-17/rockruff-surprise-attack.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/tapu-lele-gx.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/latios.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/mewtwo.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/n.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/guzma.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/brigette.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/cynthia.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/acerola.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/field-blower.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/enhanced-hammer.png',
            numImg: '../../assets/01.png'
          }, 
          {
            cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/float-stone.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/parallel-city.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/dce.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/energy/energy-rainbow.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/energy/strong-energy.png',
            numImg: '../../assets/02.png'
          }
        ]
    }
]

//masters
function displayList(array = []) {
    masterList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 Worlds";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

         

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }

    masterList.appendChild(item_element);
  }
}

// seniors
function displayList2(array = []) {
    seniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 Worlds";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

         

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }

    seniorList.appendChild(item_element);
  }
}

// juniors
function displayList3(array = []) {
    juniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 Worlds";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

         

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }

    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);