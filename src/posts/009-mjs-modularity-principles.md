---
title: 'mastering modular javascript: chapter 2'
subtitle: 'part I'
date: '2019-01-27'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 2 - 1/2.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-02.md)

**\*Disclaimer**
This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.\*

The second chapter talk about principles. Principles is an strong word. Independent of the context, principles are an inevitable consequence of something. In this case we can soften that saying that this will serve as a guideline to achieve "real" modularity.

## Modularity Principles

Why we want modularity was mostly answered in the previous chapter. If still, that is not clear enough. its because **Modularity can be the answer to complexity**. Unless you are a bad colleague you don't aim to increase the complexity of systems. In general, we want to add functionality to an existing system and the cost of that is an increase in complexity.

## Single Responsability Principle

According to several blog posts, books, articles and this book, if a module have only one responsability there is only one reason to change thus, the footprint of the changes are small, isolated and controlled. This is easier said than to make it happen. Defining the responsability of a component is a really hard task. The book also recommend to keep the semantic consistency of the API. If we pay special attention to how the exported methods and properties of the module are related we can have a better hint of the responsability the component has. Another consideration we should have is that when a module is used by other modules, the interface becomes more rigid because we need to mantain the API as it is, or create a major release, which could case pain on the consumers at the end of the day.

## API First

Thinking in terms of the consumer is always convenenient since it put us in the perspective of how the users are going to interact with our API. When we take an API first approach we have to be sure that we expose only what is trukly neccessary and that makes sense to the surface the API currently holds.

## Revealing module pattern

If we only want to export what is really neccessary from a module. Your next question should be, how? [Revealing module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript) is one of the popular options and a very good one.

## Finding the right Abstraction

The right abstraction is whatever it makes sense for the features the module implements. Sometimes this is a matter of timing. Waiting long enough to identify the pattern of how our module organically grow is good strategy to reduce the complexity and also win some experience before working on the wrong abstraction before hand.

Something interesting that Nico added to this paragraph is that adding state to a module increase the complexity of it by a lot.

## State management

Handling state is one of the things we do all the time. Every time we assign a value to a variable we are defining the state.
The state of a system is the set of all the values a program has at any given time. Depending on the current state our program will follow one flow or another. State is not a minor subject, deciding when and where to save it could be crucial when adding features. **Keep it minimal and well defined**.

In the case of modular design, _the recommendation is to split you state in manageable parts and spread across all the modules that actually need that state_. The analogy here is to give a subtree of your state tree to different modules so every module handles as fewer states as possible.

When possible use [pure functions](https://www.sitepoint.com/functional-programming-pure-functions/), this will help you have predictable modules, easier to test and also to understand.

The more state you need, the more entropy your module will have and this is directly proportional to have complex your system is. The idea with correct state management is not to avoid using state at all. State is really neccessary and useful, so be aware of the implications of creating and managing state inside modules.
