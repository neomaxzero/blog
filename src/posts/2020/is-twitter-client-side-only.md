---
title: 'is Twitter only client-side-rendered?'
subtitle: 'SEO is drunk, I dont understand.'
date: '2020-07-15'
topic: 'dev-blog'
tags: ['seo', 'dev thoughts']
description: 'Is twitter a client-side only app? if then how do they do SEO?'
language: 'en'
featuredImage: ''
---

The other day I was discussing with my friend what could we do to give a glance to the community without being authenticated.

At [pugmark](https://pugmark.io?ref=blog-m4x) every route after you authenticate is client side rendered. This means that we send a minimal version of the HTML that then the browser downloads and process to create the DOM on the fly.

The main advantage with this approach is that you don't need to process anything on the server and you can host your site on any bucket service (S3, Netlify, Vercel, Github).

A couple of problems become very evident at the beginning:

- What if I have 300 endpoints where the user needs to request the rest of the data?
- How does it work with SEO?

## How does it work with SEO?

That's a question I asked myself after I went to twitter and I saw their logo popping on the middle of the screen.

After I checked the HTML the browser was sending, I saw a streamlined version client-side rendered app.

When you see the network response you even have a `200` status code response which means that they are checking somewhere if that route exists, and then send the single page application.

They also needed to create a `sitemap.xml` with this client-side rendered version, unless they serve a different page for google bots.

## I want this

I would like to have an easy way to create a sitemap.xml from client side rendered routes. I'll keep investigating this.

## Problems I need to solve

- For client side routes Gatsby sends a 404 status code page and then return the index.html which take care of the routing. This is probably bad for google.
- I'm not the first one having these issues so I'll share my findings here.
