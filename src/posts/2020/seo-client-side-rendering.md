---
title: 'A few words on SEO for client-side rendering apps'
subtitle: 'How does SEO work with Single page applications?'
date: '2020-07-16'
topic: 'dev-blog'
description: 'How does SEO work with Single page applications?'
language: 'en'
featuredImage: ''
---

# A few words on SEO for client-side rendering apps

SEO and server-side rendering (SSR) work well together. Every search engine started by optimizing this technique.

In the beginning, JS was used to enhance our pages and improve the experience for the end-user but that changed.

We went full JS rockstar mode and we pushed it to the extreme. We went from adding a layer of dynamism to the HTML/CSS to using JS to create HTML/CSS in the browser in real-time while downloading the resources.

Browsers became monsters. 😋

**We move the rendering process from the server to the client.** We did this because ... (I'm not gonna enter this area in this post). The result of that: A gazillion UI frameworks started to emerge.

## What makes it so different from client-side rendering?

With frameworks like Angular, React, Vue. We serve an almost empty HTML with a few references to some 2MB JS files which do all the magic.

That turns the SEO process to looks as follow:

- Browser: GET https://pugmark.io/dashboard
- Server: Send 1Kb of HTML.
- Browser: GET `bundle.js(2MB)`
- Browser x100: GET `endpoints A-Z / css / moar JS`
- Server x100: Send all the resources.

We can immediately see how much more work the browser needs to do. The server can go without any template renderer, serve a static file and you can have dynamic pages without many costs on the server-side.

**But there are still costs, and those are being transferred to the browser, to the client. 😉**

What's with SEO then? A search engine is mimicking a user, if it wants to crawl the content of the page it needs to wait, and sometimes a lot, to see the final content.

This bring some major implications for SEO. People at google are smart and the google-bot is good enough to do this.

But that is not free.

## What's the impact?

To deal with this, Google introduced a [rendering queue](https://developers.google.com/search/docs/guides/javascript-seo-basics). If your page is SSR google can make a request to that page, crawl the HTML and eventually show on the web results page. This works and I read almost no-one has any problems with google understanding their pages.

If your page is client-side rendered then you are queued. Google needs a rendering engine that understand JS and execute the heavy lifting process of your framework before it can crawl the dynamically generated HTML.

This is very expensive for our fellow google-bot: Energy and, by that we mean, Money.

It can take from hours to weeks to be picked up from the queue. You need to compete with the same resources that are used by sites that probably have a lot more SEO authority than you and we don't really know when this is going to happen.

You also don't have guarantees that the crawler is gonna visit your site. There are many examples of client-side rendered apps that are dropped for some reason and never ended up in the search results.

Having a longer time to market is not something you should take lightly. It can change some business decisions and could be one of the key factors for your application.

## Should I go fully SSR?

SSR/CSR it's like a knob. You might not need your site to be available in search engines. SEO is only one of the considerations when we choose frontend technologies.

Javascript SEO is still under development and I was very surprised google had this power already.

Going SSR is not the only solution if you have a fully client-side rendered app and you want to be part of the search results.

## Pre-rendering

Taking a snapshot of your HTML and save it as the initial-load for your user and google-bot is another technique it can be used to solve this problem. Again, it's not easy but it might be worth it if you need a middle ground.

## Conclusion

Google-bot can crawl your Single-page application but it will have some implications:

- Slower time-to-market
- Crawling limited to google.
- No guarantees your pages will be crawled.

## References

- https://www.onely.com/blog/ultimate-guide-javascript-seo/
- https://developers.google.com/search/docs/guides/javascript-seo-basics
