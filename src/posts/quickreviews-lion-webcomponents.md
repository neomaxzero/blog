---
title: 'Quickreviews: Lion Web Components'
subtitle: 'library'
date: '2020-03-02'
topic: 'quickreviews'
description: 'quickreviews: Lion web components library'
language: 'en'
featureImage: ''
---

> [Lion Web Components](https://github.com/ing-bank/lion) - version: X.X.X

## What are you then?

In the README.md of the project there is very good, short explanation about what this is.

There's also a [long version](https://medium.com/ing-blog/ing-open-sources-lion-a-library-for-performant-accessible-flexible-web-components-22ad165b1d3d)

Shorter, library of web-components.

Promise to be:

- Performant.
- Accessible.
- Flexible.
- Framework agnostic.

## How does it work?

Lion offers a set of web components with bare functionality and no styling. You can directly install whatever you need from the library and start using it directly.

Not much magic, very straightforward approach. Writing web-components that work is not easy but also not trivial.

## Now quickreview!

There's shit ton of documentation from the very beginning which is super nice. The focus on making sure people uderstand what is the library about and what are the benefits you have upfront.

You have a [storybook](https://lion-web-components.netlify.com/) implementation where you can play around and if you still didn't get it, the blog post really help.

**More than 40 web components** with utilities and everything you might need to implement forms and a, ...Bank.

I like the approach the company took and how they are pushing to start using the web standard. More to read about web-components and its hype.

## Diving a little bit deeper

The repository follows a monorepo structure with [Lerna](https://github.com/lerna/lerna) which makes it easier for them to maintain and keep it separately, this allow them to offer individual components and the user can opt to import what they need.

The implementation of their componens is based on the [Open web components recommendation](https://github.com/open-wc/open-wc) and [Web components polifyll](https://www.webcomponents.org/) to increase compatibility.

The structure of the repo is standard for a monorepo with [rollup](https://rollupjs.org/) as a module bundler.

I really like the libraries they've picked and it seems that it evolved to a very nicely picked process.

There is a `bundlesize` configuration in the package.json I find very nice. Actually, I didn't know that existed. I'll take a look

Every subpackage has a ton of documentation with examples and each components present a set of tests.

## Conclusion

This web component library is definetely one you should at least try if you are into web component. ING bank bet for web compoenents and the idea behind this library is well executed. The quality of the documentation, examples and the set of components is sufficient

## Scores (higher is better)

- Usefulness: 8/10.
- Code quality: 8/10.
- Documentation: 9/10.
- Browser support: 9/10.
- Potential: 10/10.

_Overall: 8.8/10_
