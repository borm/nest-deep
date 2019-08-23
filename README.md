# nest-deep 

## Usage

```js
import { serialize, deserialize } from 'nest-deep';

const render = (object, id) =>
  (document.getElementById(id).innerHTML = JSON.stringify(
    object,
    undefined,
    2
  ));

render(
  serialize({
    'a.b': 1,
    'c.d[0][0]': 1,
    'c.d[1]': 5,
    'c.d[2]': 12,
  }),
  'serialize'
);

render(
  deserialize({
    a: {
      b: 1,
    },
    c: {
      d: [[1], 5, 12],
    },
  }),
  'deserialize'
);
```
