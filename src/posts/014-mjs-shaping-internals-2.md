---
title: 'mastering modular javascript: chapter 4'
subtitle: 'part II'
date: '2019-02-14'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 4 - 2/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-04.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

# Shaping internals: Refactoring complex code

## Embracing variables over clever code.

Shorter, syntatic sugarish code is not ideal when the complexity is increase in favor of less lines. Less lines of code shouldn't be confused with simpler code. Especially now in Javascript that we are in an "era" of Functional programming where we sometimes abuse of funcional methods such as map, fiter and reduce.

When we have to choose between a short, unclear but aestethic name and a longer, very explicit and a little bit not pleasant to the eye. Opt to the longer name. Maybe a really long variable name is telling that what you want to save there is a result of a complex operation. In that case consider creating a function that guard that functionality and write a nice documentation block around it.

One tip in can give you is, when you are prototyping, focus in the functionality and avoid naming because is very energy consuming. (naming is hard). Before shipping make sure all your variable names are precise and explicit.

## Guard clauses and branch flippng

If we are writing a function and we have certain validations that exit the function, place them on the top of the function closer to the declaration for two reasons:
 1. The guard clause now behaves as a circuit breaker, avoiding the execution of code that it might be unnecessary on the first place.
 2. Else statements could be avoided If we leave the main path as the happy path of our module.
 
When writing guard clauses pay attention to how you name the variable that holds the evaluation. Always create a descriptive variable name and assign a name that is not going to be negated in the guard clause otherwise the reader needs to do the extra operation in their head.

Not my preference:
```javascript
function getDrink(cond1, cond2, cond3, cond4) {
  if (!cond1 && !cond2 || cond3) {
    return 'Thanks!';
  } else {
    return ;
  }
}

```

My preference:
```javascript
function getDrink(cond1, cond2, cond3, cond4) {
  const veryDescriptiveAndPositiveValue = cond1 && cond2 || !cond3;
  if (veryDescriptiveAndPositiveValue) {
    return;
  }
  
  return 'Thanks!';
}

```
 Probably the example is not that good. Sorry, I'm new to this. :D. 
 
## An interdependency piramid

When we have several functions that interact with each other inside a file. Try to put yourself in the perspective of the reader and organize your functions from top to bottom with the more high-level functions closer to the top of the function. So the user can easily understand what the module does and then if they need to have a deeper view of how things work they can just scroll and fill the holes. 

When we endup with several functions that are on the same level and we don't know in which order to place them. It might be a good idea to split those on a separate file because this means our file is growing and defining a layer inside of the same file.

## Extracting functions

functions encapsulates behaviour. Use that in your favor. When you have an statement or conditionals that are growing to the point understanding is hard, consider creating a function and placing the code inside of it. The main advantage of that is that we have the extra "named" indirection level with the possibility for the reader to decide wether he wants to read about the details or not. The function can affect the context from which is invoked in two ways. 

The first approach is in an "impure" way. This means that the function is going either to mutate its inputs or variables from the context. 

The second approach is "pure". This means the function is going to use its input as a configuration object and its going to return a determinstic result.

A pure function has many advantages and I prefer to use it most of the times. I recommend you to read more about this subject because its really a very nice alternative.

## Flattening nested callbacks

Many functions that expect callbacks can lead to an undesired state of callback "hell" if we don't pay close attention to it.
Its way better to flatten all the callbacks by extracting the callback function. This will help on readability and will help you identify the possibility to reuse a callback function in case a pattern arise.

## Factoring similar tasks

When flattening, we could end up with hyper modularity which again goes against a desirable state. Factoring similar tasks when is truly obvious. Your intuition will help you in this, and if you don't trust your intuition (and you shouldn't). Explain the problem to your team, and ask them for their opinion so its a join effort. This late approach will likely give you a better result.

## Slicing Large Functions

Large functions are not good for way too many reasons. You can easily ensure you have short functions by linting rules and you should do it. When you slice parts of a large function on isolated named parts make sure you group the statements by resposability. What its helpful to me most of the time is think about an hipothetical change and how much places I have to modify to deliver that functionality. If you need to touch several different functions for a very small change, this is not a good sign. This is a practice that is extremely hard because we are terrible at predicting the future.

Any way that can help you think about how your module grows/shrinks organically will push you forward. 

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
