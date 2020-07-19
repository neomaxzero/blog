---
title: 'UI: explicit vs implicit actioners'
subtitle: 'How do you know when to stop adding elements to your page?'
date: '2020-07-19'
topic: 'UI life'
description: 'How do you know when to stop adding elements to your page?'
language: 'en'
featuredImage: ''
---

# UI: Explicit vs implicit actioners

If you ever used JIRA. This very powerful tool is riddled with features. The tool is so powerful that the designers have an incredibly hard time trying to cram all the functionality on a page.

There are only so many buttons and messages that you can convey on a page before you go beyond the understanding threshold. I always complain about the number of features it has only to discover there's even more.

I was thinking about this and figured that there are two very immediate mechanisms we use when looking for elements and exploring a page.

## Visual scan

Imagine that you are in a remote call and you have JIRA open. Someone might try to guide you and teach you how to use the tool, after 5 mins you are both tired of saying "there! / where?". At this point, you probably gave up and let someone else try to continue with the task.

You don't want any of your UIs to go this same path.

The feeling an app leaves you when you see more elements than what you can handle is **Visual fatigue**. A good UI design will do a great job at guiding you to what would be the optimal approach to the actions that are optimized for.

When a component is setting somewhere in your screen at plain sight I call this: **Explicit actioners** (CTA). This means that I only have to use my eyes and my interpretation of the elements to figure out what is it going to do after I interact with it.

You go to a page, you wait for all the elements to load, after that, you start scanning the page until you find the text or visual cue (icon/color/animation) that represents the action you want to perform on your page.

If you have a lot of elements this can be _A LOT_ of work. If you combine this with the visual hierarchy given by Font / Color / Size / Spacing / Symbols you can imagine why this could be super confusing at times.

## Motion scan

Another great tool we have at our disposal is the mouse.

In a device with a mouse, you can use the mouse to hover over elements and see when changes happen either to your cursor or the page. Sometimes there are even elements similar to drawers (hamburger icons/ dropdown menus/ inline pop-ups). After you interact with them you have even more elements that were once hidden to you.

All these elements that need an extra step to be accessible I'd like to call them: **Implicit actioners** (I-CTA).

In a mobile device, you can't hover over pages (yet) so you need to rely on your intuition and the correct communication of the elements to guide you in the navigation.

## Visual vs Motion

Every app is a different world and I would be lying to you if I say I know exactly the perfect combination of explicit vs implicit actioners you should have on your page.

What I do know is that there's a limit and a relationship between the number of elements and the time users need to understand and later act over your pages.

What is too much? Is really hard to tell until you try it. If you have thousands of users you can rely on your data an A/B test every little decision you make but this is a time consuming and long process.

If you are on the early development process of a project you might want to see examples of what are the "big leagues" doing because they have already spent quite some money on testing what's more likely to succeed.

With a big disclaimer that what works for others might not work for you, I'd say it's good to at least be familiar with the current state of UI art. By this I mean, there's some collective knowledge that you should really use.

A great example of these are hamburger menus: If you see three bars somewhere on a page you expect that to open or show a list of more elements. If you use the same icon on your page to for example make a noise, that might be quite unexpected.

## Some ending thoughts

I noticed that I tend to go for explicit-CTAs rather than implicit ones. I guess the trade-off of having too many explicit elements is that you can very quickly reach the visual fatigue for your app and that's when you have to be smart and consider rethinking your use cases to **make it better for the vast majority.**

Let me know what you think. I'm very interested in knowing what are your thoughts on the subject.
