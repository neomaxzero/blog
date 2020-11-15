---
title: 'Building a web performance culture: Seed stage'
subtitle: 'Monitoring'
date: '2020-11-14'
topic: 'Performance'
description: 'I want to tell you a little bit of my experience on being a spectator/participant of some sort of performance culture creation. TLDR; Monitoring.'
language: 'en'
featuredImage: 'performance-culture-seed.png'
hideImgTitle: false
---

Whenever you are working on a feature there are multiple things you have to take into account to consider it done. The obvious are the functional requirements of your story. However, on top of that there is also a huge list of details you need to align to. e.g. Code styling, testing, documentation, logging, alerting, accessibility, security and performance.

If these elements are explicitly defined and thought of it's easier to early detect issues and solve them in an efficient manner.

Although performance was last on my list that doesn't mean there's an order in which you should take care of them and this might depend on the values of your company and the current stage of your project.

I want to tell you a little bit of my experience on being a spectator/participant of some sort of web performance culture creation.

## The origin of a discussion: Why is it this slow?

It's a Friday afternoon, you have just merged a pull request for a new shiny feature many people were waiting for. Time for presentation, you go in there, present to all the right stakeholders. Together you celebrate the beginning of a new era and then you continue onto your next assignment.

This process continue until one day someone asks: "**Why is it this slow?"**

Confused but interested in what's next, a conversation it's triggered. "**Where exactly?"** you asked.

The answer is vague but with a powerful moving force: **"I don't know. The page feels slow in general"**

Depending on the company and the people around it this can go without noticing until the frequency of the question shows a clear sign that performance is perceived as "slow" and maybe it's time to do something about it.

**🌱 A seed has been planted**. It's up to the people to make sure this keeps growing.

## Time to investigate: Metrics

At some point you feel this is something you should talk about. The subject pops up in a meeting like the retrospective or someone with a loud enough voice says something (CEO/CTO) or it could be someone external to the company. It doesn't matter how but a meeting is held.

The meeting goes around these lines:

Developer: **Can you tell us what do you feel is slow?**

Other party: **Sure! Look, when I click here and I try to do "X" I have to wait a lot. This didn't use to be the case.**

Developer: **🤔 ...We'll investigate.**

### Back with the team.

**One dev: What do the metrics say?**

**The rest: Metrics?**

If you reach this situation you probably want to start gathering data. It's really hard to check when your systems go slow if you are not tracking metrics that could help you determine the previous and current state.

Metrics are an important part of building a performance culture because when we all talk in relative terms: Slow / Fast / Ok. It's pretty hard to say if we are all on the same page.

What do we measure? How? These are questions that require their own article.

## A web performance culture  starts with measuring

Having a measuring tool is essential to start with performance improvements and if you want to make it to be more than a one-time thing it doesn't end there. Culture is a bold word and brings with it a lot more than a measuring tool.

We know how information is so valuable to pretty much everything. Performance is not the exception and having data to help your team in your decisions will be the base when answering these other two questions:

- How do we make people care about performance?
- What do we do when we are not as fast as we want to be?

I won't cover those today.

## Conclusion

A simple question can trigger a cascade of events that could improve the outcome of your deliverables. Performance is not an easy topic because many times it involves many more grounds than I could cover or even think about in a single post. Do not ignore these relative observations coming from fellow colleagues and if you are not measuring: **Maybe you should!**
