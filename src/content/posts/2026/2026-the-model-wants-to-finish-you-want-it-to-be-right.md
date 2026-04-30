---
title: 'The Model Wants to Finish. You Want It to Be Right.'
date: '2026-04-30'
topic: 'AI, engineering judgment, and software craft'
tags: ['AI', 'engineering', 'frontend', 'judgment', 'debugging', 'tooling']
description: 'AI is optimistic about its own progress. Once you understand that, the question stops being "should I use AI" and becomes "where is its optimism going to hurt me."'
lang: 'en'
featuredImage: '2026-04-30.webp'
---

The most expensive lesson I have learned about AI is that it is optimistic about its own progress.

Not in a vague philosophical way. In a very specific, operational way.

When a model is producing code, it wants to converge. It wants to ship something that looks finished. It will create abstractions before there is a working loop. It will optimize parameters of a system that cannot yet execute the simplest path end to end. It will generate tests that confirm what it already wrote. It will tell you, calmly, that you are close.

You are _often_ not close.

This is the part of working with AI that almost nobody talks about clearly, and it is the part that matters most. Because once you understand it, the question stops being "should I use AI" and becomes **"where is its optimism going to hurt me."**

## The setup that worked

I built a backend recently for a healthcare-adjacent product. I am not a backend specialist. I understand systems well enough to ask useful questions, but I would not call myself the right person to architect a long-lived service from scratch.

I delegated most of the implementation to AI, with one constraint set upfront: TypeScript only. Not because TypeScript is the best backend language. It is not, for many things. I chose it because it kept the system inside a language I could read, debug, and operate without losing context.

That decision turned out to be the most important one I made on the project.

The first version ran. Connections worked. Endpoints responded. Email got sent. By the standards of "did the model produce something," it was a success.

It was also fragile in ways I only saw because I was paying attention.

The email path was the clearest example. The initial implementation called the email API directly, in-process, on the request path. That is fine for proving the pieces connect. It is wrong for production. It sent too many requests. It hit rate limits. When the API failed, the email was simply gone. No retry, no record, no signal that anything had happened.

This is the failure mode I now look for first: the system runs, but failures are invisible.

So we changed the shape. A queue in front of the email API. Workers that could be slowed down or paused. A failed-jobs view I could actually open and read. Retries with backoff. The system did not get more impressive. It got more honest. The question shifted from "did the code call the API" to "can I see what happened to this email, and can I do something about it."

That is the work AI did not do for me, even though it wrote most of the code. That is the work I had to do, because I was the only person who knew what the system would eventually have to survive.

The pattern from that project: I delegated execution and kept supervision. When I did not understand something well enough to supervise it directly, I had the model build me tooling around it. Small inspectors, log views, internal dashboards. So I could see inside the box instead of trusting the box.

Output went up. Judgment did not go down.

## The setup that didn't

The counter-example I keep returning to is an AI orchestrator I tried to build a few months earlier.

The premise sounded good. An agent-agnostic system that would route tasks to different models, optimize for cost, and stay within a monthly euro budget. I gave it a one-line brief along those lines, answered some clarifying questions, and let it work.

What I got back, repeatedly, was architecture-shaped fog.

It produced configuration surfaces for a system that could not complete a single task end to end. It built abstractions for swapping models before any model had done useful work. It wrote routing logic before it had something worth routing. Each step looked like progress. None of the steps connected to a working system.

And the model was relentlessly optimistic about how close it was. Every iteration ended with something that read like "almost there, just need to wire up X." X was never the actual problem.

The mistake was mine, not the model's. I had handed it a vague goal and assumed it would discover the operating philosophy I had in my head. It did not. It filled the gaps with its own assumptions, and those assumptions were tuned for finishing, not for being right.

The budget constraint is where this got expensive. I had said "stay within a monthly euro budget," and explained why. The orchestrator interpreted that as "use cheaper models." So it routed everything it could to the cheapest option, which then failed at most of the work, which then required more retries, which then cost more attempts, which then meant the cheaper-model strategy was actually more expensive than just using a capable model from the start.

Cost and intelligence are separate optimization domains. A cheaper model doing broken work repeatedly is not cheaper. It is more expensive in tokens, in time, and in the human hours required to figure out why nothing is working. If you want a cost-efficient intelligent system, you have to define how those two domains trade off. You cannot announce the goal and hope the model derives the philosophy.

