const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Lucas Calzà',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/eldegoss.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/greedent-v-crunch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucky-eg.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Agustín Campo',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Eder Jarillo Soto',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      }, 
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Ryan Antonucci',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heros-medal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yerco Valencia',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Corey Godfrey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-zacian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/coating-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Julius Brunfeldt',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Leonardo Braga',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gaston Poggi',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/kyurem-vmax.png',
    sprite2: '../../../assets/sprites/palkia-origin.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Sebastián Lozano',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
     // list: '../../../assets/list-icon.png',
     list: '../../../assets/sprites/blank.png',
     type: 'eee',
     deck: [
       {
         cardImg: '../../assets/cards/2022-2023',
         "count": 4,
       },
     ]
  },
  {
    firstName: 'Jose Monroy',
    flag: '../../../assets/flags/peru.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Juan Andree Mejía',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Gabriel Smart',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'William Azevedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabrizio Silva',
    flag: '../../../assets/flags/peru.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Mathieu Vidal',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Kai Wainwright',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Mateus Rocha',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Tácio Grossi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Vinicius Gomes',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Vinicius Souza',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Carlos Barros',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mateus Reis',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tyler Mathews',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-rayquaza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Nicholas Moffitt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Benjamin Ferrel',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Takano',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blissey.png',
    sprite2: '../../../assets/sprites/yveltal.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ramon Duarte',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Paulo de Freitas',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Ignacio Rzeszut',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Rafael Yuiti',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrés Viglioglia',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Caleb Gedemer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Cyrus Davis',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Gabriel Reiter',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Felipe Beraldo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Caleb Rogerson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/diancie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Matheus Tavares',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    type: 'eee',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eduardo Paixao',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      }, 
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      }, 
    ]
  },
  {
    firstName: 'Gabriel Pinheiro',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Lucas Gondim',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Yuichi Matsuo',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Vinícius Fernandez',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/eldegoss.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/greedent-v-crunch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucky-eg.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Bodhi Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Magda',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Adam Polak',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Polaris Altares',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Lucas Jordão',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      
    ]
  },
  {
    firstName: 'Neo Erlandsson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        "count": 2,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
      
    ]
  },
]

let juniors = [
  {
    firstName: 'Luigi Bolinja',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Robert Matise',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Keon Chiang',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Gabriel Torres',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Peter Shapkin',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kingsley Cheng',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Gregory Vexenat',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Remi Lorenz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 LAIC";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
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
