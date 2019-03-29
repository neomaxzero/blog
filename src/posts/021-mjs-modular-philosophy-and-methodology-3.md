---
title: '[WIP] - mastering modular javascript: chapter 6 - final'
subtitle: 'part III'
date: '2019-03-29'
topic: 'book review'
---

# [WIP] - Let's review: Mastering Modular Javascript - Chapter 6 - 3/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-06.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

## Modular Development methodology and philosophy: Build, release, run

When we have variables outside of the system, such as `environment variables` and we are using this to change the execution path of our application. We should make sure we test this funcionality separetely. Although this could be avoided sometimes, relying on the environment can be particularly useful when we want extra logging information or special features like a feature toggle, etc.

Even if there are only a bunch of users making use of some internal feature on an specific environment, having the habit of carefully planning what is going to be covered or not is always a something good to do.

### Parity in development and production

We know that between development and production should be an small difference gap over configuration and mainly resources. When our artifact is passing trough stages each environment is more similar to production. The difference between development and production should be minimal. Not only on configuration level, also in infrastructure. And the later is incredible difficult because most of the time production is a monster. 

Don't solve problems that don't exists yet. There are plenty of reasons why development is not as powerful as production. When something become evident enough to be considered as a pain point. We should not act upon before the signals are clear.

> *View rendering logic should be separated from business logic.*

In hindsight, this last paragraph is a little bit off topic and I should create a dedicated blog post about business logic in the frontend.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
