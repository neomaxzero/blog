---
title: 'mastering modular javascript: chapter 3'
subtitle: 'part I'
date: '2019-02-03'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 3 - 1/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-03.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

# Module Design

Together, in [chapter 2](https://m4x.io/009-mjs-modularity-principles) we reviewed the principles we need to keep in mind to achieve modularity. Everything is ok until the cockroach starts flying, and this will likely happen when your module start growing. Let's check what can we do when this happen.

## Growing a module

From day to day we'll be receiving feature requests that we need to implement somewhere. If we are lucky, the new feature could be isolated and related to a particular module which would make our life super easy. In this scenario, the module will grow organically and the complexity introduced is unlikely to be a game changer. When we don't know where this new responsibility should be placed _Its time to experiment._

## Composability and Scalability

When creating new modules try to build them in favor of composability. This means that you should aim to have several units that combined together deliver the functionality we intent to complete. Depending on how much control the module handle for the consumer, the more control the module has the more this will increase the complexity of the module and also the assumptions the module make for the consumer. There is always a constant struggle on deciding between flexibility and simplicity. When facing this kind of decitions always choose for rigid components if there are not current needs for the component to be otherwise.

If we had designed them with scalability in mind, we might’ve grouped many similar use cases under the same feature, and would’ve avoided an unnecessarily large API surface in the process.

## Design for today

We love making predictions. Sometimes we are wrong. Actually, most of the times. If we want to keep our modules simple and **real**, develop for today. Don't try to add flexibility to your modules for the sake of it. Its way worse to recover from a bad API design if we don't have any data to base our decitions on. Of course there are multiple times we know before hand a new use case is going to arrive very soon, and _very soon is not today_ and it might never be. When we strive to build the functionality we require for today we guarantee we are going to have only the very minimal.

## Abstractions evolve in small steps

Abstraction is such a fancy word :D. According to a random page: `Abstraction is the act of representing essential features without including the background details or explanations`. I now know why this can go wrong so easily. Representing the essential should be driven by your requirements, so your module gradually grow without adding extra unnecessary complexity.
When we doubt on exposing certain internals, just don't. Expose the minimal until we are certain we need those internals to be used by the context.

## Move deliberately and experiment

Remember we said that modules will grow, and sometimes we won't know where to put the new features so we just have to tried things out. It's ok to make mistakes because when there is lack of information taking decitions becomes a tough problem. Just wait until a pattern emerge and we know for certain where the features should be placed. Its a good practice (by Nico and me) to cover your functionality with tests, especially when we are dealing with a lot of uncertainty so in the future we can move things without much trouble. Tests will not guarantee that things will work out forever, but for sure are very useful to catch a big surfaces of erros we might have.
