---
title: '[WIP] - mastering modular javascript: chapter 5'
subtitle: 'part II'
date: '2019-02-23'
topic: 'book review'
---

# [WIP] - Let's review: Mastering Modular Javascript - Chapter 5 - 2/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-05.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

## Modular patterns and practices: Composition and Inheritance

With the raise of react and redux. also came "functional" programming tide to it. Why? That is the subject for an entire series of blog posts. Composition is most of the times related to functional programming and Inheritance is always related to object oriented programming. Because javascript is a very "versatil" language we can use the same concepts on our modules.

To keep it simple, I'd say that when we apply composition in out modules we are attaching functionality orthogonaly. This means that we have several unit that do only one thing that we can combine to create the outcome that we need. The combination is most of the time related to a functional approach where the output of one function is the input of a different one.

` f(g(x))`

In the case of inheritance the extensibility is done through a hierarchy chain where an entity can declare who is going to be its parent so it can use things from the parent.

This two approaches, is little to say the are different.  

## Inheritance through classes

Fortunately in ES6, *classes* were introduced and is possible to apply the paradigm with this new feature. Classes are syntax sugar for prototypes. Javascript is a prototype based language that differs from how Object oriented languages works, so with classes is way easier to grasp how inheritance works.

In a module is useful to use inheritance when we have entities that needs to represent a hierarchical relationship between them. Because with object oriented programming we can map our modules to real life object we can take advantage of this approach for those scenarios.

## The perks of composition: Aspects and extensions

Sometimes when the characteristics of our module tends to be describe for what it does instead of what it represents. Composition could fit better to have the freedom to attach peaces of behaviour together. In Composition the complexity is given at the time we stick things together. So the little functions that represent certain behaviour.

There are a few ways of apply composition in Javascript.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
