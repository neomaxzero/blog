---
title: 'UI Performance Metrics: What is Time to Interactive?'
subtitle: 'TTI'
date: '2020-12-06'
topic: 'Performance'
description: 'The list of metrics the browser provides is longer than what I thought and hopefully I can summarise in here what they represent. TLDR; Web-core-vitals.'
language: 'en'
hideImgTitle: false
---

> Time to interactive measures when your website is ready to receive an input.

To determine this "ready" state the browser neeeds to meet three conditions:

- First contentful paint is done.
- Events handlers for all elements above the fold were attached.
- The longest task takes less than 50ms to process.

Because Time to interactive is not a standardise metrics normally all the articles and definitions point towards the one google made which is based on the WICG definition.

At the beginning because of the similarity in its naming I thought **time to interactive** was the same as the **dom interactive** metric but I was wrong.

The definition of interactivity we use in time to interactive is a combination of two assumptions that together define the moment in which the browser will be prepared to react to user input and have an acceptable performance:

1.  The network has not more than 2 requests in a 5 seconds window.
2.  The longest task takes less than 50ms in the main thread.

Something to note is that although interactivity might make us think we have to "interact" with a page. The method used does not include any user interaction and it's more of an approximation of at what moment we think the browser will be "interactive".

## Time to interaction takeaways

- Time-to-interactive gives an ok indication of when your page is "ready".
- Trying to measure interactivity without anyone interacting it's a little bit controversial.
- Depending on the type of app it can also mislead that your page is slow when it's ready to your audience.

## Reference

- [WICG definition](https://github.com/WICG/time-to-interactive#definition)
