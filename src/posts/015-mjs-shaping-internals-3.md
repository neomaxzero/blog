---
title: 'Lets review: Mastering Modular Javascript - Chapter 4 - 3/3.'
subtitle: 'part III'
date: '2019-02-17'
topic: 'book review'
tags: ['book review', 'mastering modular javascript']
---

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-04.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

# Shaping internals: State as Entropy

We saved state for two reasons:

1. Displaying it.
2. Control the flow of a program.

When we saved state for the later our module is going to grow in complexity because we'll need conditional/iterative logic to deliver what it needs to.

## Current State: It's complicated.

Remember we talked about how modularity is achieve when splitting our big modules. When state is involved, splitting is something that is not easily done. State could be one of the main couple points to our modules (similar to how databases couple entire systems).

But let me tell you that is possible. It might require changes on the shape and interaction of your state management and responsabilities of your modules but its achieable.

## Eliminating Incidental State

When we save state, we have to pay attention on not saving derivated state next to the state where it comes from. It's very easy that those states get out of sync. The computed state can be saved on a memoized module but never with the original data because this could lead to an unexpected behaviour very hard to track.

Although caching is a well known strategy to increase performance, I recommend not to do it if there is not a clear need for it.

Believe me that you don't want to be displaying old data just because you added optimization where it was not needed on the first place.

## Containing State

There is also the case that we have state because base on the input we store data and then we produce and output base on the input and the current state of our module. It should be really clear via the API or documentation which are the inputs that mutates the state so the consumer can expect different outputs every time interacts with it. Furthermore, we should avoid this kind of methods when possible.

## Immutability as a tool

Immutability means that the state is rigid and it does not change. Every time we need to change something in the state we create a new state from the scratch with the changes append it. We say that the state is immutable and there are not side effects. This solve the issue above because we can provide the state in which our inputs are base their results on to have a predictable behaviour.

## Data Structures are king

Choosing the right data structures its something not trivial at all. When we store the data with the incorrect structure we are going to notice that we need to shape it a lot inside our module to produce the expected output. When we have the correct data structure for our module you are going to just query your structure and maybe aggregate the data if neccessary.

Being this said, a data structure should be agnostic of whats being done with it. If we need to couple our data structure to multiple modules this could be a challenge and something we should avoid. Even if the data is slightly similar you might consider create a derivate data structure suited for a different module so you don't pollute the same data structure with complex use cases.

## Isolating data and logic

We can not foresee all scenarios in the early stage of our module and also in an advance stage we are going to be mistaken. Create intermediate data structures with isolated responsability is a nice practice to have easily removal and mantainable code.

## Restricting and Clustering logic

The same approach that we use for our API to expose only what is essential and minimal, we should use when talking about data structures. The data structure inside your module is a tool for your module to explote, when you decide to export that you are now tight to the current shape because you loose control of it. The shape of the output should always be fixed (unless you release a major versioned change). If possible avoid having multiple ways of outputting values from your module so its up to the consumer to add extra sauce to it if needed.

Remember that the ultimate goal on modularity is to end up with a simple, easy to use module
