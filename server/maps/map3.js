const { itemsMap } = require('./itemsMap');

const map3 = [
  ['bo', 'bo', 'bo', 'e1', 'e1', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 't1', 't1', null, null, 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'e4'],
  ['bo', 't1', null, null, null, null, 'ro', 'ro', 'ro', null, null, null, null, null, null, null, null, null, 'e4'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, 'ro', null, null, null, 'h1', 'fi', null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, 'ro', 'ro', 'ro', null, null, 'fi', 'fi', null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, 'ro', 'ro', null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', 't1', 't1', null, null, null, null, null, null, null, null, null, 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 't1', 't1', 't1', 't1', 't1', 't1', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
];

const map3Rows = map3.length;
const map3Cols = map3[0].length;

// convert map items from 2-letter strings to objects
for (let i = 0; i < map3.length; i += 1) {
  for (let j = 0; j < map3[i].length; j += 1) {
    if (map3[i][j] !== null) {
      map3[i][j] = { itemType: itemsMap[map3[i][j]] };
    }
  }
}

module.exports = { map3, map3Rows, map3Cols };
