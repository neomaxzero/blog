---
title: 'mastering modular javascript: chapter 3'
subtitle: 'part III'
date: '2019-02-09'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 3 - 3/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-03.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

# Module Design

On the second part we mentioned that a module will grow and with that we need to make decitions on where we should allow that to happen. When we start getting a better feeling of how things should go, the next step is to take actions and starting stripping functionality out of component.

## Pruning a module

### Error handling, mitigation, detection and solving.

When working on a component we'll encounter errors and issues we need to fix. This is very likely to happen really often. The root cause of errors can be something very difficult to track depending on how complex our module is. This is another main reason why we should keep our modules small and "predictable". On top of that, having tests will help your module grow up naturally without you having to keep track of all the features implemented. There is plenty of documentation about testing and how beneficial they are. (probably I'll write a post about it).

Error handling is something sooner or later you are going to handle inside of your module, when you allow a large variety of inputs, you'll need to also treat all the edge cases that will arise because of it.

In my experience, there are three sources that can affect the behaviour of your module.

1. Inputs received through your API.
2. Inputs received from third-party services that our module interact with.
3. Global environment variables that our module rely on to be there.

Make sure to verify the types of your inputs (or use a Type system) received from your API. When you have a subset of parameters that are dependent on each other, make sure to group it so the use can immediately tell what fields are intended to be used together.

If our module call an external service, don't ever trust the input from that types of sources. Is **very very** likely that a call will fail and throw an error. Make sure to isolate the error and decide how is going to be the flow of errors from your module to the consumer.

The error message should be very specific and, _always_ if possible send the stack of your error to the consumer.

In the case of global variables, make sure to state in your documentation what environmental variables need to be set for your module to operate. I'm not quite fan of default environmental variables but this will also change from use case to use case.

> It's a **really really** good practice when creating a module, to do a document first approach. So you always are in sync with your API implementation.

Doing the latest _is not easy...bro! :D_

If we follow a good structure while adding features to our module, it should be very straight forward to remove code when we face the time some feature should be removed. If your company does A/B testing is very important to think about how to revert A or B code. The footprint at removing a feature that was decided to take out should be 0.

Believe me, you don't want to maintain or even read code that you think is doing something and at the end no one was using it.
