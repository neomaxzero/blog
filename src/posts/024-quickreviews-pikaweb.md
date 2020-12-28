---
title: 'Quickreviews: Pikapkg web'
subtitle: 'library'
date: '2019-04-06'
topic: 'quickreviews'
description: 'quickreviews: pikapkg web bundler? '
tags: ['quickreviews']
---

> [pikapkg web](https://github.com/pikapkg/web) - version: 0.4.1

At the beginning I thought this was a _module bundler_, it claims is not. I'd say pika is a module mapper(?).

## What are you then?

The idea behind pika is to go back to the, "no tooling" era where you only import scripts that you need.

## How does it work?

Instead of importing the scripts from the html. It relies on the [module](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import) feature of the browser. To use pika you'll need to change a little bit your package.json and declare the same dependencies in a new key call `@pika/web`.

e.g.

```javascript
// package.json
  {
  "scripts": {
    "prepare": "pika-web",
    "start": "serve ./"
  },
  "@pika/web": {
    "webDependencies": [
      "epoch-timeago",
      "slugy",
      "@emotion/hash"
    ]
  },
  "dependencies": {
    "@emotion/hash": "^0.6.6",
    "epoch-timeago": "^1.1.9",
    "slugy": "^1.0.2"
  },
  "devDependencies": {
    "@pika/web": "^0.3.2",
    "serve": "^10.1.2"
  }
}
```

Then change the reference of your imports for the folder where pika is going to download the modules locally.

```javascript
//script.js

import { slugy } from './web_modules/slugy.js'
import timeago from './web_modules/epoch-timeago.js'
import hash from './web_modules/@emotion--hash.js'

const timeToRelative = '2013-01-01'
document.getElementById(
  'timeago-text'
).innerHTML = `timeago("${timeToRelative}") <br/>➡️ ${timeago(
  new Date(timeToRelative)
)}`

const textToSlug = 'Hello World, @pika/web!'
document.getElementById(
  'slugy-text'
).innerHTML = `slugy("${textToSlug}") <br/>➡️ ${slugy(textToSlug)}`

const textToHash = 'Hash Me!'
document.getElementById(
  'hash-text'
).innerHTML = `hash("${textToHash}") <br/>➡️ ${hash(textToSlug)}`
```

## Now quickreview!

I'd say the concept is interesting, but I don't see much difference on importing directly from `unpkg`. Pika at this stage is clearly in an experimental phase and it can be improved.

For example how the dependencies are declared twice in the package.json. In big companies browser compatibility is quite some issue that put this libraries off the radar as soon as you check that. (no IE support)

Of course, every library solves a different problem and personally I don't feel the pain point this library is aiming at.

I know webpack/parcel could be very tedious to work with but today there is already option for 0 configurability on both module bundlers and if you are really into http2 splitting is always that can be done with fine grain tune if needed.

## A little bit deeper, not much

- `Documentation` is well done, nice explanation and examples are clear and sufficient.

- `Code peak` I did it. I can certainly say this drags a module bundler into your project anyways because it uses `[rollup](https://rollupjs.org/` behind the scenes. The code in this version is a single 120 loc file where most of the code is for prettifying the console output, the scripts is not that simple to follow because it relies on how rollup parse the AST of dependencies.

- `Test` as this stage it lacks of tests. This is really a draw back to me, because I wouldn't like my webapp to not build after a minor update.

## Conclusion

Nice attempt to get rid of module bundlers, not a library I'd use as it is today.

# Scores (higher is better)

- Usefulness: 5/10.
- Code quality: 4/10.
- Documentation: 8/10.
- Browser support: 5/10.
- Potential: 6/10.

_Overall: 5.6/10_
