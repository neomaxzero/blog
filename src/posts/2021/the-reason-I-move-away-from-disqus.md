---
title: The Reason I Move Away From Disqus
subtitle: 'Disqus revert'
date: '2021-01-06'
topic: 'comments'
tags: ['disqus', 'comments', 'dev thoughts']
description: 'Adding comments to your blog or web app is a fairly common task. You should know that the cost of including an external service like Disqus could be high.'
language: 'en'
hideImgTitle: false
---

> TLDR; Performance

Adding comments to your blog or web app is a fairly common task. You should know that the cost of including an external service like Disqus could be high.

While doing some investigation of the things that were affecting the performance of my blog, Disqus was one of the main reasons why my metrics were so inconsistent and lower than the "optimal" level suggested by the lighthouse score.

## The Origin of the problem: Let's go 100.

Whenever I don't feel like writing an article for my blog I start wondering how I can improve the platform. **Performance** is something I enjoy optimizing and that day I decided to start the tweaking cycle. My default tool is the chrome [lighthouse dev tool](https://developers.google.com/web/tools/lighthouse#devtools) as a starting point and also [WebPageTest](https://www.webpagetest.org/result/210104_DiHF_3e32446327018a163521210931ac364a/). Lighthouse is an amazing tool that simplifies the process of diagnosis and sometimes the hints are really useful and WebPageTest it's also a great source of information.

The performance metric from the lighthouse audit was far from 100 and I was aiming for the perfect score. So, I ran the performance audits from WebPageTest and lighthouse to see what was going on.

In the waterfall view of all the resources being requested by the page, I saw that **Disqus** on average was taking **~500ms for TTFB and ~450ms extra to process**. Blocking the main thread for that long affects your metrics related to interactivity. I found that very annoying so to verify the real impact I made a version of the site without the comment box and push it to production. The results were immediate, all the metrics went green. (I should have saved more screenshots). I was convinced now that this third party library was severely taxing my site.

## Checking alternatives

Since I only had a few comments on a couple of articles I believed It was a good moment to check alternatives to Disqus. There was always the option to not have comments at all but I still wanted to have that feature. Furthermore, the migration of comments was not something I was really worried about. In the process, I found there is a [nice guide for gatsby](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-comments/) that includes many great alternatives.

One of the libraries I found most interested and suited my needs was [Utterances](https://utteranc.es/). It saves comments as Github issues. That means it's public, aim for developers and performant (?).

It was very straightforward to include this library in my blog. After pushing these new changes to production I saw these new metrics for the utterance: **~200ms TTFB and ~20ms to process**, with the addition that there's an extra call to the GitHub issues API that takes **~250ms**.

The answer was conclusive: **Utterance** was significantly faster and I was happy with it.

## Conclusion

Disqus it's an exhaustive solution for including comments to your site but sometimes it's maybe too much for what you need. There are a few lighter alternatives that you can use that won't hurt performance as much.
