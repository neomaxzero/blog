---
title: 'UI Performance Metrics: Time to Interactive vs Dom Interactive'
subtitle: 'TTI vs DOM Interactive'
date: '2020-12-11'
topic: 'Performance'
tags: ['performance']
description: 'We might have different ideas about what that means and certanly that is the case between time to interactive and dom Interactive'
language: 'en'
hideImgTitle: false
---

Implying "Interactivity" in the naming can be problematic. We might have different ideas about what that means and certainly that is the case between time to interactive and dom Interactive.

These two metrics try to give you an indication of how much time you need to wait until a page it's interactive, the main difference is that depending on the characteristics of your page the accuracy of each metric will defer.

## The main difference

**[Time to interactive](/2020/ui-performance-metrics-what-is-time-to-interactive/)** always waits until your main thread is almost idle and because of that reason always comes later than Dom interactive. Time to interactive is an approximation type of metric and can defer based on its implementation.

**Dom interactive** indicates a specific moment in which _the browser has finished parsing the DOM_ with all its inline resources. Assuming that everything critical has been processed a user might be able to start clicking around but this could be far from the truth.

Imagine that we forgot to add a JS file that is attaching events listener to a critical element above the fold. Then DOM interactive would not be a good indicator of interactivity. _DOM interactive_ would indicate that the page loaded at X time, but you'll click that critical element immediately after and, it won't work.

In other cases where your JS is fairly minimal and you have third-party libraries to for example load banners. Time to interactive will probably be more of a reflection of how long people wait for ads rather than other critical elements.

## Lab vs Field

### Time to Interactive: Lab Metric

It's good to mention that **Time to interactive** is a metric that can only be collected by running a synthetic test because of how it's measured. You need to explicitly run a performance audit to collect it in the browser and it is not a metric you can get from your real users' browser.

### DOM Interactive: Field Metric

There are some metrics that the browser collects fairly straight forward because of its nature. DOM interactive represents a specific event from the browser that is easily collectible from your page. That is why we have it present in the `performance.timing` browser API object. We can get that metric from our real users and send it to a centralized place to later analyze it.

## Conclusion

Time-to-interactive and DOM interactive are different metrics. Depending on your use case you might want Time to interactive. Do you want to analyze what your real users are experiencing? Then go with DOM interactive. Maybe you need both. The best way to know is to measure and see which metric gives you the information you need.
