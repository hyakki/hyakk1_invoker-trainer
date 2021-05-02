const path = './../assets'
const pictures = import.meta.globEager('./../assets/*.png')

export const orbs = [
  {
    id: 0,
    key: 'q',
    name: 'Quas',
    picture: pictures[`${path}/quas.png`].default,
    category: 'quas',
  },
  {
    id: 1,
    key: 'w',
    name: 'Wex',
    picture: pictures[`${path}/wex.png`].default,
    category: 'wex',
  },
  {
    id: 2,
    key: 'e',
    name: 'Exort',
    picture: pictures[`${path}/exort.png`].default,
    category: 'exort',
  },
]

export const spells = [
  {
    id: 0,
    name: 'Cold Snap',
    combination: [0,0,0],
    picture: pictures[`${path}/cold-snap.png`].default,
    category: 'quas',
  },
  {
    id: 1,
    name: 'Ghost Walk',
    combination: [0,0,1],
    picture: pictures[`${path}/ghost-walk.png`].default,
    category: 'quas',
  },
  {
    id: 2,
    name: 'Ice Wall',
    combination: [0,0,2],
    picture: pictures[`${path}/ice-wall.png`].default,
    category: 'quas',
  },
  {
    id: 3,
    name: 'EMP',
    combination: [1,1,1],
    picture: pictures[`${path}/emp.png`].default,
    category: 'wex',
  },
  {
    id: 4,
    name: 'Tornado',
    combination: [0,1,1],
    picture: pictures[`${path}/tornado.png`].default,
    category: 'wex',
  },
  {
    id: 5,
    name: 'Alacrity',
    combination: [1,1,2],
    picture: pictures[`${path}/alacrity.png`].default,
    category: 'wex',
  },
  {
    id: 6,
    name: 'Sun Strike',
    combination: [2,2,2],
    picture: pictures[`${path}/sun-strike.png`].default,
    category: 'exort',
  },
  {
    id: 7,
    name: 'Forge Spirit',
    combination: [0,2,2],
    picture: pictures[`${path}/forge-spirit.png`].default,
    category: 'exort',
  },
  {
    id: 8,
    name: 'Chaos Meteor',
    combination: [1,2,2],
    picture: pictures[`${path}/chaos-meteor.png`].default,
    category: 'exort',
  },
  {
    id: 9,
    name: 'Deafening Blast',
    combination: [0,1,2],
    picture: pictures[`${path}/deafening-blast.png`].default,
    category: 'neutral',
  }
]

export const icons = {
  placeholder: pictures[`${path}/placeholder.png`].default,
  invoke: pictures[`${path}/invoke.png`].default,
}

export const combos = [
  [0, 4, 2, 3, 6, 8, 9],
  [0, 4, 3, 2, 8, 9],
  [0, 4, 3, 2],
  [0, 4, 3], // (Quas Wex only, Urn of Shadows/Witchblade when enemy lands)
  [0, 4, 5, 6], // bait Juggernaut into Bladefury while you can just right click him, follow up with [6] if he decides to insta TP
  [0, 4, 5], // bait Juggernaut into Bladefury while you can just right click him, follow up with [6] if he decides to insta TP
  [0, 4, 6], // great to kill low hp heroes that have an escaping ability during laning stage, like Puck, QOP or Morphling
  [0, 4, 8, 2],
  [0, 4, 8, 5],
  [0, 4, 8, 9],
  [0, 4, 8],
  [0, 8],
  [1, 0, 5], // great Clinkz style ganker if you build Orchid/Medallion
  [2, 7, 5], // The high ground defense combo
  [2, 9], // (For hard-zoning purposes)
  [4, 0, 3, 2], // Mana burn/"need more time" combo
  [4, 0, 8], // Early game "Sumiya" combo
  [4, 1],
  [4, 2, 0, 5],
  [4, 2, 1],
  [4, 2, 8], // (Against Templar Assassin specifically)
  [4, 2],
  [4, 3, 0],
  [4, 3, 6, 8, 9, 0, 2, 5, 7],
  [4, 3, 8, 9], // Normal 4 spell combo
  [4, 3, 8],
  [4, 6, 8, 9], // Pure Exort combo
  [4, 6, 9], // The quick kill/execution combo, for squishies
  [4, 8, 9],
  [5, 0],
  [7, 0, 6],
  [7, 5, 0], // (Lategame solo pickoffs for highground siege/defence. Alacrity to forged spirit (preferably solare crest too) with +2 FS armor corruption talent can kill a support without your help)
  [8, 0, 9],
  // [9, 8, 6, 8, 6, 9], // *hex* [9, 8, 6] *refresher* *hex* [8, 6, 9] can easily turn a game around cause pretty much no one can survive this, unless they have Linken's/Aeon or someone saving them
]
