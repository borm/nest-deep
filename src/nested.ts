type ValueType = any;

type SerializerObjectType = {
  [key: string]: ValueType;
};

type ResultArrayType =
  | (ResultObjectType | ValueType)[]
  | (ResultObjectType | ValueType)[][];

interface ResultObjectType {
  [key: string]: ValueType | ResultObjectType | ResultArrayType;
}

/**
 * Returns true, if given key is included in the blacklisted
 * keys.
 * @param {String} key key for check, string.
 * @returns {Boolean}.
 */
function isPrototypePolluted(key: string): Boolean {
  return ['__proto__', 'prototype', 'constructor'].includes(key);
}

export default function nested(object: SerializerObjectType = null): ResultObjectType {
  if (Object(object) !== object || Array.isArray(object)) {
    return object;
  }
  const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
  const result: ResultObjectType = {};
  const keys = Object.keys(object).sort();
  for (const key of keys) {
    let cur = result;
    let prop = '';
    let m;
    // tslint:disable-next-line:no-conditional-assignment
    while (m = regex.exec(key)) {
      if (isPrototypePolluted(prop)) continue;
      cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
      prop = m[2] || m[1];
    }

    cur[prop] = object[key];
  }
  return result[''] || result;
}
