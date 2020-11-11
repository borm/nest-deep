import nested from '../src/nested';
import flatten from '../src/flatten';

const render = (object, id) =>
  (document.getElementById(id).innerHTML = JSON.stringify(
    object,
    undefined,
    2
  ));

render(
  nested({
    'a': 1,
    'b[0]': 'red',
    'b': [],
    'c.d[0][0]': 1,
    'c.d[0]': [2, 3],
    'c.d[1]': 5,
    'c.d[2]': 12,
  }),
  'nested'
);

render(
  flatten({
    a: {
      b: 1,
    },
    c: {
      d: [[1], 5, 12],
    },
  }),
  'flatten'
);
