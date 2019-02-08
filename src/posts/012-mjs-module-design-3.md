---
title: '[WIP] mastering modular javascript: chapter 3'
subtitle: 'part III'
date: '2019-02-08'
topic: 'book review'
---

# [WIP] Let's review: Mastering Modular Javascript - Chapter 3 - 3/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-03.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

# Module Design

On the second part we mentioned that a module will grow and with that we need to make decitions on where we should allow that to happen. When we start getting a better feeling of how things should go the next step is to take actions and starting stripping functionality out of component.

## Pruning a module

### Error handling, mitigation, detection and solving.

When working on a component we'll encounter errors and issues we need to fix. This is very likely to happen really often. The root cause of errors can be something very difficult to track depending on how complex our module is. This is another main reason why we should keep our modules small and "predictable". On top of that, having tests will help your module grow up naturally without you having to keep track of all the features implemented. There is plenty of documentation about testing and how benefetial they are. (probably I'll write a post about it).

Error handling is something sooner or later you are going to handle inside of your module, when you allow a large variety of inputs, you'll need to also treat all the edge cases that will arise because of it.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
