const { itemsMap } = require('./itemsMap');

const map2 = [
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 't1', 't1', 't1', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['e1', null, null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['e1', null, null, null, null, null, null, 'ro', null, 'ro', null, null, 'st', 'st', null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, 'ro', null, null, 'st', 'st', null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, 'ro', 'ro', 'ro', null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', 't1', null, null, null, null, null, null, null, null, null, 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 't1', 't1', 't1', 't1', null, null, 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'e4', 'e4', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
];

const map2Rows = map2.length;
const map2Cols = map2[0].length;

// convert map items from 2-letter strings to objects
for (let i = 0; i < map2.length; i += 1) {
  for (let j = 0; j < map2[i].length; j += 1) {
    if (map2[i][j] !== null) {
      map2[i][j] = { itemType: itemsMap[map2[i][j]] };
    }
  }
}

module.exports = { map2, map2Rows, map2Cols };
