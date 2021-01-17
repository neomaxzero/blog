---
title: 'When Do You Say A Website is Fast?'
subtitle: 'It isnt as straightforward'
date: '2021-01-17'
topic: 'performance thoughts'
tags: ['dev thoughts', 'performance']
description: '15 years ago, I remember when I saw for the first time an image rendered on a screen from the Internet and I was amazed by it.'
language: 'en'
featuredImage: 'when-do-you-say-a-website-is-fast.png'
---

15 years ago, I remember when I saw for the first time an image rendered on a screen from the Internet and I was amazed by it. At the time, my perception was different, the 640x480 image took around 6 seconds to be fully rendered and the render experience was jaggy and progressive in a way I could only get a sense of the image 4 seconds along the loading process.

Navigating through pages felt like a whole different experience. If you were aiming to click on a link and instead you clicked somewhere else, you even had time to click the "stop" button at the top of the browser and try again. Every click counted.

I didn't know best, it was already amazing that in a couple of seconds I had access to so much information and we were all thrilled by the mere fact the internet was so vast and available.

I remember I had to do an assignment for school and I used the internet to research. I spent an hour looking for specific information, I found what I needed it and I'd achieved what I had to.

Was it fast? Definitely. It was faster than going to the local library and it was available (at that specific moment the library was closed). I was really happy with how "fast" I managed to complete my task thanks to the web.

Yes, there were some pages that took a lot longer than others to load, especially when they had some images. I waited close to a minute to open a gallery of images and I waited because that type of content was only available there. My friends and I, we all waited... it was worth it.

## The perception of speed

If you ask anyone today if they would wait almost a minute to open a media gallery their immediate reaction would be a solid "no!" and probably the reason behind this would be because it is "too slow".

Without much effort, we build a model to say if something is slow or fast. Intuition only relies on the samples that we encounter during our lifetime and we use that information to compare and make a judgment on whether things are according to our expectations.

Making objective a subjective term such as "fast", means that we have to define a set of numbers (metrics) to help us verify that intuition.

The amount of traffic served globally and the bandwidth that supports it have grown exponentially and next to that also our expectations.

## What is a fast website today?

Right after you listen to that question you start thinking about examples that match the statement. It is also very hard to say why do we think X is faster than Y without pointing to the very specifics of those examples. Finding a common ground to compare them goes around getting rid of the specifics of a page and finding what are the elements we can use as links between all pages.

To simplify the process there is a constant debate on what we (as a community) should measure and which are the ranges that fall into the "fast" bucket. If you do a quick research on "web performance", "web optimization" or "improve website speed", to name a few, you'll find tons of posts pointing to some almost standardize the list of acceptable metrics.

Google is standardizing and promoting going toward that "performant"/"fast" web experience and they have defined this subset of metrics they call **web core vitals**. They've put a lot of thought and brainpower into the topic and I believe it is a great starting point.

To decide the metrics and the ranges they have, quite rightly, **compare websites**. I don't want to make it all about the web core vitals but, to give a more concrete example: One of the metrics is **Largest contentful paint.** Your website will have a good performance according to that metric if the largest element above the fold loads faster than **2.5 seconds.**

Where is this number coming from and should I really aim for that? That came from comparing a lot of pages from the web plus investigation on cognition theory. To get to that number there is a complete explanation by the chrome team that I highly recommend reading[1] and they also made sure that the threshold is achievable.

If your website it's in the "good" range that basically means your website is as fast as the fastest 10% of all the websites.

Being in the green range obviously feels good but, if we think about what are all the pages that they are sampling to come to that number we can quickly realize that there is a basket full of different cookies. Which is good in some cases but really not suitable for others.

By mixing all these websites together they are assuming pages are all equal in a sense and that it is the same to serve an index.html page that has a couple of H2 tags without javascript to the apple iPhone landing page that has an incredible user experience.

We are literally comparing different kinds of "fruits" and I think it might be super unfair to compare them. I'm not saying that these metrics are bad. I'm very happy they exist and we have now amazing tooling and a lot more data to use.

Nevertheless, the more tailor-made your comparison the better the decisions you can make whether some new target might be worth aiming to or not. Takings samples closer to you, like your main competitors, would give you a better idea of what is "fast" for your industry and it might also be that you still provide more value with a slightly "slower" website.

## Conclusion

The web is fast, a lot faster than 10 years ago. Maybe it's not as fast as your neighbors' web pages but you now have data to compare and if you want, you can act upon it. Don't take any metric for granted neither the process. If you want to make a good decision on if it's worth or not doing something today, have a critical view of the metrics and use them. The web core vitals is a good starting point but that's only the beginning, it might be enough.

## Reference

- [1]<https://web.dev/defining-core-web-vitals-thresholds/>
