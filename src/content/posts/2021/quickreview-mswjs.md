---
title: 'Quickreviews: Mock service worker (MSWJS)'
subtitle: '(7.8/10) - Mock all the way but abuse of the service worker'
date: '2021-01-22'
topic: 'quickreviews'
description: 'quickreviews: '
tags: ['quickreviews']
featuredImage: 'quickreview-mswjs.png'
---

> [MSWJS - v0.25](https://mswjs.io/docs/)

## What are you then?

Mock server that retrieves data from the service worker.

## How does it work?

Hook onto the service worker to intercept HTTP requests and return whatever you have defined in the library.

## Now quickreview!

I was excited. I thought it was a library that would magically store your request in the service worker that later it will be sync with your file-system. I think there is a chrome extension that does that and it's the main problem that I have while working with Cypress.

Mocking data is a matter of replicating what the user is receiving in production and it can get outdated and it could be some manual work implicated onto it.

Mock service worker is similar to other node mocking libraries with the difference that it uses the service worker.

The main advantage is that you don't need to change the definition of your API calls to talk to a mock server because the browser does that job for you.

Also this library works in both, the browser and the server.

## Diving a little bit deeper

Looks like a solid library :D. Typescrypt all the way with extensive inline-documentation. Not a big fun of this but a lot better than other kinds of comments I've seen.

Extensive unit and integration testing.

Active community with 273 issues closed. 11% of the total were still open.

Plenty of examples to quickly get what to do.

## Conclusion

Service worker for mocks. I see why I would go with this library If I start a new project. Not really a great idea to migrate from previous solutions to this because the extra value provided it is hard to justify. It might depend on the project of course.

## Scores (higher is better)

- Usefulness: 7/10.
- Code quality: 8/10.
- Documentation: 9/10.
- Browser support: 8/10.
- Potential: 7/10.

_Overall: 7.8/10_
