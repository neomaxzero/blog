---
title: 'Overview UI Performance Metrics: A Curated List'
subtitle: 'A curated list'
date: '2020-11-22'
topic: 'Performance'
description: 'The list of metrics the browser provides is longer than what I thought and hopefully I can summarise in here what they represent. TLDR; Web-core-vitals.'
language: 'en'
featuredImage: 'performance-ui-metrics-list.png'
hideImgTitle: false
---

Your site is slow and you want to make it faster. You go out there and start gathering a list of available UI metrics that could help you in this endeavor. A few moments later you are overwhelm. The list of metrics the browser provides is longer than what you thought. I've been there and because of that I've made this cheatsheet to summarise what they represent.

## The basic performance metrics

I call these metrics basics because the majority are events the browser dispatch at specific moments while loading/rendering a page. A few can be also considered more of a representation of how the user will perceive how fast (or slow) your site is.

- **Time to first byte (TTFB)**: Time it takes to the browser to receive the first byte of a page.
- **First paint:** When the first pixel is painted onto the screen.
- **First contentful paint:** When the first content element from the DOM is painted.
- **DOM interactive:** DOM is completely process. (HTML is parsed, Exclude sub-resources).
- **DOM content loaded:** CSS-Object model is done and blocking scripts and styles are done.
- **Speed Index:** Measures how quickly content is visually displayed during page load. Captures a video of the page loading in the browser and computes the visual progression between frames.
- **[Time to Interactive](/2020/ui-performance-metrics-what-is-time-to-interactive/):** When the longest task takes less than 50ms to process. Interacting with the page will feel responsive at this point.
- **DOM Complete:** It's done! The page has been processed. No spinner anymore.
- **Page load:** Time it takes to execute the "load" event handler. Triggered after dom complete.

## The user-centric performance metrics. (Lighthouse Score)

These metrics measure the perceived performance of your page. They were popularized by Google to make it easier to measure and compare performance among other web sites.

- **First contentful paint.**
- **Speed Index.**
- **Largest Contentful Paint.**
- **[Time to Interactive](/2020/ui-performance-metrics-what-is-time-to-interactive/).**
- **Total Blocking Time.**
- **Cumulative Layout Shift**

## Web core vitals.

Subset of metrics that simplify the process of what metrics to choose. Every year what is considered to be good performance is subject to change.

- **Largest Contentful Paint:** When the largest element in the viewport is rendered.
- **First Input delay**: How long it takes to your page to execute the first input.
- **Cumulative Layout Shift:** How much your page shakes while loading. Sum total of all individual layout shift.

## Deprecated performance metrics

- **First CPU idle:** Measure when the page is ready for user input (Use Time-to-Interactive. or Total-blocking-time)
- **First meaningful paint**: Measures when the primary content of a page is visible to the user. (Use Largest contenful paint)
- **Visually complete**: Is the point when the visible part of the page first reached 100% "completeness" compared to the end state of the test.

## How to decide which metrics to use?

The community is inclining towards the **web-core-vitals** but depending on your situation you might find more insights on other metrics that will also affect the user experience.

## Extra resources

- **[Time-to-interactive vs DOM Interactive](/2020/ui-performance-metrics-tti-vs-domInteractive/)**
- **[Time-to-interactive vs First Input Delay](/2020/ui-performance-metrics-tti-vs-fid/)**

## Conclusion

The UI performance metrics are constantly evolving and is not easy to interpret what all of those acronims mean. If you are doubtful about which metrics to choose go for the **web-core-vitals** and keep exploring. On the process you are very likely to find other metrics that will help you achieve your targets.
