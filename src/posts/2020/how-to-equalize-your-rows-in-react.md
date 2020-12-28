---
title: 'How to equalize your rows in react'
subtitle: 'react-equalize'
date: '2020-03-28'
topic: 'react'
tags: ['react', 'open source']
description: 'react-equalize: How to Equalize the height of your elements in your page'
language: 'en'
featureImage: ''
---

As frontenders, sometimes when we are building grids we run into a very annoying but common issue, **Unalignment**. When the items of a grid are not aligned correctly it is time for trouble.

As human beings we are very good at detecting these irregularities. An issue like this immediately jumps into our attention.

The problem is easier to grasp with an image so let me show you in a glance what we are talking about.

![react equalize problem description image](https://raw.githubusercontent.com/neomaxzero/react-equalize/master/assets/explanation-problem.png)

I hope that the problem is now more clear. I was looking into any library that would help me on my quest since I'm working in react but no luck.

In vanilla javascript I have done this a bunch of times already but it was gonna be the first time I do this in React.

I've created a very small library to solve this and I hope you'll find it useful.

<a href="https://github.com/neomaxzero/react-equalize" target="_blank">
    <p align="center">
        <img src="https://github.com/neomaxzero/react-equalize/blob/master/assets/react-equalize.png?raw=true" alt="react-equalize"  style="width: 250px; padding-top: 16px"/>
    </p>
</a>

## How it works?

First you need to specify what's going to be the grid or element you want this component to act on.

This wrapper container will keep track of the position of the elements you want to equalize the height.

Secondly, with the _Equalize_ component you'll have to wrap the components you want to have on the same line.

**Equalize will get the height of all the elements that are on the same line and will apply the correct height to it**.

I found this solution worked out quite well at the beginning but then I realized there was one small issue.

If the elements of the lists changed it, the state of the heights needed to be reset. To do this, I added a prop to the container to which you can send an array that would trigger a re-render of the layout.

Problem solved!

Let me know what you think, maybe you also have a use case I can support. I'm more than happy to help!

You can check out the library here: [React-equalize](https://github.com/neomaxzero/react-equalize)
