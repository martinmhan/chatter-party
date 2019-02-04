const { itemsMap } = require('./itemsMap');

const map4 = [
  ['bo', 'bo', 'bo', 'bo', 'bo', 'e2', 'e2', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 't1', 't1', 't1', 't1', null, null, 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 't2', 'bo'],
  ['e3', null, null, null, null, null, 'ro', null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['e3', null, null, null, null, null, 'ro', null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, 'ro', null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, 'ro', 'ro', 'ro', 'ro', null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, 'ro', null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'bo'],
  ['bo', 't1', null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', 'ro', 'bo'],
  ['bo', 't1', 't1', 't1', null, null, null, null, null, null, null, null, null, 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 't1', 't1', 't1', 't1', 't1', 't1', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 't3', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
];

const map4Rows = map4.length;
const map4Cols = map4[0].length;

// convert map items from 2-letter strings to objects
for (let i = 0; i < map4.length; i += 1) {
  for (let j = 0; j < map4[i].length; j += 1) {
    if (map4[i][j] !== null) {
      map4[i][j] = { itemType: itemsMap[map4[i][j]] };
    }
  }
}

module.exports = { map4, map4Rows, map4Cols };
