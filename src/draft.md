---
title: 'Mastering Modular Javascript: Chapter 2 - Part 1/2'
date: '30-09-2018'
---

# Mastering Modular Javascript - Modularity Principles

## Design Essentials.

The book approach first defining what complexity is. I am align with the definition of complexity that it gives. translated to my own terms, _Hard to Understand_ at any level.
So the approach to follow is the following. if it is too big, modularize, things will be smaller, thus less complex. And It seems quite correct...

As I see complexity, It depends on the audience. I'm pretty sure what is hard to understand for me, is not that it would apply to everyone and viceversa.

Complexity is an spectrum that sometimes we quickly tend to prejudice. But Fair enough, we as developers, a lot of times, try to come up with very _interestings_ and _probably_ smarters solutions than we need on the first place. And when we do it. We are really proud of it! And that is fine, but don't try to be smarter than you need. I'm sure you will forget how smarter you were in the following week and now, not only you, but all your nice friends that read your code will be remembering you, and not in the nicest way.

Going back to modularity principles...Divide and conquer! That is basically it. But remember, every time you divide, should and must be logically picked. You don't want to end up with a puzzle. The idea of dividing is to understand the whole picture and make changes with ease in the future.

Nicolas makes the focus in the API, and that is super cool. Everytime you divide, you need to create the interfaces accordingly and that is time consuming.

### Single responsability principle (SRP)

I don't want to give my opinion on SRP. You are a [google](https://www.google.nl/search?q=single+responsibility+principle) search away from the real truth of it own creator. Modules should attain to the SRP principle. for me, this is an art. Depending on how you phrase a responsability your module could be an upper success or a random division. Sometimes, I found useful to write a coloquial definition of the responsability of modules when is not totally clear why did I decided to split it on the first place.

One tip that the book gives, keep the API consisten across different modules. This makes totally sense. I encourage you to follow it, If there are already similar modules, stick to the familiar APIs. As long as It make sense! Every new developer want to demonstrate how great their opinions are and propose a better API, that is super nice! And also plan the change for the rest of the projects so everyone can benefit from it.

### API first

A great interface means that we can always, replace poor implementation details. Keeping the Interface as small and possible and striving to have it as clean as possible will guarantee that you won't mess up with someones feelings (brain damage :P), and that for sure he/she won't need to check our ugly implementation details to understand what is going on.

Keeping public only the bare minimum is possible. Try using [private methods and properties](https://blog.z3ro.com.ar/005-js-private-properties/).

### Finding the right abstraction

We are probably not going to create the right API on the first place! So, dont worry. Start with just exposing what is currently obvious and let everything else be private. When is public, there is no way back. (There always is, just really try not to publish everything).

### State management

> We shall think of state as our internal's program entrophy.

Mmmm... Idk Rick, looks fake! Is true that the state of our program get out of hands pretty quickly. But state is useful so keep it minimal and we'll be fine.

This in the other hand is real:

> Modularity takes aim at this issue by chopping a state tree into manageable bits and pieces, where each branch of the tree deals with a particular subset of the state. This approach enables us to contain the growing application state as our codebase grows in size.

Now, it kind of make sense why pure functions are more deterministics, thus "easier".
