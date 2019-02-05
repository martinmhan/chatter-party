const { itemsMap } = require('./itemsMap');

const map1 = [
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 't1', 't1', 't1', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 'bo'],
  ['bo', 't1', null, null, 't2', 't2', 't2', 't2', null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, 't2', 't2', 't2', null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, 't2', 't2', null, null, null, null, null, null, null, null, null, null, null, null, 'bo'],
  ['bo', 't1', null, null, 't2', 't2', null, null, null, null, null, null, null, null, null, null, null, null, 'bo'],
  ['bo', 't1', null, null, 't2', 't2', null, null, 'pc', 'fi', 'fi', null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, 't2', 't2', null, null, 'fi', 'pe', 'fi', null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, 't2', 't2', null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', 't1', null, null, null, null, null, null, null, null, null, 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 't1', 't1', 't1', 't1', null, null, 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'e2', 'e2', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
];

const map1Rows = map1.length;
const map1Cols = map1[0].length;

// convert map items from 2-letter strings to objects
for (let i = 0; i < map1.length; i += 1) {
  for (let j = 0; j < map1[i].length; j += 1) {
    if (map1[i][j] !== null) {
      map1[i][j] = { itemType: itemsMap[map1[i][j]] };
    }
  }
}

module.exports = { map1, map1Rows, map1Cols };
