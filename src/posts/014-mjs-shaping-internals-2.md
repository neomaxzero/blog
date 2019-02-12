---
title: '[WIP] mastering modular javascript: chapter 4'
subtitle: 'part II'
date: '2019-02-12'
topic: 'book review'
---

# [WIP] Let's review: Mastering Modular Javascript - Chapter 4 - 2/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-04.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

# Shaping internals: Refactoring complex code

## Embracing variables over clever code.

Shorter, syntatic sugarish code is not ideal when the complexity is increase in favor of less lines. the amount of lines of code shouldn't be confused with simpler code. Especially now in Javascript that we are in an "era" of Functional programming where we sometimes abuse funcional methods such as map, fiter and reduce.

When we have to choose between a short, unclear but aestethic name and a longer, very explicit a little bit not pleasant to the eye. Opt to the longer name. Maybe a really long variable name is telling that what you want to save there is a result of a complex operation. In that case consider creating a function that guard that functionality and write a nice documentation block around it.

In tip in can give you is, when you are prototyping to make something word, focus in the functionality and avoid naming because is really energy consuming. (naming is hard). Before shipping make sure all your variable names are precise and explicit.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
