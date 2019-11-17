---
title: 'mastering modular javascript: chapter 3'
subtitle: 'part II'
date: '2019-02-05'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 3 - 2/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-03.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

# Module Design

## CRUST consideratins

We are going to discuss a little bit more what else we need to think about when applying the principles for modularity.

### Do repeat yourself, occasionally

In many occassions we have read that duplicating code is wrong because it means you need to mantain the same code in multiple places. Like with many things, everything that is taken to the extreme can be detrimental. DRY is not the exception to this rule, if we take this practice to the extreme we can harmful ourselves. In cases we are increasing the complexity of a module because of applying the "DRY" method to a point a module is illegible, we are surpassing the benefits and we should reconsider.

## Feature Isolation

The process of taking apart a big module on different submodules is an art that is achieve through experience. When we split a module we are making a feature isolated thus, we are letting a children component leave its own life. That means this submodule is not aware of its parent anymore.

When we divide a component we are spreading the complexity on different files with the cost of adding a level of indirection. This trade off is most of the time worth it because this means the level of energy we need to understand a module is related to how much code we have to read on a glance when we inspect a module. Since we spend more time reading code than writing it, this is something we could benefit from quite often.

Like with the previous consideration, taking feature isolation to the extreme will mean that for every little function we create a module, that is not desirable. Isolate your features when the benefit is clear and outweight the disadvantages.

When creating the modules is also a good addition to create layers, this will help from the developer perspective to quickly identify how the information flow and where to place the components.

It might not be clear at the beginning how to split your component. Wait until patterns start emerging or, trial and error.

> **feature isolation** is something that I always see it defers from project to project and although we might want to use the same architecture and pattern on all projects this is something that is not really something you should aim to.

## Trade-offs when designing internals

While implementing the requirements of our consumers and having the right API for them to use it, there are a few considerations that might arise that are not quite obvious to estimate. Flexibility is always desire but not required. We have to manage to deliver the minimal, easiest API while providing a mantainable module. Always favor readability over speed since in a few weeks you or someone in your team will have to start over with understanding what it was done.
