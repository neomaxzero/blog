---
title: 'mastering modular javascript: chapter 6 - final'
subtitle: 'part II'
date: '2019-03-28'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 6 - 2/3.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-06.md)

**Disclaimer**
*This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights.*

## Modular Development methodology and philosophy: Interfaces as black boxes

When we write unit testing for our components, we should assume dependencies of the unit we are testing are also tested. And we shouldn't test responsability that is out of our unit. This is one of the things that it is how is supposed to be. In real life, a lot of third party modules that we use are not exactly 100% accurate. Use your criteria and take a peak into the testing structure of the module we are using. Depending if the module we are testing is core to the system is being used on we'll rather take a different approach than *unit testing*.

Although most of the time we have plenty of resources (CPU, RAM, GPU) to use in the browser. Its still limited and shared across all different processes. The footprint our application has should be as minimal as possible, that is why we should strive to keap our house clean in terms of event handlers, connections, etc. Every time you claim a resource, make sure to dispose after you make use of it.

Something non related to black boxes but very useful that Nicolas give is to keep all the business logical in the same folder, this will help on the managing complexity when more use cases are added to our codebase.

Especially in front end applications and the componetization process, we tend to spread our logic across the entire system, and this result on having core business logic shared across several components. When there is no clear structure on where the business logic should be, this creates confusion and give developers free will of placing logic whereever they want to.

> *View rendering logic should be separated from business logic.*

In hindsight, this last paragraph is a little bit off topic and I should create a dedicated blog post about business logic in the frontend.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
