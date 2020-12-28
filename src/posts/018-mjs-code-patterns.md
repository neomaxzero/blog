---
title: 'Lets review: Mastering Modular Javascript - Chapter 5 - 3/3'
subtitle: 'part III'
date: '2019-03-25'
topic: 'book review'
tags: ['book review', 'mastering modular javascript']
---

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-05.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

## Modular patterns and practices: Code Patterns

When building software became mainstream, a few strategies to solve common problems arise. We have patterns that are agnostic to different languages and there are others that are very specific.

### Revealing module

Expose only what consumers should be able to access. We have seen this pattern before when we talk about complexity and this has become a common scenario because of the lack of private properties in JS. We are really close to have this feature implemented on the standard so, I wonder this will be forgotten soon after.

### Object Factories

Another common scenario is when we have state. Having global state is not a good practice. We could have multiple parties depeding on that state and that could lead to unexpected behaviour. When this is not necessary we should strive to have state close the place is going to be used. In that case we can create an entity that will take care of the creation of that state. We call this kind of entities, object factories.

### Event emission

Decoupling communication between components can be done with ease if we put a channel between our entities. Making our components rely on a communication channel decouple the components between each other and couple to a single point. This bring a different problem to the equation but solve a bunch of others. I personally don't know much about it and would like to create an extensive research about this. :D (soon)

### Messaging Passing

JSON is by far the best format to send message between components in JS. Use it :D
