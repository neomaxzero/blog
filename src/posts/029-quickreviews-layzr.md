---
title: 'layzr'
subtitle: 'library'
date: '2019-04-12'
topic: 'quickreviews'
description: 'quickreviews: a modern lazy load library for your images. Fancy from the start'
---

# quickreviews: [layzr](https://github.com/callmecavs/layzr.js)

> version: 2.2.2

## What are you?

Another lazy load library for images. This time modern fancy and too 2018. :D It supports IE10+ and even older browsers with polyfills. This library also provides smart loading for different viewports and scrolling.

## How does it work?

The use of this library is very similar to the last one I reviewed yesterday in wich you have to replace img tags for data attributes which are configurable and then the library will replace those with the appropiate img src.

The main difference here is that the library does not force you to add an extra class name to the img tag.

e.g.

```javascript
// normal tag
<img src="normal.jpg">

// for this
<img data-normal="normal.jpg">
```

## Now quickreview!

The library is indeed more concise than lazysizes with similar features. The documentation is really well done with a nice page for sharing the library and checking its behaviour at a first glance.

Having all the tags configurables is a better alternative than forcing you to us certain class.

You can also hook to events on the library and react to it which is nice.

Compare to lazysizes the library seems unmaintained since 2017 with only one issue and almost 6k stars. Either this library is extremely stable or nobody uses it.

I've checked the numbers on npm and it has 2k weekly download compare to 70k of lazysizes.

This numbers shouldn't be worrying you because it seems the library is doing its job correctly.

Documentation is amazingly better than lazysizes.

## Diving a little bit deeper

First reviewing its manifest file we again have only 1 dependency which is a library from the same author.

The library is tiny with only 1kb gzip! Nice if you don't need extra fancy features.

The one file library with 120 loc is definitely easier to read than lazysizes and because is really tiny is feasible to port it to your code in case you want to strip things out and use it as a baseline.

Function division and naming is more align on how I'd do it that only means I could understood this way better.

Unfortunately tests are lacking in this library.

## Conclusion

A good ES6 alternative for lazy loading. The lacking of tests in such a popular library are a eyesbrows raiser. This is one of the library I wouldn't use directly but probably some part could be nice as an inspiration to my own implementation.

## Scores (higher is better)

- Usefulness: 9/10.
- Code quality: 7/10.
- Documentation: 8/10.
- Browser support: 9/10.
- Potential: 6/10.

_Overall: 7.8/10_
