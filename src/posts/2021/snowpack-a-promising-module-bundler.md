---
title: 'Snowpack: A promising bundler'
subtitle: 'Module bundler with a twist of native'
date: '2021-01-03'
topic: 'Library thoughts'
tags: ['dev thoughts']
description: 'I checked a "new library" called Snowpack. It turned out to be a revamped version of pika'
language: 'en'
hideImgTitle: false
---

I remember some time ago I wrote a [quickreview](/023-quickreviews-introduction/) about a library called [pikaweb](/024-quickreviews-pikaweb/). I was interested in its proposal yet didn't entirely understand what they were about. My initial thoughts were not that positive and although I believed it had some potential I failed to see why I would choose to use this library over a more mature one like webpack. Six months later, I checked a "new library" called Snowpack. It turned out to be a **revamped version of pika**.

## Why changing names?

To my eyes, there is no other reason than bringing a new wave of attention to the library and I think the execution was done amazingly well. The library has evolved and with it, almost everything has changed. Only the core of the product has remained the same. The original intention of Snowpack was to leverage from the **browser native module** API and that is still something seen in Snowpack.

## What changed from pika/web?

The last time I checked, pika's documentation was almost nonexistent with quite a few examples and overall hard to understand what it was trying to deliver.

Today, the naming similarity with webpack makes you immediately understand that we are now talking about **another module bundler** with a promise of being performant.

The resemblances with webpack are notorious. Having such a clear winner of the module bundler "market" brings two clear benefits:

- We are familiar with configuration-based bundlers and we are likely to quickly pick up how to work with them.
- Having a plugin system like webpack also helps the community ease the migration of some good packages to the Snowpack ecosystem.

## Why would I choose to go for Snowpack instead of Webpack?

If you believe in **following industry standards** this is a valid reason to try Snowpack. Webpack has a significant learning curve and I see Snowpack as a valid bridge from a module-bundler-ruled world to a "no bundler at all" situation. Maybe at some point, we would get rid of all of the module bundlers (dreaming is free).

I was thinking why isn't this a feature of Webpack and I guess that with any new ideas it is easier to create something from scratch to prove it is worth it instead of including it in a big project widely used by the community. Opinions are always strong and the maturity of the project comes with some costs associated.

I believe Snowpack is showing the benefits of using web standards and like what happened with Parcel it can only improve the ecosystem showing that there are still many things to improve for the community.

## Conclusion

Snowpack is delivering a new flavor of module bundler with a twist. Is it reinventing the wheel? Maybe. You can still decide to continue going with webpack, parcel, or whatever makes you happy. I'm trying Snowpack myself with a personal project and it's going great. Let's see what happens in six months. Maybe a new name? Who knows...

Check it here: [Snowpack](https://www.snowpack.dev/)
