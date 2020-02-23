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

On some cases the YES is more towards writing your own solution and in other cases to install an existing module. In the world of frontend we have a gazillion of alternatives and options and one npm package/second in born as we speek. (xD)

If you work for a company that has strict rules about how to deal with this sort of decisions, this was already sorted out. I haven't had that experience like that myself before so, I'll try to summarize my thoughts when deciding what is more adequate for each particular context:

## We'll have to identify our own context

What I mean by _context_ is, where is the particular project where we want to place this new module, either written by ourselves or externally. It's not the same trying to add a library to a repository where all the dependencies are only "very well known" and tested by the industry(express, react, jest, etc), than to a repository where there is not a clear pattern on what are all the considerations taken for the external modules currently being used.

Keeping the context in mind it's easier say than to do, but it's key we don't loose track of the context because it changes the outcome of your decision and the importance you give to each point you have to juggle with.

A list of questions I ask myself and I find helpful are:

- How important is this feature for the business?
- Do we know if there is already a plan involving a high level of customization for this particular feature?
- Was this issue already solved by other colleague?
- Are we ready to solve this specific issue on our own?

### How important is this feature for the business?

It's very likely that if you are implementing a core feature for the business, this will change over time. Evolution of every part of your app is one of the constants in software development, there are going to be parts that grow more than others and the speed at which you can move on with the core features are probably going to have a direct impact to your business.

Asserting how important is what you are going to work on for the business is also going to be affected by the state of your company. When your company is at the phase of testing an idea and the resources are limited, **the focus should be on making sure our implementation test the idea and that's it.**

You don't want to spend hundreds of hours on a prototype that might be discarded because of the lack of market or because you developed something the market didn't want. Believe me, been there done that.

### High level of customization upcoming

Sometimes, we know that in the coming future we'll face some changes for the implementation we are today working on. Even in mature companies with mature products the roadmap is more of a guideline than a plan. The further in the roadmap you see a feature coming, the least you need to worry about how your current implementation is connected with that future. The likeliness of you working on a feature that is set on the roadmap is directly proportional to how close it is to the current date. Use this on your advantage and at the moment of taking a decision: **Spend time on what is more important today**.

If you see that something is inevitable don't look aside and wait for the chaos to come at you. **Speak up and save time**.

How is this related to modules? The decision to add a module today might be tempting, but if you look a little bit ahead you'll realize it doesn't make sense to add it because in a couple of month you'll have double the work.

### Was this already solved by some other colleague?

If you work long enough for a company you'll start noticing there are requirements that are going to be similar to others.

At some point, either your team or someone external will start asking questions like, doesn't this look like that? When that happens, It's time to stop the wheel for a short moment and talk the differences.

**Similar problems, might have similar solutions in their backbones.** and your more experienced colleagues are pretty likely to be really good at spoting the similarities and advantages of your problems and solutions.

If you are not sure, go ask, talk to them. This can only give you and your team an advantage because you will not only solve your problem with the best input, you'll also learn A LOT in the process, get to know them better and start understanding how your solution will fit in the ecosystem.

At some point, you'll find someone that says _yes_. I have this module that does exactly that, or I have this module that can be extended and what you have to do fits there.

Then there it is! you are lucky man.

Start from your team, and then keep on asking inside your company. Don't run directly to google and `npm install` the first result.

### Are we ready to solve this specific issue on our own?

It could be that when you go ask in your company what's being used to solve X, the answer is that the solution was taken from the open source community.

Its needed a lot of repetition to become a master on something, there are some very complex problems that you need years of experience to start feeling comfortable with.

When you are at a point that you feel really comfortable and you know you could add extra value to your company and who knows, maybe to the community (if your company is open-source friendly), you should consider implementing your own module.

A module could go from a function that give you a sum of two number to a web framework.

This decision generally happens when the use case you need to support is not really solved by any of the options available today plus you are an expert on a subject.

Disclaimer: If you are not an expert you might become one after solving it but, this comes at a cost. **A LOT of time**.

## It's all about control

After we have identified the context in which we are taking this sometimes tough decision. We can now focus on the repo where this new module needs to exist.

When working with a repository, you'll start familiarizing with the list of external dependencies used to solve a specific issues. If you are new to the team, you can go to the list of dependencies and take a look to what it was "agreed" to use externally.

Don't take things for granted!

It's very important you question the decisions of your team to understand what were the thoughts that lead your team to decide on importing something externally when you feel that it should not have.

**Whatever it is imported from an external package manager on our project it's not directly on our control so we bring all the decisions of that external dependency with us**

Luckily, there are people that have been working for YEARS in solving very specific issues and built amazing solution.

## The Gray area of dependencies (TGAD)

What problem do you really want to solve?

So, when the borders are not clear we are lost. In a repo, the flexibility we have to install whatever we want whenever we can could be nice at the beginning but at some points you need to start adding constraints so it becomes super evident what is it really the problem this project is solving. **The code you want to maintain should be the core of the solution you are trying to solve**. The "potential" of your repo at solving problems could be "over-provisioned" by including external libraries.

This gray area that I find incredible hard to explain is something that we are constantly changing by introducing or removing dependencies from our repos.

To make myself a little bit clear I'll give a couple of examples of modules and how I do approach them:

## Example case 1: isNull (lodash) - Utility Library

