---
title: 'What Frontend Engineers Need to Stop Pretending About in the AI Era'
date: '2026-03-23'
topic: 'frontend engineering, AI, role boundaries'
tags: ['frontend', 'ai', 'career', 'generalist']
description: 'A short essay about the uneasy shift in frontend engineering as AI makes it easier to work across the stack, and why verification matters as much as expansion.'
seoTitle: 'What Frontend Engineers Need to Stop Pretending About in the AI Era'
seoDescription: 'A frontend engineering essay about AI, role boundaries, verification, and why frontend value no longer stops at the UI layer.'
lang: 'en'
featuredImage: '23-03-2026.jpg'
updatedDate: '2026-03-27'
---

Frontend engineers need to stop pretending their job ends at the UI.

That sounds provocative, but the real shift is simpler and more uncomfortable: the borders between engineering roles are getting thinner. In the AI era, it is much easier to move across parts of the stack, and that makes old role titles feel less absolute than they used to. A frontend engineer can now contribute far beyond what used to be considered their lane.

That does not mean specialists are obsolete. Someone with deep experience in a field will still be much better at judging the output of an agent. But it does mean contribution is no longer fully dependent on other people.

## The border between frontend and the rest of the stack is thinning

AI is changing what it means to be a frontend engineer because it lowers the cost of trying things outside your usual domain. That does not magically turn every engineer into an expert, but it does make exploration practical.

The important part is not that frontend is dead. It is that the real question is becoming: what value should a frontend engineer still own when the tools can help them move beyond the UI?

For me, the answer is not to shrink back into the title. It is to expand outward with enough judgment to know what you are doing.

## A printer project made that shift very real

I saw this directly in a project at Tike. I was tasked with creating a driver, a proxy that would let a thermal printer print a ticket from the browser. At the start, I did not really know how to make it work.

So I started with an MVP version of ethernet socket communication, because it was easier to work with ethernet and ESC/POS commands than to deal with drivers from the beginning. The final idea was to support printers connected through USB, and I used AI to help me find my way through the implementation and eventually build a Node.js webserver that proxied the requests to the OS printers installed.

That project was a success. It would not have worked with only my knowledge, and it certainly would not have moved as fast without AI. That is the part people should pay attention to: AI can help a frontend engineer solve a problem outside frontend that would have felt out of reach before.

## Expansion is useful, but it starts with the wrong assumptions

This is where the fantasy breaks.

The first thing that went wrong in that printer project was not the code. It was the assumption. I did not account for the limitations of the hardware. I assumed the printer buffer was larger than it actually was, so in the first version I was sending a logo that was way over the 512KB the buffer could handle. That caused all kinds of errors.

Eventually, I refined the implementation. I combined the most native POS commands with very small images so the result would be a safer driver that could work on most thermal printers. I also used AI extensively to build tooling around it, so I could verify things quickly without having to run the full end-to-end flow every time.

That is the real lesson:

- AI expands what you can attempt.
- It does not remove the need to understand what can break.
- It does not replace risk judgment.

## AI can make a bug look trustworthy before it is actually correct

Frontend engineers should be especially careful here because AI can make something look right long before it actually is.

Take the availability input I built for an event. This input controlled whether an event would be open to buy tickets or not, so the time was incredibly important. The bug was subtle: the time was in UTC, but the UI was not clear enough, so the user believed it was their local time, as it was supposed to be.

AI added a note that the time was UTC, but the UI did not format it properly. That meant a user could easily read it wrong, which would mislead them and harm both the event and the trustworthiness of the app.

Manual verification with Playwright MCP caught the issue. The check asserted that the time was displayed according to the user’s locale, and it was not — it was showing UTC. That raised the flag. Unit tests were added, and we also used an AI agent to swipe through the app and look for other inconsistencies with dates, which found a few more.

That is exactly the kind of moment that should change how frontend engineers think about their job. The answer is not just “use AI more.” The answer is: verify harder, and build the habit of checking what the agent thinks is true.

## Black-box agents still fail in ways that matter

Because AI can also be dangerously wrong.

There was a reconciliation task involving money reported by a payment provider versus what we had in the database. We noticed the LLM was hallucinating fields while running a migration based on a script. That was risky because the rows and curl events looked legitimate at first glance. It was only when we paid close attention to a few lines that we noticed the mismatch.

The model was inventing fields that were not present in the source, including payment provider codes. The schema did not allow empty values, so it invented random names. That would have changed the future reporting we use to consolidate and send to clients, which made it a non-starter.

So we stopped it. We moved in smaller batches and, since there were only around 60 requests, we decided to do it mostly manually.

That is the part people do not always want to say out loud: a black-box agent is not something you should trust by default. Agents are smart, but they are also extremely dumb sometimes. If you are not paying attention, or if you do not understand the limitations of the current models, you can end up in a valley of trust where systems fail catastrophically.

And this is not only a technical issue. Ethics are in play too. Do not delegate things that require extensive scrutiny if they can harm people or cause accidents. In those cases, human judgment has to stay in the loop.

## Go wider, but do not confuse that with going blind

So what should frontend engineers actually do?

They should proactively expand into other areas. Start the journey toward any field that calls your attention, or just try to solve your own problems by going wider. Problems that used to seem impossible may now be within reach.

That does not mean judgment disappears. Risk judgment will still be there whether you stay in your comfort zone or move into areas where you are less versed. You can go deeper or you can go wider. That is the choice.

I think going deeper is becoming less and less required, at least based on how the job market seems to be shifting toward more generalist engineers.

## The part that still needs proof

That said, that last claim still needs more concrete evidence.

The direction is clear enough already: frontend engineers need to stop pretending their value is confined to one layer of the stack. In the AI era, the job is not just to build interfaces. It is to understand the solution space deeply enough to expand into it, verify it, and know when the agent has gone too far.

The real skill is not staying inside the title. It is learning when to move beyond it without losing your grip on what can break.