I did not give it a philosophy. I gave it a wish.

## What I changed

After enough of this, the rules I now operate by came into focus. They are not fascinating:

- **Plan before code.** If I am uncertain about a task, I want a plan I can read, argue with, and reject before any implementation begins. A bad plan is much easier to fix than a bad implementation that has already grown a test suite around itself.

- **Separate the executor from the validator.** Asking one model to write code and then verify its own code is asking it to grade its own homework. The same optimism that produced the work will protect it. A different model, or better, a different prompt with a different goal, has a much better chance of finding what is wrong, because its job is no longer to converge.

- **Spend intelligence on planning, cost on execution.** A capable model planning carefully, handing structured work to a cheaper model, often beats both alternatives. But this only works if the plan is concrete enough to execute mechanically. A weak plan handed to a cheap executor is just a more structured way to fail.

- **Build the tooling to see inside.** Whenever I am working in a domain where my supervision is shallow, I have the model build me ways to inspect what it has built. Not just logs. Operational interfaces. The ability to look at a queue, replay a job, see a state, undo a change. If I cannot see inside, I cannot stay in control.

None of these are AI-specific principles. They are engineering principles that AI makes more urgent, because AI removes the natural friction that used to force you to understand what you were building.

## Visibility, reversibility, blast radius

The cleanest test I know for "is this safe to delegate" has nothing to do with the model and nothing to do with the task category. It has three parts:

1. **Visibility:** can I see what happened? Not "did it run," but "did it do the thing I wanted, and how do I know."

2. **Reversibility:** if it is wrong, can I undo it cheaply? In seconds, in minutes, with a revert, with a rollback, without waking anyone up.

3. **Blast radius:** if it is wrong and I do not catch it, what gets hurt? Cosmetics? Data? Users? Money? Trust? Someone's medical record?

Cosmetic frontend changes pass all three easily. Color tweaks, copy edits, spacing. High visibility, instant reversibility, tiny blast radius. Those are genuinely safe to delegate, not because AI is reliable at them, but because the cost of being wrong is near zero.

Backend logic, data migrations, permissions, anything touching user records. Those fail at least one of the three, often all three. The output may look fine. The cost of "looks fine but isn't" is enormous. That is not a place to trust the model's optimism. That is a place to slow down, plan, validate, and build the visibility you need before shipping anything.

The category of work matters less than people think. The shape of its failure modes matters more.

## "But isn't the speed the point?"

The honest objection to all of this is: you are slowing yourself down. The whole reason to use AI is to move fast. If every change has to be planned, validated, supervised, instrumented, and reviewed, you have just rebuilt the old workflow with extra steps.

I take this seriously. I have felt the pull of it personally. There are days when the temptation to ship the model's first output and move on is almost irresistible, especially when it looks plausible and I am tired.

Here is what I have actually observed, across both projects and a lot of smaller ones in between.

When I move fast on small, reversible, low-blast-radius work, the speed compounds. I get more done. The mistakes I make are cheap and visible.

When I move fast on work with hidden failure modes, the speed is fictional. I look fast for a week and then spend three weeks debugging something I did not understand the first time. The total time is worse than if I had planned. The quality is worse. And the experience is worse, because debugging optimistic AI output is a specific kind of unpleasant. Every plausible-looking line has to be re-derived from scratch.

Speed is real. But it is real only inside the right blast radius. Outside that radius, "fast" is a story you tell yourself in week one and pay for in week four.

The actual leverage is not "use AI more." It is "know which kind of task you are on, and adjust accordingly."

## The thing I am still figuring out

I do not think this is a solved problem, including for me.

The honest version is that I am still calibrating, on every project, where the line is between "supervise lightly" and "stay close." I get it wrong in both directions. Sometimes I over-engineer the validation around something the model would have gotten right on its own. Sometimes I under-engineer it and pay later. The orchestrator was the most expensive version of the second mistake. The healthcare backend is, so far, a version of the first one going better than expected. Partly, I suspect, because I am still slightly over-supervising it.

The skill is not "use AI well" in the abstract. It is the much smaller, much more concrete skill of noticing, in a specific moment, that the output in front of you is more confident than the work behind it warrants. And acting on that noticing instead of accepting it.

I do not know how to teach that skill except by failing at it a few times and paying attention to how the failures looked.

The model wants to finish. That is its job.

Wanting it to be right is yours.
