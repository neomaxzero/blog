---
title: 'First Contentful Paint vs  First Meaningful Paint vs Largest Contentful Paint'
subtitle: 'FCP vs FMP vs LCP'
date: '2020-12-31'
topic: 'Performance'
tags: ['performance']
description: ''
hideImgTitle: false
---

> TLDR: On most cases, go for Largest Contenful Paint.

FCP, FMP, LCP? What?

First contentful paint measures the time when the first visual dom element is painted on the canvas. First meaningful paint is the moment when "important" content is painted on the screen. Largest contentful paint measures the time at which the largest element above the fold is rendered.

## Why do we measure FCP, FMP, LCP?

All of them **give an indication of when the browser painted information on the page**. The closer it is to what the user wants to see the better the experience we can provide an optimise for.

## Main difference: Subject Element

The main difference between these three metrics is which is the main element measured.

- First contentful paint (FCP) is the most straight forward metric: At what time was the **first dom element being painted**. It doesn't matter if the element is below the fold or if it is a small logo.
- First meaningful paint (FMP) is quite a complicated metric and it depends on the heuristic selected by the browser. It measures how visually complete the page is. That means there are **multiple elements measured** at the same time.
- Largest contentful paint(LCP) it's an attempt to simplify the way the most important part of the page is rendered. The simplest way to do that is by taking **the biggest element in size above the fold**: image, video or text. This metric is part of the web core vitals.

## Isn't largest contentful paint the same as meaningful paint?

No. These are very different metrics in that they use different methods to estimate completion and relevancy. It is known that the bigger element of the page is the one we consider the most important when deciding if a page is loaded or not.

## Why to even consider first contenful paint?

First contentful paint it's useful. On single page applications measures at what moment do you see the loader. You know at which time users have its first feedback that the web app is loading.

On server side rendered apps gives at what time and which is the first thing the users sees. If you have a blog and the main content of the article is the one you intend to show it might be more relavant for the metric to show that instead of a banner/header or whatever the biggest element might be.

## References

- [Time to First Meaningful Paint: a layout-based approach](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view)

## Conclusion

FCP, FMP, LCP they all sound very similar but there is a sutil difference between them. From the first element render to the most prominent one, depending on the anatomy of your page one might suit you better. If in doubt, go for the Largest contentful paint and see if the element and number makes sense to you.
