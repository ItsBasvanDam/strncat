# strncat

[![NPM Version](https://img.shields.io/npm/v/strncat)](https://www.npmjs.com/package/strncat)
[![Action Status](https://github.com/itsbasvandam/strncat/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ItsBasvanDam/strncat/actions/workflows/npm-publish.yml)
![License](https://img.shields.io/npm/l/strncat)

A port of the `strncat` [C or C++ function](https://en.cppreference.com/w/cpp/string/byte/strncat).

`strncat` appends a specified amount of characters from the start of one string to the end of another.

## Install
```
npm install --save strncat
```

## Usage
Usage is very similar to that of the original function.

### Javascript
```javascript
const { strncat } = require("strncat");

let result = strncat("foo", "barman", 3);
// result = "foobar"
```

### Typescript
```typescript
import { strncat } from "strncat";

let result = strncat("foo", "barman", 3);
// result = "foobar"
```
