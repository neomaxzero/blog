---
title: 'Installing vs Writing modules'
subtitle: 'modules'
date: '2019-12-14'
topic: 'architecture'
description: 'frontend architecture: Installing vs Writing modules'
---

# Frontend Architecture: Installing vs writing modules

When working in an application we are constantly solving small problems to complete a task. Sometimes this issues are common among different use cases we run upon and with experience we start noticing patterns.

If the problem is generic enough, probably someone else has also encountered it and solved it.

**Whenever this happen we face a dilemma.**

Should I write my own solution, or should I use this existing module that seems to solve it?

## And the answer is YES

On some cases the YES is more towards writing your own solution and in other cases to install an existing module.

I'll try to summarize my thoughts when deciding what is more adequate for each particular context:

## First we'll have to identify our own context

What I mean by _context_ is the particular project where we want to place this new library, either written by ourselves or from an external dependency. It's not the same trying to add a library to a repository where all the dependencies are only "very well known" and tested by the industry(express, react, jest, etc), than to a repository where there is not a clear pattern on what are all the requirements of the external modules used.

Keeping the context in mind it's easier say than to do, but it's key we don't loose track of the context because it changes the outcome of your decision and the importance you give to each point you have to juggle with.

A list of useful questions I ask myself are:

- How important is this feature for the business?
- Do we know if there is already a plan that involves a high level of customization for this particular feature?
- Was this issue already solved by some other colleague?
- Are we ready to solve this specific issue on our own?

### How important is this feature for the business?

It's very likely that if you are implementing a core feature for the business, this will change over time. Evolution of every part of your app is one of the constants in software development, there are going to be parts that grow more than others and the speed at which you can move on with the core features are probably going to have a direct impact to your business.

This decision is also going to be affected by the state of your company. When your company is at the phase of testing an idea and the resources are limited, **the focus should be on making sure our implementation test the idea and that's it.**

you don't want to spend hundreds of hours on a prototype that might be discarded because of the lack of market or because you developed something the market didn't want. believe me, been there done that.

### High level of customization upcoming

Sometimes, we know that in the coming future we'll face some changes for the implementation we are today working on. Even in mature companies with mature products the roadmap is more of a guideline than a plan. The further in the roadmap you see a feature coming, the least you need to worry about how your current implementation is connected with that future. The likeliness of you working on a feature that is set on the roadmap is directly proportional to how close it is to the current date. Use this on your advantage and at the moment of taking a decision. **Spend time on what is more important today**.

If you see that something is inevitable don't look aside and wait for the chaos to come at you. **Speak up and save time**.

How is this related to modules? The decision to add a module today might be tempting, but if you look a little bit ahead you'll realize it doesn't make sense to add it because in a couple of month you'll have double the work.

### Was this already solved by some other colleague?

If you've worked long enough for a company you'll start noticing there are requirements that are going to be similar to others.

Check with other colleagues

don't re invent the wheel once again Inside your company.

keep the consistency b

benefit from the mistakes of the rests

ask around and you never know if there is an expert in the subject you need to work with. The advice from the people that work with you are gold...pip pipipi

## Second: It's all about control

After we have identified the context in which we are taking a decision. It's time to start changing the perspective from an organizational level to a repository one.

When working with a repository, you'll start familiarizing with the list of external dependencies used to solve a specific issues. If you are new to the team, you can go to the list of dependencies and take a look to what it was "agreed" to use externally.

Don't take things for granted!

It's very important you question the decisions of your team to understand what were the thoughts that lead your team to decide on importing something externally when you feel that it should not have.

**Whatever it is imported on our project it's not directly on our control so we bring all the decisions of that external dependency with us**

Luckily, there are people that have been working for YEARS in solving a very specific issue and built amazing solution.

## The Gray area

What problem do you really want to solve?

## Example case 1: isNull (lodash) - Utility Library

## Example case 2: Formatting dates - Utility Library

## Example case 3: React - UI Library

## Example case 4: Next JS - UI Framework

## Conclusion

With a bottom up approach..

You could argue that you learnt a lot in the process, and that is always going to be the case, but the difference between an experienced developer and a not that experienced one leis in making the right call at the right time.

The more experience you get, you'll maximize the amount of time spent on the right implementation.
