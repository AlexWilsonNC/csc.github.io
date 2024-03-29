const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
    firstName: 'Owyn Kamerman',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../../assets/flags/isreal.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
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
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
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
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Grant Shen',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Aiden Harrison',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
        {
          cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
          "count": 1,
        },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'David Daritan',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
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
        "count": 4,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Carlos Barros',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
    firstName: 'Taketo Seki',
    flag: '../../../assets/flags/japan.png',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Connor Finton',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skyla.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Cameron Shenoy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../assets/flags/hong-kong.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
    firstName: 'Jamie Frankland',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-rayquaza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
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
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 3,
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
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 3,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Mads Jensen',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skyla.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Haru Nishikawa',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
        "count": 3,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Yuki Kawahito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mia Fountain',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
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
    firstName: 'Soma Arai',
    flag: '../../../assets/flags/japan.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
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
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Shuto Itagaki',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Giovanni Peragallo',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Taisei Kodama',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
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
    firstName: 'Christian Tuomi',
    flag: '../../../assets/flags/finland.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
    firstName: 'Paul Coletta',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Robbie Caldwell',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jack Underwood',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
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
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Kye Edmondston',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Akira Sato',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Andrew Gantner',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Elliot Gantner',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jay Tyrrell',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joel Suryadi',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
        {
          cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
          "count": 1,
        },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kai Chung',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
    firstName: 'Heddi Brahmi',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Courtney Fox',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Facundo Facio',
    flag: '../../../assets/flags/argentina.png',
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
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
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
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Peter Ghionis',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/jirachi-shiny.png',
    sprite2: '../../../assets/sprites/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-jirachi.png',
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
        cardImg: '../../assets/cards/2022-2023/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
        "count": 3,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
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
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zekrom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
          cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../assets/flags/denmark.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aidan Khus',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Callum Pinnegar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-rayquaza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
          cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
          "count": 1,
        },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ehren Roebuck',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/articuno.png',
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
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frosmoth.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snom.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
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
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Anselm Sim',
    flag: '../../../assets/flags/singapore.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kazutaka Tajima',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        "count": 1,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kim Beom Jin',
    flag: '../../../assets/flags/korea.png',
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
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Marcelo Turra',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
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
    firstName: 'Joshua Wilson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yell-horn.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Hoong Ngiam',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Polaris Altares',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuichi Matsuo',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Neo Erlandsson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bodhi Robinson',
    flag: '../../../assets/flags/usa.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Chawinnut Neamkasipong',
    flag: '../../../assets/flags/thailand.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Marley Skyum',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
    firstName: 'Benny Billinger',
    flag: '../../../assets/flags/canada.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ryan Anderson',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Penteado',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Roberto Costanzo',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Noah Brown',
    flag: '../../../assets/flags/uk.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Rune Heiremans',
    flag: '../../../assets/flags/belgium.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
    firstName: 'Rory Sharpe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-rayquaza.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-raikou.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
          cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
          "count": 2,
        },
        {
          cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
          "count": 1,
        },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
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
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Samuel Cohen',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin Templer',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/wash-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Tyson Ashkenazy',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
]

let juniors = [
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/judge.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drake Zhu',
    flag: '../../../assets/flags/new-zealand.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Luke Bennett',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zekrom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
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
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
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
    firstName: 'Ricky Yang',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jan Jakubowski',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/amazing-yveltal.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
      {
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Manik Satharasinghe',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stoutland-v-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skyla.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
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
        cardImg: '../../assets/cards/new-energy/heat-energy.png',
        "count": 1,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 OCIC";

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