Javascript is a complete language and at some point we need to check if a variable is null (pun intended). What do we do?

Case 1: Lodash is already a dependency. We import the function we need and we are done.
Case 2: We don't have any "utility" library that can help us so we have to decide.

Do we want to add lodash to only use isNull? Luckily today you can install `lodash.isNull` and you are settle again. But you could be in a situation that you need a banana and you install the jungle.

Code you write is code you have to maintain and if you are in a code base that has coverage you'll have to add a battery of tests as well, and the more underestimated feature: **Documentation**.

in the case of `isNull` I will say it seems even ridiculous since the function is extremely small: (`const isNull => value => value === null`).

The function can be written in seconds. Over analyzing this is already wasting time. The process of npm installing is maybe more work than creating a function.

## Example case 2: Formatting dates - Utility Library

At some point we have to show a date in our application and when we show it to our stakeholders they say it has to look prettier than `Fri Feb 21 2020 08:27:13 GMT+0100`. So we notice we have to do quite some work to make it work in a prettier, more custom made format.

Again, we could start with learning the Date API in javascript and at some point we are going to realize how much of a hassle it is to do simple stuff.

There are multiple options for this and I'd say it is worth spending time reading what some libraries provide and how much it's the cost at the moment of importing them.

Dealing with dates is hard. If you have plenty of experience with this it might be good for you at the moment to build a custom made library for this, but this decision is not only going to affect you in the future, it will also your team.

## Example case 3: React - UI Library

We are entering the level of complexity and kind of problem which is generic enough A LOT of developers encounter. When this happens the options tend to increase, the ammount of opinions as well. When A LOT of very capable people gather together and solve a complex problem the solution tend to be complex as well.

With this I'm saying flavors are all over the place and today, as an example, one of the options you have to build your UI is React.

What it does for you? A lot. The problem of creating a performant, UI library that abstract you from manipulating the dom is complex enough that you would need to spend a significant amount of time to build something relatively close to it and trust me, there are people that breath this kind of problems day and night so you can focus on what matters to your business.

I agree with you it is cool to create an UI library but holy santa molly it's a hell of a job. Giants of the industry have collaborated to create something that works pretty good. There is an entire team dedicated to this solo job.

In the end, you might not even need a UI library at all. You could do a lot of stuff with a couple of utilities.

I don't know your use case, you do.

When we are talking about this amount of complexity, I wouldn't even think about using modules vs creating my own. If there is something you could use, **try it out**.

Evaluate the options you have, maybe even extend one library, contribute to make it easier for someone else. You are not facebook, you are not google... and If you are, don't let the challenge discourage you from building the next unicorn UI library.

## Example case 4: Next JS - UI Framework

Modules are abstractions on top of abstraction, on top of abstractions. The more layers you have on your app the easier it is for you to focus on what really matters to your business. But, this doesn't come without costs. Decisions has been made and you have to live with those. Nextjs is a framework built on top of react that provides you with server side rendering and a file routing mechanism, [and a lot more](https://nextjs.org/). This guys and girls did an incredible job in making sure the framework is extensible enough to let you access the layers underneath and give the control back to the developers.

This was not done on a single night, the company ZEIT is putting a significant energy and time on maintaining the framework. This is not their main businees, but somehow they managed to change the state of the art in the terms of UI libraries and make it into their business.

They are the clear example that if you have the right people and all the conditions. You can contribute to the community and create a profitable business.

With all this said, I think you should not rush the idea of creating your own framework. You should definitely start involving more and more of the relevant participants and make sure you are all in the same page before you spend a minute writing a single line of code.

## Decisions, decisions and more decisions (Snowball effect)

Install vs Writing modules is a decision kind of problem and although we take thousand of decisions every day without even thinking, we are bad at it. We struggle a lot with non-trivial decisions that have plenty of options to choose from. To improve your decision making process you need to practice, you need to get involved and make calls yourself.

And why sometimes it's so scary to take this decisions, because if we take the wrong ones it could and will bite us in the ass. And you know what? That's OK. It's a learning process and if you can't learn from more senior developers around maybe you are the senior that has to commit the mistakes to teach the rest.

I didn't want to conclude this article without mentioning something I always encounter. There is a _snowball effect of modules_ from the very first decisions you made for a project. If today you install dependencies for absolutely everything and that's something that you breadth and take with you, the people that trust you and also take a look at the project start doing the same. This changes when a whole team is re-build again, specially if decisions are not well domcumented.

I know this is not only a frontend kind of problem, but the rapidly growing ecosystem of npm packages in the frontend community it's a double-edged sword and we are constantly dealing with it.

## Conclusion

The more complex the problem, the more effort we have to put on evaluating if you should include or not something to our project. therefore at some point it's easier to just try out libraries instead of even think about solving a problem ourselves.

By being more concious and spending extra time on this subject you will learnt a lot. The difference between an experienced developer and a not that experienced one is that the more experienced one is more likely to take the right decisions at the right time and with this avoiding extra costs.

The more experience you get, you'll maximize the amount of time spent on the right implementation.

Be aware of the gray area of your repo, be a positive factor on reducing the uncertanty and help yourself and your team in the future. It's really fine to not know at the beginning, but if you want to move faster and get good at it, give a third thought before you npm install.

**And what about you? How do you decide in what to spend time when it's about modules?**
