---
title: '[WIP] mastering modular javascript: chapter 2'
subtitle: 'part 2'
date: '2019-01-29'
topic: 'book review'
---

# [WIP] Let's review: Mastering Modular Javascript - Chapter 2 - 2/2.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-02.md)

***Disclaimer**
This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*


The first part gave you the essentials to modularity, in this part I'm going to complement this concepts with a set of new considerations with should follow to achieve a modularity awareness: Consistent, Resilient, Unambiguous, Simple and Tiny (CRUST).

This requirements apply to **any** layer of a system we are crafting(package, file, function), and the idea is that if we follow this principles we'll come up with a *modular* design. I found this points very important, a little bit obvious but really neccessary to explicit. Most of the time we are aware of this points but we don't know at which level. It's a good exercise to ask yourself frequently how in line with this concepts our modules are.

## Consistency

If something is consistency at some extends it means that is compatible and follow the same shape than the rest of the system. In the terms of our API that means that we should guarantee we follow the same guidelines at the time to decide the name, parameters, default, etc that compounds our API.

> When we follow a consistent API our consumers are going to start indentifying the patterns and It will get easier with time to start using the system.

As a counterpart, if every API is completely different, every time you need to use an API you'll need to rely on documentation and therefore spend extra time to understand its new ways. This can be time consuming not only at the time of using it but also when creating a new API because it means you'll have to decide everything once again.

When our system grows on complexity, we'll create layers that will serve certain purpose for our application, is ideal to implement all the modules uniformly so its really easy to differentiate when an API is part of that layer because it follows the same API shape than the rest of the parts of that same layer.


## Resiliency

When things are not used in the way we expect, issues start arising. Depending how much we have invested on preventing those "off the box" scenarios we are going to be able to deliver a better quality module. This means we need to consider the inputs the user could entry to our API. In the case our API breaks with the slightly change on the type/length of the input. We should add some validations not only to support a predictable behaviour but mostly to help the user troubleshoot any issue that might be done by mistake.

Nico also give a tip on avoid having more than 4/5 parameters on a function and consider converting to an object with options.

Although I admit I've done this and is pretty handy for several reasons. I would say the ammount of parameters its a clear signal that your function is doing more than one thing. It might be time to consider splitting the function in different variations.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
