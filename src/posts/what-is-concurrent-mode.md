---
title: 'What is the concurrent mode in react, really?'
subtitle: 'concurrent mode'
date: '2019-11-19'
topic: 'react'
description: 'React: What really is concurrent mode?'
lang: 'en'
---

# React: What is the concurrent mode, really?

Concurrent mode is now with us and came to stay. The last feature was launched in an experimental mode and promise an improvement in the overall performance.

This feature originally was not created to support `suspense`, but this mode, consequently allows `suspense` to be possible. A topic I will introduce later in a future post.

In my words,

**Concurrent mode its a flag that allows react's engine to decide when to commit to the DOM when in presence of several simultaneous changes**

In essence, this mode makes react smarter.

## Why there is so much hype for this mode?

When the core of react was re-written entirely in [React fiber](https://github.com/acdlite/react-fiber-architecture), one of the main benefits was the possibility to keep track of several virtual threads (fibers) which have tags according to the priority. In a very general way, react now can give top priority to components the user was interacting with and lower the priority to other ones.

_React fiber_ sat down the foundations on which concurrent mode works. When multiple elements are changing at the same time, react can now smartly decide which elements of the virtual dom have priority to be rendered.

In a few words, react can handle multiple changes "at the same time".

## How is this different from the "normal" mode of react?

In the, lets say, dumb version (synchronous mode) of react, React render the screen taking as a premise that everything that is going to be rendered depends on syncronous content and have the same priority. After [react's magic algorithm](https://reactjs.org/docs/reconciliation.html), the dom is efficiently mutated and we immediately see the representation of the new state.

In the case the screen or component depends on an asynchronous source of data, and also this source is incredible fast, react will be true to its behaviour and _will render every intermediate state our component transition, even for an split second_. This will result on the user seeing a _flash of "unloaded"_ state (?FOUS :D) on every component tide to this source.

In normal mode (synchronous), _react does not have any information over the side effects_, thus the engine it's not able to optimize for this use case.

## Wait, wait, wait... Explain as if I were your old grandma (non-programmer)

Pre-concurrent mode react doesn't have any idea that there are a lot of dependencies to "external" services (mainly APIs) and then it cannot do anything to optimize the user experience.

Post-concurrent mode we let react's engine know our dependencies with external services so it can smartly make use of this information and decide what it's more convenient to render at each time.

An example, very skewed to the suspense feature. We have a section on our screen that is going to show an spinner while fetching data from an API . This API only needs 20ms to return a value. In synchronous react we are going to see an spinner for a small fraction of time which turns out to be very "inneficient", because after the browser renders that It has to recalculate the new layout with the result of the endpoint.

It would be way more convenient to way a couple of milliseconds more to make a efficient use of the resources and also present to the user a final state of the UI instead of the, sometimes very annoying, intermediate state.

This last strategy is possible thanks to [React concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html).
