---
title: 'Vibe Coding Is Here to Stay, But It Needs Guardrails'
date: '2026-04-02'
topic: 'AI-assisted software development'
tags:
  [
    'AI',
    'vibe coding',
    'software engineering',
    'frontend',
    'agents',
    'product development',
  ]
description: 'A short, opinionated essay on why vibe coding is already part of modern software work, why broad prompts create risk, and which guardrails make AI-assisted development more durable in practice.'
lang: 'en'
featuredImage: '2026-04-02-b.webp'
---

I started this piece because I picked up _Vibecoding - Building Production-Grade Software With GenAI, Chat, Agents, and Beyond_ expecting a practical playbook and came away with a clearer, more useful reminder: vibe coding is already here, but it is still too free-form to trust by default. That is the real point for me. Not whether AI-assisted development works, but what kind of discipline makes it safe enough to keep using.

## The book was the trigger, not the subject

The book matters because it was the starting point, not because this is a book review.

I went in hoping for immediate tactics I could apply to my day-to-day AI experiments. Instead, I found a softer message: vibe coding is here to stay, the success cases are real, and the technology is moving so fast that restraint matters as much as enthusiasm.

That landed for me because it matches what I keep seeing in practice. The surface-level problems are obvious by now. The deeper question is how to use these tools without letting them blur the feature, widen the blast radius, or create a false sense of progress.

## AI-assisted work is rarely one-shot

In my experience, AI-assisted software work is rarely finished in one pass.

First I need to explain the problem correctly. Then I move toward a solution. Then I correct the parts where the model drifted away from the actual goal. That iteration is not a flaw in the process. It is the process.

I also try not to box the model into exactly how I would solve something. If I constrain it too much, I do not learn anything from it. The point is synergy: the tool should enhance my capacity, not just mirror my habits back to me.

## Broad prompts do not just create bad code. They create product risk.

I learned this the hard way while working on Tike.

I was adding a new WYSIWYG, CMS-like feature to the backoffice and gave the model such a wide prompt that it started expanding the entire surface area of the feature. It used tokens like crazy, hit rate limits a couple of times, changed shared components too aggressively, and broke unrelated non-CMS features that depended on those components.

At that point, the work was no longer helping the feature ship. It had become a product problem created by the way I prompted the model.

What fixed it was not a cleverer model. It was a smaller problem.

- define the MVP at the product level first
- break the work into smaller, digestible chunks
- re-enter implementation with tighter boundaries
- stop pretending the whole feature should be solved in one pass

That restart cost time, but it saved the feature.

## The least flattering mental model is the most useful one

The best mental model I have found is this: treat the system like a brilliant junior engineer with amazing coding skills and a very weak sense of the main goal.

It will optimistically assume it can solve everything. It will rarely hesitate unless you explicitly ask it to. And if the task is too broad, it will happily expand the blast radius instead of narrowing it.

That is why small, specific tasks work so well. If a prompt is narrow enough that a junior engineer could do it in half a day, the model can often do it in minutes.

If the task is broader than that, supervision becomes the whole game.

## The guardrails that actually change the outcome

One guardrail I almost always use is simple: **in case of questions, ask; do not assume requirements**.

That one instruction changes the interaction from a one-way code generator into something more useful. It creates space for clarification before the model commits to a bad interpretation.

I pair that with plan mode and RFC-style prompting before code starts. In practice, that means spending more time refining the prompt and the plan up front instead of letting the agent race ahead on a vague brief.

A small example made this obvious to me. I wanted to schedule an email to be sent to a collaborator after a file was shared. The model asked about emails in plural, which made me realize the workflow was still too fuzzy. Instead of answering quickly, I rewrote the flow more precisely: when the email should be sent, to whom, and how many emails were actually involved.

That clarification corrected the plan before implementation started.

## Laziness shows up immediately

Whenever I am in doubt, I prefer to ask more instead of letting the agent start on something vague.

That is partly because I am responsible for the feature and the testing, and partly because the quality drop is immediate when I get lazy about the prompt. The model can only work with the shape of the problem I give it.

If I am sloppy, the outcome usually reflects that sloppiness. If I am precise, the work tends to stay inside the lines.

## Long sessions are their own failure mode

There is another part of this that is easy to miss: session management.

Long sessions degrade. Attention drops after the agent has been working for too long, and the output gets worse over time. The bigger the context gets, the more likely it is that you are fighting compression rather than steering a clear conversation.

Two signs stand out to me:

- the context window is getting huge and starting to compress
- plan mode starts asking repetitive questions, or you get a déjà vu feeling that the same topic has already been half-answered

When that happens, restarting the session is often better than pushing through.

I do not think that is a minor detail. Knowing when to start fresh versus when to resume can make or break a product workflow.

## The version of vibe coding worth keeping

So yes, vibe coding is staying. But the winning version is not “ask the model to do everything and trust the magic.” It is more like this:

- use AI for small, well-shaped tasks
- ask questions before assumptions harden
- plan before you code
- restart when the session gets muddy
- keep ownership of the feature and the test

That is not a rejection of vibe coding. It is the only way I know to make it durable.

## Speed is not the same as control

I am still impressed by how fast and good the model can be, even in frontend code where I have more than ten years of experience. But speed is not the metric that matters if the feature gets wider, noisier, or less correct.

The real advantage of vibe coding is not that it removes engineering judgment. It is that it forces you to use judgment earlier.

Without guardrails, it becomes easy to overreach. With them, it becomes a powerful way to ship.

## The question that still matters

What I still want is a stronger answer to the broader strategy question: what does a frontend-first engineering workflow look like when AI is a cornerstone tool, not just a helper?

Maybe that answer is still forming. Maybe the path from today’s software practices to a more agent-led future is less about replacing disciplines and more about tightening them.

Either way, the direction seems clear. Vibe coding is staying. The real question is whether we treat it like magic, or like a powerful tool that still needs supervision.
