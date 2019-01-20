---
title: 'mastering modular javascript: chapter 1'
subtitle: 'part II'
date: '2019-01-20'
topic: 'book review'
---

# Let's review: Mastering Modular Javascript - Chapter 1 - 2/2.

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-01.md)

It's been a while since the last time I write the review of the first part of the [chapter I](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-01.md). I've just read it, 10 mins ago and I can say **it sucks**. It does makes sense to me although. The idea is not to write about how I struggle to come up with digested content of the book, its to have something useful for me and hopefully for you.

So let's continue digging the second part of this chapter.

## The Perks of Modular Design

Modular design has its own pros and cons, but the book of course concentrate more on the goods because, well, you have to become a _master_ on it.

- When a module is small and decouple, a.k.a. modular, the ammount of code you have to see at each time decrease it.

  - Code is simpler.
  - Complex behaviour can still be represented by combining small modules.

- Manteanibility increase. (highly mantainable by default).
- Testing becomes way easier.
- If API first is always considered, adding complexity to the module becomes less of hard job.
- When adding a new use case to your module, always bare in mind that **flexibility always comes at the cost of added complexity**.

> Interfaces are always the primary citizen, and we get constant reminders of how important is to keep it minimal / sufficient / consistent.

The most important part of a module is its _Interface_ and it should be treat it like such.

## Modular Granularity

Although the book doesn't actually explains what is modular granularity but mostly try to give right away insights design an implementation considerations. I was trying to connect all the tips/facts/quotes that I found it more relevant to this concept. First of all I ask my self, *What is Modular granularity ?*.

My friends, I think we all have an idea, or we can easily try to define it. I will also take my shot here. 

> Modular granularity is a "property" that describe how granular a module is. 

Granular has not only to be seen from the point of view of size, but also complexity.

According to the book, we have to make our modules granular enough. The "why's" are very well explained in the paragraph of the book but I'll leave here my top selection:

- The key to proper modular design is in having an utmost respect for all interfaces, and that includes the interfaces exposed by internal functions.

- When we don’t plan in such a long-term form, an interesting thing occurs: our systems grow more naturally.

- Bad abstractions force us to bend entire applications to their will, and once we’ve realized that the abstraction is bad and ought to be removed, we might be so heavily invested in it that pulling out might be costly.

For me, until today, how granular a module has to be depends on your experience and knowledge about the system you are building.

I feel like granularity is not to be spotted right from the first time. As your system is evolving, new requirements will come to you and you'll have to decide wether is worth to modify your modules and attach that complexity to one of those or create a new module where that new feature should live. Either way, there is **always** a trade off. 

If you make your modules way too granular, you'll end up with a bunch of one-line functions that are so granular that basically you are creating a layer of indirection for every little peace of code. (going to the extreme)

We all know what happen when a module is big. Is really hard to read, you feel like you are reading a book instead of code.

Modular granularity is hard, the book does not say the contrary and my personal opinion is,

**keep the size of your modules manageable, not only for you, but also for your teammates**. 

Coding is a shared effort, and smaller modules should be on the benefit of the whole team.

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
