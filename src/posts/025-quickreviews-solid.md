---
title: 'solid'
subtitle: 'library'
date: '2019-04-07'
topic: 'quickreviews'
description: 'quickreviews: solid a non-vdom ui library'
---

# quickreviews: [solid](https://github.com/ryansolid/solid)

> version: 0.4.2

yet another UI library. Looks a like react but deep inside is not.

## What are you then?

Solid is a ui library that is declarative, it uses JSX and the main difference with React/Vue and other vdom libraries is that it does not rely on diffing dom trees in memories to determine what needs to be render.

## How does it work?

So the real question is, _isn't this a step backwards of react?_. And the answer varies depending on, What do you want to do with it? So this means that probably there are several use cases where this library could fit in.

In my eyes this library is a strip version of react that removes a few features which the author was not needing at the moment and ended up with a reduced version of react.

I think you could also agree that this api looks familiar:

```javascript
const HelloMessage = ({ name }) => <div>Hello {name}</div>

createRoot(() =>
  document
    .getElementById('hello-example')
    .appendChild(<HelloMessage name="Taylor" />)
)
```

The rest is very similar to react-hooks in terms on how to use state and interact with it.

```javascript
import { createState, onCleanup } from 'solid-js'

const CountingComponent = () => {
  const [state, setState] = createState({ counter: 0 })

  const interval = setInterval(
    () => setState({ counter: state.counter + 1 }),
    1000
  )

  onCleanup(() => clearInterval(interval))

  return <div>{state.counter}</div>
}
```

Let's go and do a quickreview :D

## Now quickreview!

At first, second, and third glance this was "inspired" by the react API. Bare in mind this review was done in the very early stages of the library so It might change in the future.

After reading the documentation and the driving reasons behind I am not 100% convinced about what it offers.

the Virtual DOM was a game changer when react was introduced that was later implemented on most the popular well known libraries and frameworks, so getting rid of it didn't have a major impact on the main size of the library considered that this is still 7kb gzip.

I can imagine this is easier to learn if you don't know react yet. So, plus points(?)

## A little bit deeper, not much

Diving into the code I can say is neat and organized with several files that are not that long with descriptive function names. A little bit short on the naming of variables, very "functional" approach, with a lot of single character variable names. (I'm not very in favor of that extreme).

It relies heavily on ES6 and proxies which are not compatible with IE, because I also don't see that is being transpiled to ES5.

Pretty much not dependencies at all (2).

For what the library delivers the ammount of code is quite low. I love this.

It was clearly not a copy/paste of any other ui library I've the chance to come across.

I love the fact that at least half of the repo is documentation and I can tell it was its main focus at the time of building this.

It lacks of live examples and would be nice to have that "playground" space to have a better look without having to install on your own.

A lot of repetition in the test's code which I think is Ok, for now.

## Conclusion

I will bring the elephant in the room here... hello _Preact_, a 3kb v-dom, declarative, very mature library that is clearly a better solution than this as it its now.

It seems that this was an intent to learn how to build a UI library, I saw that he have also written a blog post serie on how he did this library and I think that is a great contribution to the community. Other than an educational driver I'd say that untill now this library does not offer a lot. Could be enough for you!

## Scores (higher is better)

- Usefulness: 6/10.
- Code quality: 7/10.
- Documentation: 9/10.
- Browser support: 5/10.
- Potential: 6/10.

_Overall: 6.6/10_

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
