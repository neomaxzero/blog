---
title: 'Lets review: Mastering Modular Javascript - Chapter 4 - 1/3'
subtitle: 'part I'
date: '2019-02-11'
topic: 'book review'
---

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-04.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

# Shaping internals

Our modules will live in a constant movement, before we mentioned about differents things to do and consider when a module grows, and a few other when its shrinks. Most of the tips and recommendations were focused on the interface of our component. After we have a clear vision and a well defined interface is good to work with the internals to increase their quality. In this case a higher quality module is directly related to how easier it is to understand its internal logic.

As I said before,

> Internals of the components should be as easy as possible to understand.

## Containing nested complexity

In Javascript, especially when working with async callbacks, is very common to spread logic between the async and the sync part of our modules. My recommendation now is to avoid async code and callback hells and favor sync code with async/await statements. Even when we don't deal much with nested complexity because of callbacks, sometimes we have several layers of conditional logic that are really hard to understand. A flatten structure is always preferred when this happen. There is always a better way to express this kind of scenarios. Hiding complexity behind functions is also one way of dealing with this problem.

## Feature entaglement and tight coupling

When features come at a pace we cannot keep up with a simple module. We should start changing our methods and start considering reviewing the responsability of our modules consistently. Keeping your module clean at every stage is vital if you don't want to end up with entagled code.

## Frameworks

A framework as a high level module, also hinders the complexity of probably a hard problem solved. When we opt in for a framework we don't only bring all the benefits this will bring with it. We also marry with their desitions, goods or bads. In most cases we should identify which practices we want to embrace from a framework and which others we should avoid. We can use linting rules to enforce this behaviours but also a good project structure. With clear rules at the time of implementing the different artifacts will serve as a guide to a simpler architecture.
