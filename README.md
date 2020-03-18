# nest-deep

## Usage
```js
import { nested, flatten } from 'nest-deep';

nested({
  'a.b': 1,
  'c.d[0][0]': 1,
  'c.d[1]': 5,
  'c.d[2]': 12,
});

flatten({
  a: {
    b: 1,
  },
  c: {
    d: [[1], 5, 12],
  },
});
```

## Output

##### nested
```json
{
  "a": {
    "b": 1
  },
  "c": {
    "d": [[1], 5, 12]
  }
}
```

##### flatten
```json
{
  "a.b": 1,
  "c.d[0][0]": 1,
  "c.d[1]": 5,
  "c.d[2]": 12
}
```
