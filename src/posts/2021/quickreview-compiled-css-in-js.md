---
title: 'Quickreviews: Compiled CSS-in-JS'
subtitle: '(7.6/10) - CSS in JS but with some optimisation(?)'
date: '2021-01-08'
topic: 'quickreviews'
description: 'quickreviews: '
tags: ['quickreviews']
featuredImage: 'quickreview-compiled-css-in-js.png'
---

> [Compiled CSS in JS v0.5.3](https://compiledcssinjs.com/)

## What are you then?

It's CSS in JS alternative library created by Atlassian. Similar to Styled-components, emotion.

## How does it work?

Compiled CSS will extract the properties to specific classes (atomic-css) and create their own stylesheet. Could result in an increase on performance.

## Now quickreview!

It's really hard to believe how is this much better than Styled-components/Emotion js or any other CSS-in-JS Library. I would really like to have a comparison tool or some more data on how this affects the final output of the HTML size + some performance metrics related to rendering/painting.

Documentation is at a good quality level and gives trust that it something being maintain and taken care of. There are some migrations guides which really helps on adopting it (even codemods).

Another stated benefit is that you can use it without a bundler configurator which in my experience is almost never the case for react apps. I guess they do have some apps that use no bundler configuration at atlassian and this is a benefit for them. Bundlers are really optimize that for small apps so I don't see that as a problem.

There are some caveats and limitations very clearly written so for a version 0.5 I see this is ready to be used on non-critical production apps.

My intuition tells me there is certain size of CSS that would benefit from this library and It's hard from a quickreview perspective to see myself using it instead of more mature libraries. On the other hand, migrating from those libraries may be very straightforward so experimenting on big codebases to see if there are performance improvements can be easily done.

## Diving a little bit deeper

Monorepo with a lot of documentation and comments. Typescript with some very mature structure and a lot of scripts to automate processes. I also see they have a benchmark process but apparently is just to compare different implementation of some internal functions to each other. I had hopes it would be to compare other kind of metrics to different CSS in JS libraries.

It's always nice to see a lot of tests and also how active the maintainers are at answering issues and providing a roadmap/ clear plans to where they want to go.

## Conclusion

It's an small but at the same time extensive library. I think I cover as much as I could in half an hour but I'll be keeping an eye on this. I hope at version one the have more data on how much more faster and a website is. I won't be trying this library any time soon but I'll check it in 6 months again.

## Scores (higher is better)

- Usefulness: 6/10.
- Code quality: 8/10.
- Documentation: 8/10.
- Browser support: 10/10.
- Potential: 6/10.

_Overall: 7.6/10_
