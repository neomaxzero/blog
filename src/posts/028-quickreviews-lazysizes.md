---
title: 'Quickreviews: Lazysizes'
subtitle: 'library'
date: '2019-04-10'
topic: 'quickreviews'
description: 'quickreviews: a must have lazy load library for your images Its so advanced is confusing'
---

> [lazysizes](https://github.com/aFarkas/lazysizes) - version: 4.1.7

## What are you then?

A must have lazy load library for your images. It's so advanced is confusing. lazysizes provides with pretty much all the different variations on which you can trigger a lazy load of your images in your application.

From the basic lazyload on scrolling to the low resolution image version.

## How does it work?

To start using the library you need to replace the `src` attribute on the imgs/iframe tags and append the class "lazyload". The library will take care of the rest for you.

the src of the image needs to be appended on a different tag called `data-src` which later will be placed on the regular `src` tag so the browser can request the resource.

```javascript
// this is assuming you already imported the library
<!-- non-responsive: -->
<img data-src="image.jpg" class="lazyload" />
```

The library is super extensive and let you defined automatic sizes depending on your viewport which is really handy to optimize network traffic.

There is also a demo available, that for this library I think is always a plus since its super easy to use.

## Now quickreview!

The library is easy to use and super useful. Size wise I'd say is a little bit big for what it does (3kb - gzip).

Documentation is very extensive, and complete. Is very unstructured and brittle with pretty much all the library provides. I'd rather have this in a different way because I think this fact detracts the quality of it.

The lack of a website or marketing put this library low in the radar and that is a shame considering how much it provides.

_In terms of value I'd say this does pretty much all you need for a img lazy loader._

## Diving a little bit deeper

The code is old school with a lot of ES5 patterns. It seems a little bit outdated in terms of practices and also there is plenty of unclear function names with IIFIs and while loops.

I think is just how the author works and maybe one of the reason why is not a lot more popular.

The library is thoroughly tested but again with an old fashion which is not bad, but could be adapted to the new practices so more people can contribute to it.

There are 101 issues open at the time of writing this and the last commit was two days ago which means there is active contribution to this.

I love the fact this has _0 dependencies_ and maybe that is one of the reasons they claimed the library is performant.

Compatibility is another positive point on this since the library works from IE8+.

## Conclusion

Definitely a library to compare with (layzr)[https://github.com/callmecavs/layzr.js] which maybe I'll do tomorrow. Wait and we will see which might fit your needs better. So far if there is no better alternative I'd use this, but I wonder if this is true.

## Scores (higher is better)

- Usefulness: 9/10.
- Code quality: 6/10.
- Documentation: 6/10.
- Browser support: 10/10.
- Potential: 8/10.

_Overall: 7.8/10_
