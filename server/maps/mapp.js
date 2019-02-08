const { itemsMap } = require('./itemsMap');

const mapp = [
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, 'c1', 'c1', null, null, null, 'co', null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', null, null, null, null, null, null, 'ps', null, 'ps', null, null, null, null, null, null, 'bo', 'bo'],
  ['bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'e1', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo', 'bo'],
];

const mappRows = mapp.length;
const mappCols = mapp[0].length;

// convert map items from 2-letter strings to objects
for (let i = 0; i < mapp.length; i += 1) {
  for (let j = 0; j < mapp[i].length; j += 1) {
    if (mapp[i][j] !== null) {
      mapp[i][j] = { itemType: itemsMap[mapp[i][j]] };
    }
  }
}

module.exports = { mapp, mappRows, mappCols };
