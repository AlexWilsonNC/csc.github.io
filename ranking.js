const list = document.querySelector('.list');

const sortName = document.querySelector('.sort-name')
const sortAttendance = document.querySelector('.sort-a-points')
const sortCsPoints = document.querySelector('.sort-cs-points')

let players = [
  {
    firstName: 'Dillon Bussert',
    attendancePoints: 4,
    bfl: 4,
    csPoints: 82,
    first: 1, // glc
    second: 0,
    top4: 2, // zam 1 17 ppl | sirf 1 14 ppl
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/zacian-crowned.png',
    img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Matthew Reimels',
    attendancePoints: 9,
    bfl: 5,
    csPoints: 92,
    first: 1, // arc bib 1
    second: 0,
    top4: 2, // jolt 1 | MEW 1
    top8: 1, // ss
    top16: 1,
    img1: '../assets/sprites/arceus.png',
    img2: '../assets/sprites/crobat-shiny.png'
  },
  {
    firstName: 'Alex Wilson',
    attendancePoints: 13,
    bfl: 8,
    csPoints: 92,
    first: 0,
    second: 0,
    top4: 1, // 2010 1
    top8: 5, // mew 1 | 2010 1 | rs ursh 2 | arc ursh 1 30+
    top16: 1,
    // top 256 regionals
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/urshifu-rapid-strike-gmax.png'
  },
  {
    firstName: 'Samuel Roach',
    attendancePoints: 8,
    bfl: 5,
    csPoints: 46,
    first: 0,
    second: 0,
    top4: 1,
    top8: 3, // expanded 1
    top16: 1,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Chris Diller',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/sableye.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'James Briglia',
    attendancePoints: 10,
    bfl: 9,
    csPoints: 236,
    first: 3, // etern 1
    second: 2, // etern 2
    top4: 1, // etern 1
    top8: 3, // etern 1
    top16: 0,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Terry Harris',
    attendancePoints: 6,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1, // 2010 1
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Caleb Rogerson',
    attendancePoints: 16,
    bfl: 10,
    csPoints: 376,
    first: 4, // mew 3 & 1 30+
    second: 3, // mew 1 | mew 1
    top4: 5, // mew 4
    top8: 3, // weez 30+ | mew 1 30+
    top16: 0,
    // top 4 regionals
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Ricky (Zane) Carter',
    attendancePoints: 23,
    bfl: 10,
    csPoints: 288,
    first: 4, // ice rider=40 | mew=40 | arceus dura=40 | build=40
    second: 3, // eternatus=30 | duraludon=30 | arc corv 1
    top4: 5, // eternatus=16 | jolteon=16 | arc ray 1 | arc bird 1
    top8: 4, // mew=10 | etern=10 | mew=16
    top16: 1,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'Anthony Nimmons',
    attendancePoints: 17,
    bfl: 10,
    csPoints: 194,
    first: 1, // moltres zap
    second: 2, // arc int 1 | tort 1
    top4: 3, // moltres zap1 | arc int 1 | arc bee 1
    top8: 4, // duraludon 1 | molt zap 1 | ston 30+ | arc 1
    top16: 0,
    img1: '../assets/sprites/moltres-galar.png',
    img2: '../assets/sprites/zapdos-galar.png'
  },
  {
    firstName: "Mitch O'Neill",
    attendancePoints: 22,
    bfl: 10,
    csPoints: 190,
    first: 1, // jolt 30+
    second: 1, // jolt 1
    top4: 5, // jolt 4 | expanded 1
    top8: 2,
    top16: 1,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Jason Joyce',
    attendancePoints: 14,
    bfl: 7,
    csPoints: 140,
    first: 1, // moltre
    second: 2, // moltre 1 | glc 1
    top4: 0,
    top8: 2,
    top16: 2,
    img1: '../assets/sprites/moltres-galar.png',
    img2: '../assets/sprites/zapdos-galar.png'
  },
  {
    firstName: 'Adam Reinhardt',
      attendancePoints: 5,
      bfl: 5,
      csPoints: 150,
      first: 1, // pult 1
      second: 2, // pult 1
      top4: 1, // jolt 1 30+
      top8: 0,
      top16: 1,
      // top 64 regionals
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/dragapult.png'
  },
  {
    firstName: 'Kelly Nimmons',
    attendancePoints: 17,
    bfl: 9,
    csPoints: 150,
    first: 1, // duraludon
    second: 0,
    top4: 4, // sylv rs ursh 1 | dural 1 | mew 1 | arc gyara 1
    top8: 4, // leaf 30+ | 2010 1
    top16: 0,
    img1: '../assets/sprites/duraludon-gmax.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Olivia Farmer',
    attendancePoints: 8,
    bfl: 7,
    csPoints: 82,
    first: 0,
    second: 0,
    top4: 1, // mew
    top8: 6, // jolt 2 | mew 1 | gengar 1 | gengar 1 30+
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Phillip Lineberry',
    attendancePoints: 3,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/octillery.png'
  },
  {
    firstName: 'Gaberiel Labra',
    attendancePoints: 2,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jennifer Perez',
    attendancePoints: 12,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chris Urcinola',
    attendancePoints: 14,
    bfl: 6,
    csPoints: 134,
    first: 1, // expanded 1
    second: 1, // mew 1
    top4: 3, // draco 1 | arc int 1 | 2010 1
    top8: 1, // mew 1 30+
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jessica (Raven) Carter',
    attendancePoints: 19,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/blank.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Landon Hawkins',
    attendancePoints: 8,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/blank.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jeremiah Lynch',
    attendancePoints: 8,
    bfl: 3,
    csPoints: 36,
    first: 0,
    second: 0,
    top4: 1, // glc lightning
    top8: 2, // bolt | expanded 1
    top16: 0,
    img1: '../assets/sprites/zekrom.png',
    img2: '../assets/sprites/raikou.png'
  },
  {
    firstName: 'Zak Kobos',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bennet Kobos',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ben Fletcher',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'James Hollis',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jonathan Arias',
    attendancePoints: 19,
    bfl: 10,
    csPoints: 252,
    first: 2, // mew 2
    second: 4, // mew 3 | arc ray 1
    top4: 2, // mew 1 | arc ray 1
    top8: 2, // mew 2
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tristan Bennett',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Tristan Lackey',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/sylveon.png'
  },
  {
    firstName: 'Carson Walker',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brandon Mesimer',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Corey Mesimer',
    attendancePoints: 2,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Carl Simpson',
    attendancePoints: 13,
    bfl: 10,
    csPoints: 192,
    first: 2, // arc ir caly 2 30+
    second: 0,
    top4: 2,
    top8: 6,
    top16: 2,
    img1: '../assets/sprites/calyrex-ice-rider.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Nathan Osterkatz',
    attendancePoints: 8,
    bfl: 8,
    csPoints: 286,
    first: 3, // mew 1 | arc int 2
    second: 0,
    top4: 2, // 30+ players mew 1 | arc int 1
    top8: 1, // mew
    top16: 1,
    // regionals 1st seniors
    img1: '../assets/sprites/arceus.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Tony Vuong',
    attendancePoints: 10,
    bfl: 5,
    csPoints: 86,
    first: 0,
    second: 1, // whim 1 30+
    top4: 1,
    top8: 2, // ursh 2
    top16: 1,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Cole Lewis',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Dick Collier',
    attendancePoints: 8,
    bfl: 6,
    csPoints: 136,
    first: 0,
    second: 2, // malamar 1 30+ | expanded 1
    top4: 2, // mew 1 | malamar 1 30+
    top8: 2, // mew 2
    top16: 0,
      img1: '../assets/sprites/malamar.png',
      img2: '../assets/sprites/cinccino.png'
  },
  {
    firstName: 'Kalie Kren',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ryan Sabelhaus',
    attendancePoints: 1,
    bfl: 2,
    csPoints: 70,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
    // top 32 regionals
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ollie Harrison',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Justin Chestnut',
    attendancePoints: 3,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1, // 30+ players
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Carter Petrocci',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nathon Trimberger',
    attendancePoints: 12,
    bfl: 5,
    csPoints: 116,
    first: 2, // mew 2
    second: 0,
    top4: 1, // mew
    top8: 2, // 2010 1
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jake Pilch',
    attendancePoints: 7,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Larry Huber',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jake Boone',
      attendancePoints: 3,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jake Larres',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kim Bullington',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Clint Quinn',
    attendancePoints: 8,
    bfl: 6,
    csPoints: 128,
    first: 1, // arc mol 1
    second: 1, // arc lyc 1
    top4: 2, // jolt 2
    top8: 2, // arc lyc 1 30+
    top16: 0,
    img1: '../assets/sprites/arceus.png',
    img2: '../assets/sprites/moltres-galar.png'
  },
  {
    firstName: 'Karla Wilson',
    attendancePoints: 5,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  // {
  //   firstName: 'Jorden Hamilton',
  //   attendancePoints: 6,
  //   csPoints: 116,
  //   first: 1, // mew
  //   second: 2, // mew 1 | arc int 1
  //   top4: 1, // mew
  //   top8: 0,
  //   top16: 0,
  //   img1: '../assets/sprites/mew.png',
  //   img2: '../assets/sprites/genesect.png'
  // },
  {
    firstName: 'Vernon Hoffman',
    attendancePoints: 4,
    bfl: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/zacian-crowned.png',
    img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Maxwell Hoffman',
    attendancePoints: 3,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Zac Cooper',
    attendancePoints: 2,
    bfl: 2,
    csPoints: 50,
    first: 0,
    second: 1, // jolt 30+
    top4: 0,
    top8: 1, // glc
    top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Grant Manley',
      attendancePoints: 10,
      bfl: 10,
      csPoints: 306,
      first: 2, // expanded necro 1 | mew 1
      second: 4, // ss umb 1 | malamar 1 | 2010 1 | arc molt 1 30+
      top4: 0,
      top8: 2, // 30+ players | ss umb
      top16: 1,
      // top 32 regionals
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Taylor Greenstreet',
    attendancePoints: 20,
    bfl: 10,
    csPoints: 222,
    first: 2, // suicune 1 | rs urshi 1
    second: 3, // mew 1 | suicun ludi 2
    top4: 3, // mew 1 | 2010 1 | mew 1 30+
    top8: 3, // mew 3
    top16: 1,
    img1: '../assets/sprites/suicune.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Kevin Fallin',
    attendancePoints: 20,
    bfl: 10,
    csPoints: 256,
    first: 4, // rs intel 1 | mew 3
    second: 2, // jolteon 1 | gengar 1
    top4: 1, // mew 1
    top8: 2,
    top16: 2,
    // top 128 regionals
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Josh Lynn',
    attendancePoints: 3,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joshua Frowley',
    attendancePoints: 7,
    bfl: 5,
    csPoints: 112,
    first: 1, // mew
    second: 1, // mew
    top4: 2, // mew 2
    top8: 1, // molt arc 1
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'James (Jay) Quick',
    attendancePoints: 12,
    bfl: 7,
    csPoints: 112,
    first: 1, // mew 1
    second: 0,
    top4: 1, // MEW 1
    top8: 4, // 30+ players mew | ir caly 
    top16: 1,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tim Weaver',
    attendancePoints: 7,
    bfl: 3,
    csPoints: 56,
    first: 1, // malamar
    second: 0,
    top4: 1, // malamar 1
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/cinccino.png'
  },
  {
    firstName: 'Chase Weaver',
    attendancePoints: 6,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Walker',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 40,
      first: 1,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Larry Schalles',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 40,
      first: 1,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/rayquaza.png'
  },
  {
    firstName: 'Cody Criner',
    attendancePoints: 3,
    bfl: 1,
    csPoints: 40,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Cody Smith',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Robbie Trittschuh',
    attendancePoints: 18,
    bfl: 10,
    csPoints: 228,
    first: 1, // mew
    second: 3, // mew 2 | 2010 1
    top4: 3, // mew 2 (30+) | glc 1
    top8: 3, // mew 1 | mew 1 30+
    top16: 1,
    // top 256 regionals
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jonathan Jiro',
    attendancePoints: 2,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Matthew Kuykendall',
    attendancePoints: 2,
    bfl: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1, // 2010 1
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Mason Daus',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1, // 2010 1
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Steffan Daus',
    attendancePoints: 2,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1, // 2010 1
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Evan Campbell',
    attendancePoints: 12,
    bfl: 8,
    csPoints: 196,
    first: 3, // mew 1 | gengar 1 | arc lyc 1
    second: 1, // mew
    top4: 0,
    top8: 3, // mew 1 | molt arc 1
    top16: 1,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Chip Richey',
      attendancePoints: 5,
      bfl: 5,
      csPoints: 104,
      first: 1, // mew 1
      second: 0,
      top4: 3, // mala | expanded caly | mew
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Gabriel Hernandez',
    attendancePoints: 8,
    bfl: 4,
    csPoints: 88,
    first: 1, // malamar
    second: 0,
    top4: 3, // ss urshi 2 | rs urshi 1
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/cinccino.png'
  },
  {
    firstName: 'Justin Nesmith',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
{
    firstName: 'Chase Timmerman',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Caleb Rice',
    attendancePoints: 3,
    bfl: 2,
    csPoints: 50,
    first: 1, // mew 1
    second: 0,
    top4: 0,
    top8: 1, // mew 1
    top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Perry Going',
    attendancePoints: 3,
    bfl: 3,
    csPoints: 90,
    first: 2, // 2010 2
    second: 0,
    top4: 0,
    top8: 1, // gengar 1
    top16: 0,
    img1: '../assets/sprites/gengar-gmax.png',
    img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Tyler Perry',
    attendancePoints: 14,
    bfl: 6,
    csPoints: 84,
    first: 0,
    second: 0,
    top4: 4, // ir caly 2 | mew 1 | arc mol 1
    top8: 2, // 2010 1
    top16: 0,
    img1: '../assets/sprites/calyrex-ice-rider.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Jerry Riley',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Daniel Henson',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephen Tysinger',
    attendancePoints: 2,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Marco Mandujano',
    attendancePoints: 6,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Steven Bauer',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Steven Hollingsworth',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 1, // arc dural 1
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/duraludon-gmax.png'
  },
  {
    firstName: 'Nathan Hall',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Morgan Dunn',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brandon Kassab',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/duraludon-gmax.png'
  },
  {
    firstName: 'Abby Kassab',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Samantha Mills',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/moltres-galar.png',
      img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'Frankie Puleio',
    attendancePoints: 2,
    bfl: 2,
    csPoints: 80,
    first: 2,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/blacephalon.png'
  },
  {
    firstName: 'Brady Bussert',
    attendancePoints: 3,
    bfl: 2,
    csPoints: 80,
    first: 0,
    second: 1, // glc
    top4: 0,
    top8: 0,
    top16: 0,
    // top 8 regionals
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kameron Cox',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Will Whitener',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1, // arc int
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Kris Hackelman',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brian Fox',
      attendancePoints: 4,
      bfl: 4,
      csPoints: 100,
      first: 0,
      second: 3, // victini 2
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/victini.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nicholas Vause',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Casey Yount',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Lucas Clark',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Matthew Clark',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Clark Tew',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jean-luc Pennington',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/duraludon-gmax.png'
  },
  {
    firstName: 'Keith Sundeen',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Keith Luehrs',
      attendancePoints: 3,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/moltres-galar.png'
  },
  {
    firstName: 'Roxie Bair',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bailey Kernoodle',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Adam Pennington',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Raul Garay',
      attendancePoints: 3,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brianna Krausmann',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Matthew Krausmann',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Aaron Bair',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ross Carpenter',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 30,
      first: 0,
      second: 1, // mew
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Micah Hayden',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: "Alexander D’Amico",
      attendancePoints: 3,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Nathan Wilkins',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Charlie Matteson',
      attendancePoints: 5,
      bfl: 2,
      csPoints: 20,
      first: 0,
      second: 0,
      top4: 0,
      top8: 2,
      top16: 0,
      img1: '../assets/sprites/charizard.png',
      img2: '../assets/sprites/arceus.png'
  },
  {
    firstName: 'Evan Lee',
      attendancePoints: 15,
      bfl: 10,
      csPoints: 298,
      first: 3, // mew 3
      second: 3, // 30+ players mew 1 | mew 1
      top4: 5, // mew 3 (1 30+)
      top8: 2, // mew 2
      top16: 1,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Bryan Lindley',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joseph Ennis',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Alfredo Sepulveda',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'George Wynn',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Miguel Sotelo',
      attendancePoints: 8,
      bfl: 2,
      csPoints: 20,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luis Gasca',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luis Sotelo',
      attendancePoints: 6,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Wisniewsky',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 40,
      first: 0,
      second: 0,
      top4: 1, // 30+ players
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/zacian-crowned.png',
      img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Ryan Moore',
      attendancePoints: 5,
      bfl: 2,
      csPoints: 46,
      first: 0,
      second: 0,
      top4: 2,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Ruby Best',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ethan Weaver',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ethan Haynes',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // 30+ players
      top16: 1,
      img1: '../assets/sprites/duraludon-gmax.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Fretty Jay',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // 30+ players
      top16: 0,
      img1: '../assets/sprites/sylveon.png',
      img2: '../assets/sprites/urshifu-rapid-strike-gmax.png'
  },
  {
    firstName: 'Chris Sylvain',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Michael Delgado',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chris Connor',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Cordelia Ramont',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bradley Kampa',
      attendancePoints: 3,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kian Watkins',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bradley Erickson',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Shane Caughell',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'IsaBella Sztyber',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Simon Snell',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'John Orgel',
      attendancePoints: 5,
      bfl: 4,
      csPoints: 106,
      first: 0,
      second: 2, // glc | arc mol 1
      top4: 2, // mew 30+ | urshi 1
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/moltres-galar.png'
  },
  {
    firstName: 'Kermit Jones',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jason Pike',
      attendancePoints: 2,
      bfl: 2,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // ggar 1 30+
      top16: 1,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Vaughan Mitchell',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joseph Vargas',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Benjamin Pelton',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nate Warren',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jackson Connor',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jacob Muser',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jose Hidalgo',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Emilio Hidalgo',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'John Baires',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Elijah Crane',
      attendancePoints: 12,
      bfl: 3,
      csPoints: 40,
      first: 0,
      second: 0,
      top4: 0,
      top8: 2,
      top16: 2,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Thomas Roche',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Blaine Hill',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kevin Arreola',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 20,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kevin Rogerson',
      attendancePoints: 10,
      bfl: 3,
      csPoints: 36,
      first: 0,
      second: 0,
      top4: 1, // jolt 1
      top8: 2, // jolt 1
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Dillon Shumpert',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/sylveon.png',
      img2: '../assets/sprites/urshifu-rapid-strike-gmax.png'
  },
  {
    firstName: 'Thomas Pierson',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
      img2: '../assets/sprites/falinks.png'
  },
  {
    firstName: 'Emma Pierson',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Patton Courie',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/weezing-galar.png',
      img2: '../assets/sprites/guzzlord.png'
  },
  {
    firstName: 'Paulo Castelo',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brienna Krausmann',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Nance',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Oliver Harrison',
      attendancePoints: 3,
      bfl: 1,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Ness Foster',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/leafeon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Megan Wadsworth',
      attendancePoints: 4,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyle Krayah',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brianna Austin',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brian Meredith',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Addison Gercon',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tony Austin',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephen Kennedy ',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Austin Murray',
      attendancePoints: 5,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jessica Austin',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Adam Crowe',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Grayson Flax',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Graham Perry',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Allison Flowers',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Will Whitey',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Mitchell Nouse',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Christopher Black',
      attendancePoints: 17,
      bfl: 9,
      csPoints: 174,
      first: 1, // mew 1
      second: 2, // arc ray 2
      top4: 3, // sr caly 1 | ? 1 | expanded 1
      top8: 2, // ray 1
      top16: 1,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/rayquaza.png'
  },
  {
    firstName: 'Aiden Brittain',
      attendancePoints: 6,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Braxton Collier',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Russell Hylton',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Erik Nance',
    attendancePoints: 7,
    bfl: 5,
    csPoints: 62,
    first: 0,
    second: 0,
    top4: 1, // arc ray 1
    top8: 4, // 2010 1 | durant 1 30+ | expanded 1
    top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/rayquaza.png'
  },
  {
    firstName: 'Naomi Nance',
    attendancePoints: 6,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tryston Black',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephanie Hurst',
      attendancePoints: 15,
      bfl: 4,
      csPoints: 70,
      first: 1, // caly sr 1
      second: 0,
      top4: 0,
      top8: 3, // caly sr 1 | ?
      top16: 0,
      img1: '../assets/sprites/calyrex-shadow-rider.png',
      img2: '../assets/sprites/articuno-galar.png'
  },
  {
    firstName: 'Wesley Gantt',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Caleb Shelton',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // sr caly
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Danny Schmidinger',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Benjamin Bussert',
      attendancePoints: 3,
      bfl: 2,
      csPoints: 32,
      first: 0,
      second: 0,
      top4: 2, // glc 1 | mew 1
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Vincent Lee',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Vincent Pruitt',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gerald Pruitt',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Maddilyn Hargan',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Harrison Burch',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ryan Harrison',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ravynia',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Diego Valdivia',
      attendancePoints: 4,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Wesley Johnson',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jared Thomas',
      attendancePoints: 2,
      bfl: 2,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 1,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jared Morales',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/weezing-galar.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephen Hunter',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Matt Pereira',
      attendancePoints: 13,
      bfl: 5,
      csPoints: 74,
      first: 0,
      second: 0,
      top4: 4, // jolt 3 | mew 1
      top8: 1, // 2010 1
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Trevor Wall',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bobby Dinh',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brandyn Osborne',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Max Lentz',
      attendancePoints: 3,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Max Hoffman',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jonathan Benitez',
      attendancePoints: 3,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jonathan Cook',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kyle Cook',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brayden Earnhart',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kelsey Earnhart',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nolan Price',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Evan Hearne',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'William Stephenson',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Liam Nervo-Jabaut',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jacob Smith',
    attendancePoints: 2,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Emily Smith',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Yubanny Lopez',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Victor Lopez',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Adrian Suggs',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Frank Hamilton',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luna Dunham',
      attendancePoints: 10,
      bfl: 4,
      csPoints: 90,
      first: 0,
      second: 2, // suic 1 | arc int 1
      top4: 0,
      top8: 1,
      top16: 2,
      img1: '../assets/sprites/suicune.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Chesney Anderson',
      attendancePoints: 6,
      bfl: 4,
      csPoints: 58,
      first: 0,
      second: 0,
      top4: 1, // arc molt 1
      top8: 3, // arc molt 1 30+
      top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/moltres-galar.png'
  },
  {
    firstName: 'Richard Collier',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jacob Maxwell',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1, // suic 1
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/suicune.png',
      img2: '../assets/sprites/ludicolo.png'
  },
  {
    firstName: 'Andre Maldorado',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Wallace Johnson',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Van Weick',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Colby Barrett',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Wyatt Sonnenberg',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Guy Bennett',
      attendancePoints: 4,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Vaughn Stetser',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Roswood Forsyth',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Daniel Knight',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jacob Mishler',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Micah Todd',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Dino Ioannou',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ty Wilson',
      attendancePoints: 6,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },

  {
    firstName: 'Eva Edwards',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Milton Powell',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Louis Powell',
      attendancePoints: 2,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gibby Tang',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // duraludon 30+
      top16: 0,
      img1: '../assets/sprites/duraludon-gmax.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Loren Chester',
      attendancePoints: 9,
      bfl: 4,
      csPoints: 80,
      first: 0,
      second: 2, // arc dural 1
      top4: 0,
      top8: 0,
      top16: 2,
      img1: '../assets/sprites/duraludon-gmax.png',
      img2: '../assets/sprites/arceus.png'
  },
  {
    firstName: 'Alex Robbins',
    attendancePoints: 10,
    bfl: 4,
    csPoints: 80,
    first: 0,
    second: 1, // expanded dark
    top4: 1, // mew 30+
    top8: 2, // mew 2
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Raymundo Prado',
      attendancePoints: 3,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Alberto Torres',
      attendancePoints: 3,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Derrick Lee',
      attendancePoints: 1,
      bfl: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kyle Rosko',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joseph Bjerg',
    attendancePoints: 7,
    bfl: 1,
    csPoints: 30,
    first: 0,
    second: 1,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/moltres-galar.png'
  },
  {
    firstName: 'Dominic Cenceli',
      attendancePoints: 2,
      bfl: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/suicune.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Alex Baer',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyler Rathbone',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyler Birk',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chris Lu',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jaxen Wolf',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luke Pike',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Austin Roop',
      attendancePoints: 4,
      bfl: 2,
      csPoints: 20,
      first: 0,
      second: 0,
      top4: 0,
      top8: 2,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Zachary Roos',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joey Bullington',
      attendancePoints: 1,
      bfl: 0,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gabriel Semendo',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gabriel Labra',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'James Ransom',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Christopher Hoster',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Blasmichael Delgado',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Henry Younkin',
    attendancePoints: 2,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Alexander Camilleri',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Leo Filley',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Andrew DaSilva',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Aralynn Fann',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Hunter Fann',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Noelle Bussert',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chaz Gagne',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Guy Vaughn',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'John Zisek',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Heather Goff',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Travis Sexton',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Alex Raymond',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1, // sylv
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/arceus.png',
      img2: '../assets/sprites/sylveon.png'
  },
  {
    firstName: 'Abby Raymond',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyler Unruh',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1, // expanded 1
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Mike Reynolds',
    attendancePoints: 2,
    bfl: 1,
    csPoints: 40,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/whimsicott.png'
  }
]

let desc = false;
sortName.addEventListener('click', () => {
  let array = sort_array_by_name(players, 'firstName', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(151, 14, 14)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.remove('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');
});
function sort_array_by_name(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

sortAttendance.addEventListener('click', () => {
  let array = sort_array_by(players, 'attendancePoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(151, 14, 14)';
  document.querySelector('.list').classList.add('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');
});
function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

sortCsPoints.addEventListener('click', () => {
  let array = sort_array_by_cs(players, 'csPoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(151, 14, 14)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.add('color-rank');
  document.querySelector('.list').classList.add('bold-rank');
});
function sort_array_by_cs(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

function displayList(array = []) {
  list.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('list-item');

    let title = document.createElement('li');
    title.classList.add('item-title');
    title.classList.add('player-name');
    title.innerHTML = item.firstName + " " + "(" + item.attendancePoints + ")";

    item_element.appendChild(title);

    if (item.csPoints >= 1) {
      item_element.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.modal-name').innerHTML = item.firstName;
        document.querySelector('.modal-bfl').innerHTML = `${item.bfl}/10`;
        document.querySelector('.modal-cs').innerHTML = item.csPoints;
        document.querySelector('.modal-ap').innerHTML = item.attendancePoints;
        document.querySelector('.place1').innerHTML = item.first;
        document.querySelector('.place2').innerHTML = item.second;
        document.querySelector('.place3').innerHTML = item.top4;
        document.querySelector('.place4').innerHTML = item.top8;
        document.querySelector('.place5').innerHTML = item.top16;
        document.querySelector('.modal-img1').src = item.img1;
        document.querySelector('.modal-img2').src = item.img2;
      })
    }

    // let meta = document.createElement('div');
    // meta.classList.add('item-meta');
    // meta.innerHTML = item.attendancePoints;

    // item_element.appendChild(meta);

    let cs = document.createElement('div');
    cs.classList.add('item-point');
    cs.innerHTML = item.csPoints;

    item_element.appendChild(cs);

    list.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

modalX.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})
behind.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})

// document.addEventListener('click', function (event) {
//   if (target.matches(modalX) || !target.closest(modal)) {closeModal()}
// }, false)

displayList(players);

window.onload = function () {
  document.querySelector('.sort-cs-points').click();
};
