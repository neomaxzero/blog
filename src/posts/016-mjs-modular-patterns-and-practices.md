---
title: 'mastering modular javascript: chapter 5'
subtitle: 'part I'
date: '2019-02-18'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 5 - 1/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-05.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

## Modular patterns and practices: Leveraging Modern JavaScript

As the language grows, we have better tools and a more extensive set of statements to express what we want. In the case of modular javascripts, we also have new ways of representing modular code. Especially from ES6 which brought several new additions to the standart and later to the browsers. In this 3 parts, articles I'm going to transmit what I think the book give as good features to use when building modules.

Syntax sugar is not only to shorten the code, drop a few words, and make it look more aestetically pleasant. The end goal is to have more concise and hopefully less clutter code at the end of the day.

### [Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)

Template literals are incredible powerful, it gives you a way to express strings of text with the plus benefit that you can use variables inside with ease. That is not the only nice addition with this feature. You can also create your own functions that will process the text and will output whatever you want. I sincerely recommend you to dive into the basics and start using it. Again, linting can be enforce to make good use of this ES6 feature.

### [Destructuring, Rest and spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment)

Is very likely that you are going to handle data from data structures. In Javascript, we tend to use Arrays and Objects all the time. Especially now that we are in an era of immutability and functional programming, getting to know and understanding how spread operator works can be very beneficial to your day to day coding sessions. 

### [Block scoped variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

`var` is mutable and function scope and lead to a lot of issues in the past. With ES6, `const` and `let` was introduced and there is no reason to use `var` ever again. `let` and `const` are block scoped, its behaviour is way more predictable and they don't suffer of several problems that `var` has. Even if you are an IE8 fan, you can rely on babel to transpile your code. 

### [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

There are a few flavors to choose in order to implement async behavior on your modules. If it is possible I'd say go for async/await that is really easy to understand because it takes the asynchronicity out of the way (while reading the code). On the other hand if you are in a project that by default use callback functions, consider doing a first migration to Promise. Its well worth the effort to learn the ins and outs of Promises which is not easy at the beginning and then if you think is neccessary migrate to `async/await`.

If you interact with 3rd party libraries, I'd recommend you to build a wrapper around the library so if the library use callbacks you use the same async invocation pattern throughout your project.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
