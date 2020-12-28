---
title: 'Lets review: Mastering Modular Javascript - Chapter 2 - 2/2.'
subtitle: 'part 2'
date: '2019-02-02'
topic: 'book review'
tags: ['book review', 'mastering modular javascript']
---

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-02.md)

**\*Disclaimer**
This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.\*

The first part gave you the essentials to modularity, in this part I'm going to complement this concepts with a set of new considerations with should follow to achieve a modularity awareness: Consistent, Resilient, Unambiguous, Simple and Tiny (CRUST).

This requirements apply to **any** layer of a system we are crafting(package, file, function), and the idea is that if we follow this principles we'll come up with a _modular_ design. I found this points very important, a little bit obvious but really neccessary to explicit. Most of the time we are aware of this points but we don't know at which level. It's a good exercise to ask yourself frequently how in line with this concepts our modules are.

## Consistency

If something is consistency at some extends it means that is compatible and follow the same shape than the rest of the system. In the terms of our API that means that we should guarantee we follow the same guidelines at the time of deciding the name, parameters, defaults, etc that compounds our API.

> When we follow a consistent API our consumers are going to start indentifying the patterns and It will get easier with time to start using the system.

As a counterpart, if every API is completely different, every time you need to use an API you'll need to rely on documentation and therefore spend extra time to understand its new ways. This can be time consuming not only at the time of using it but also when creating a new API because it means you'll have to decide everything once again.

When our system grows on complexity, we'll create layers that will serve certain purpose for our application, is ideal to implement all the modules uniformly so its really easy to differentiate when an API is part of that layer because it follows the same API shape than the rest of the parts of that same layer.

## Resiliency

When things are not used in the way we expect, issues start arising. Depending on how much we have invested on preventing those "off the box" scenarios we are going to deliver a better quality module. This means we need to consider the inputs the user could entry to our API. In the case our API breaks with a slightly variance on the type/length of the input, we should add some validations not only to support a predictable behaviour but mostly to help the user troubleshoot any issue that might be provoked by mistake.

Nico also give the tip of avoid having more than 4 parameters on a function and consider converting to an object with options.

Although I admit I've done this and is pretty handy for several reasons. I would say the ammount of parameters its a clear signal that your function is doing more than one thing. When this happens it might be time to consider splitting the function.

## Unambiguity

This concept is very much related to uniformity, with unambiguity, we aim to have a consistent output at the time our module is executed. The difference between this consistency and the one explained above rely on that now we are evaluating it from the perspective of the artifact produced. If the shape of the output is consistent for successful use cases (no errors) it's going to be very easy for the consumer to handle the result of our module, furthermore is going to be alike or exactly the same as any other successful case from our API. When for example we need to throw an error from our API, there is no need to have the same shape as the successful scenario yet has to be equal to any other error shape throw by our module.

## Simplicity

One way of hiding complexity is keeping our API simple. In general, when we are referring to a simple API, we mean that using it was from trivial to no effort involved. For that to happen the user who is not familiar with the API need to provide minimal information to be able to use it. To achieve that the module can decide things for the consumer. When doing that we are defining defaults for our module. It's fine to have defaults, are useful but can also be detrimental for the developer experience. Carefully consider the naming of the defaults because negative defaults can be cumbersome to work with. Also, defaults help with discoverability of our API surface. The developer doesn't need to know the entire shape of an API beforehand. Along the same line, we should add extensibility points so the user also has the flexibility to override those defaults if necessary.

Every time we add an extensibility point is extra complexity to handle inside our module. Take your time and let real use cases grow your API surface before doing every little thing extensible.

## Tiny Surface area

So, this should be very easy to understand, small API shape, small modules. While writing these lines, I'm laughing because is not easy at all! The idea here is to keep small APIs and aim to solve the underlying problem. Sometimes we append several slightly different solutions to a problem in a single API. We can split that API into several variations and then we will have repetitive code to maintain (that is always an option). Another option is finding the common problem between several APIs, and extract that on a different core API level and then build a layer on top of that with tiny APIs.
