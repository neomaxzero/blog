---
title: 'Mastering Modular Javascript: Chapter 1 - Part 1/2'
date: '2018-09-15'
---

# Let's review: Mastering Modular Javascript - Chapter 1 - 1/2.

With this series of posts I am going to give my opinions, thoughts and conclusions about the free ebook "Mastering Modular Javascript" by Nicolas Bevaqcua.

I'm going to be very straight forward and this is pretty much my third revision of the book.

My intention is to keep this as minimal as possible and at the same time provide value for the one whom might read it (myself in a few months).

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-01.md)

## Chapter 1

## Introduction to "Module thinking"

### Interfaces are key

Interfaces are the doors that hide implementation details.

This is really important, interfaces hides, any ammount of complexity.

> Well design interfaces should be the thing at the top of the list.

- Smaller interfaces:
  - Less complexity.
  - Fewer "touchpoints".
- Large interfaces:
  - Harder to use.
  - High ammount of functionality.
- Consistent APIs - Productivity ++.
  Complex interfaces can be fight, in certain degree, with lots of documentation to close the _knowledge gap_ need it to use it.

## History on modularity

In order of appeareance:

- 0 - Everything in the global scope.
  - Naming collisions problem.
- 1 - IIFE.
  - No depedency tree involved.
- 2 - Require JS.
  - Yes! We have tree.
  - Fak! Everything is async and is poorly resolved, performance is bad.
  - Meh! Too many flavors on how to use it.
  - Look at how popular Angular dependency Injection system is now. :P. Yes! minifiers, I'm looking at you.
- 3 - Node and common JS.
  - File equivalent to module.
  - Yes! Dependency tree and well resolve dependencies.
- 4 - Browserify
  - "Universal" modules.
  - Where are you browserify? Javascript everywhere.
- 5 - _ES6 to rule them all. Module syntax introduced_ (ESM)
  - Static import.
  - Dynamic import.
  - You named it, man! :D
