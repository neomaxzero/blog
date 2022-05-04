---
title: 'Migration Logs: Choosing the stack'
subtitle: 'Again'
date: '2022-05-04'
topic: 'migration'
tags: ['dev thoughts', 'blog', 'migration-blog']
description: 'Choosing the stack is not easy.'
language: 'en'
---

Choosing the stack for a new project can be something fun and at the same time can be tedious. The best solution is many times the one that solves the problem in the least amount of time with the least amount of resources (including energy). If I also follow that approach I'd be choosing a service that solves already my problem. Throw a little bit of money to the problem and that's it.

My problem is not a technological one, it's a personal one. I'm in the process of choosing a stack not because I need to, but more because I want to. We are here... I'm choosing to deal with yet another round of re-inventing the wheel.

## Options

The sky is the universe some people would say. The closest to the sky that we have today is Github and with that infinite amount of solutions to this "problem". Building a blog has been done maybe more times than any other thing. Because I wanted to keep it a little bit scoped I decided to go with some technologies I'm familiar with. The first things to know is that a blog needs to be Server-side rendered which means the options are:
- Next.JS
- Remix
- Nuxt
- PHP + Client side library
- Node.JS  + Client side library


## Decision

In the last 2 years that I had my blog I didn't write as much as I could and the honest truth is that having so much "frontend" power without doing any use of it left me with a sour taste. I had big dreams with posts being applications on itself and leveraging from React to provide rich interactions. That didn't happen and It's not going to happen soon. I need to focus my attention on writing itself first and explore further mechanisms when words are a real limitation. 

For this reason, I'm going to focus on delivering a fast experience and avoid going with a stack that I know it's going to be too heavy and unneccesary for the things I'm going to do.

I know some javascript so I decided to render my pages server side with Node.JS. If I need some Javascript I'm gonna use my own library [Cumbia](https://github.com/neomaxzero/cumbia) and see if that's enough! I can always add react SSR if I need to in the future or client side if that's the case. For now...EJS templates with cumbia for the frontend should do the job.


