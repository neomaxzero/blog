---
title: 'UI Performance Metrics: Time to Interactive vs First Input Delay'
subtitle: 'TTI vs FID'
date: '2020-12-27'
topic: 'Performance'
description: 'TTI and FID are both good candidates to measure interactive. One is better than the other depending on the situation.'
language: 'en'
hideImgTitle: false
---

Whenever it comes to measure interactivity there are a couple of metrics that stand out. Time to interactive feels like the right choice because...It's in its name. On the other hand, First input delay gives you the delay after your user interacts with an element. That sounds like measuring interactivity as well. So, what are the differences? Which one is better?

## Establishing a common ground: Interactivity

While doing a high-level comparison of two things without specifying what matter can always benefit one metric over the other and in this case, I think I'd like to reflect on why I think they are both very valid depending on your goal. **Interactivity **will be the central point of this comparison: How reactive is your site to user input?

## The main difference: Measurement characteristics.

[Time to interactive measures how much it takes to get to a "ready-to-receive" input state](https://blog.m4x.io/2020/ui-performance-metrics-what-is-time-to-interactive/). To calculate this it requires a specific process that is not suitable to do it "on-the-fly" without compromising user-experience. That's why we measure this with lighthouse in a controlled environment (Lab).

First Input delay requires user input. To be able to do this, we have to measure it with real users. Fortunately, we can easily do that in the browser. It might seem fair to say that waiting for an input to measure interactivity seems closer to reflect reality, but that is not true.

Having a user-dependency is a positive feature. Ultimately, we are interested in measuring interactivity for the user. It's also negative because depending on the characteristics of a page, your user could be reading for a couple of minutes and then close the tab.

## Similarities

### Reduce long tasks

Both metrics aim to reduce the number of long tasks monopolizing the main thread and because of that decreasing the likelihood of processing user inputs. When we have a lot of long tasks the page will feel less interactive because that would reduce the feedback loop with the user and harm the experience.

### Event handling

With both TTI and FID we don't know how long it takes to handle events after the interaction and what we present to the user. It could be that we have an event listener that does a very costly computational operation and don't show a spinner. The experience would be horrible but still, the metric wouldn't cover that.

### Correlation

There is a high correlation between Time to interactive and first input delay. This means that there is a very high chance of improving both metrics when we focus on one.

## References

- [Correlation first input delay vs Time to interactive.](https://docs.google.com/document/d/1g0J5JIcICFyXYM6ifBF6vNd_qUPIfpf6YAfFHE1TYRE/edit#)

## Conclusion

Interaction can be more Sutil. **Content** can be the primary communication tool and depending on your product, optimizing FID over TTI could not be the right decision. The metrics show you a different part of the picture and although first input delay is closer to the user, time to interactive is a more stable, reliable metric to optimize with less noise because it does not depend on user behavior or devices.
