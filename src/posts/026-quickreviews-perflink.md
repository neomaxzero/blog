---
title: 'perflink'
subtitle: 'performance tool'
date: '2019-04-08'
topic: 'quickreviews'
description: 'quickreviews: perflink a real time performance benchmark tooling tool to compare js snippets'
---

# quickreviews: [perflink](https://github.com/lukejacksonn/perflink)

> version: first (?)

Today I present to you a nice app to hold on your toolbox. Because we all care about performance, and sometimes we wonder if this or that is better, instead of just wondering, you can now quickly test it.

## What are you then?

Perflink lets you compare the speed between different snippets of code in a fancy and [shareable](https://perf.link/) way.

Right out of the box. The application is ready to use. 

## How does it work?

The app is very intuitive. One the top side of the application. You have one panel to create your test data and another to load your snippets.

Everytime you change your snippet, the graphs are going to reflect the change.


## Now quickreview!

Lean UI, I feel like it is not even necessary to explain how it works.

Syntax highlighting is a useful feature, really necessary in this case and is clear the developer care about aesthetics.

The lack of an spinner was somehow a little bit annoying. There is an small animation that put the bars at 0% but still I feel is too sutil

The app is built with react on top of it. 

Documentation is a bless, it explains how it works behind the scenes. It's really nice that the author had decided to explains how `performance.now` works.

Roadmap is promising and well defined with a lot of tasty new features.


## A little bit deeper, not much

The approach of not having a module bundler is really interesting. Its using 'unpkg' to import dependencies directly with ESM modules. There is no package.json :D. This could be considered a plus for some people but also since a package.json acts like the manifest of your app. It is kind of confusing at the same time.

Standard react app structure with lack of tests but I also don't think that is a lot neccessary at this point.

## Conclusion

Definitely I will use it for small snippets when comparing different approaches. Personally, I only invest time on performance when there is a clear problem, but I can imagine is nice to have this at hand if the opportunity arise.

## Scores (higher is better)

- Usefulness: 8/10.
- Code quality: 8/10.
- Documentation: 9/10.
- Browser support: 8/10.
- Potential: 8/10.

_Overall: 8.2/10_

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
