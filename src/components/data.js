const path = './../assets'
const pictures = import.meta.globEager('./../assets/*.png')

export const orbs = [
  {
    id: 0,
    key: 'q',
    name: 'Quas',
    picture: pictures[`${path}/quas.png`].default,
  },
  {
    id: 1,
    key: 'w',
    name: 'Wex',
    picture: pictures[`${path}/wex.png`].default,
  },
  {
    id: 2,
    key: 'e',
    name: 'Exort',
    picture: pictures[`${path}/exort.png`].default,
  },
]

export const spells = [
  {
    id: 0,
    name: 'Cold Snap',
    combination: [0,0,0],
    picture: pictures[`${path}/cold-snap.png`].default,
  },
  {
    id: 1,
    name: 'Ghost Walk',
    combination: [0,0,1],
    picture: pictures[`${path}/ghost-walk.png`].default,
  },
  {
    id: 2,
    name: 'Ice Wall',
    combination: [0,0,2],
    picture: pictures[`${path}/ice-wall.png`].default,
  },
  {
    id: 3,
    name: 'EMP',
    combination: [1,1,1],
    picture: pictures[`${path}/emp.png`].default,
  },
  {
    id: 4,
    name: 'Tornado',
    combination: [0,1,1],
    picture: pictures[`${path}/tornado.png`].default,
  },
  {
    id: 5,
    name: 'Alacrity',
    combination: [1,1,2],
    picture: pictures[`${path}/alacrity.png`].default,
  },
  {
    id: 6,
    name: 'Sun Strike',
    combination: [2,2,2],
    picture: pictures[`${path}/sun-strike.png`].default,
  },
  {
    id: 7,
    name: 'Forge Spirit',
    combination: [0,2,2],
    picture: pictures[`${path}/forge-spirit.png`].default,
  },
  {
    id: 8,
    name: 'Chaos Meteor',
    combination: [1,2,2],
    picture: pictures[`${path}/chaos-meteor.png`].default,
  },
  {
    id: 9,
    name: 'Deafening Blast',
    combination: [0,1,2],
    picture: pictures[`${path}/deafening-blast.png`].default,
  }
]

export const icons = {
  placeholder: pictures[`${path}/placeholder.png`].default,
  invoke: pictures[`${path}/invoke.png`].default,
}