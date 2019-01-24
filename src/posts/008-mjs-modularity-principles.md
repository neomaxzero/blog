---
title: '[WIP] mastering modular javascript: chapter 2'
subtitle: 'part I'
date: '2019-01-22'
topic: 'book review'
---

# [WIP] Let's review: Mastering Modular Javascript - Chapter 2 - 1/2.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-02.md)

***Disclaimer**
This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

The second chapter talk about principles. Principles is an strong word. Independent of the context, principles are an inevitable consequence of something. In this case we can soften that saying that this will serve as a guideline to achieve "real" modularity.

## Modularity Principles

Why we want modularity was mostly answered in the previous chapter. If still, that is not clear enough. Modularity **can be the answer to complexity**. Unless you are a bad colleague you don't aim to increase the complexity of systems. In general, we want to add functionality to an existing system and the cost of that is an increase in complexity.

## Single Responsability Principle

According to several blog posts, books, articles and this book if a module have only one responsability there is only one reason to change thus, the footprint of the changes are small, isolated and controlled. This is easier said than to make it happen. Defining the responsability of a component is a really hard task. The book recommend to keep the semantic consistency of the API. If we pay special attention to how the exported methods and properties of the modules are related we can have a better hint of the responsability the component has. When a module is used by other modules, the interface becomes more rigid because we need to mantain the API as it is, or create a major release, which could case pain on the consumers.



<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
