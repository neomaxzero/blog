---
title: 'Frontend Architecture: Monorepos vs Repo'
subtitle: 'modules'
date: '2020-03-07'
topic: 'architecture'
description: 'frontend architecture:  Monorepos vs Repo, what is better? How much does it cost?'
lang: 'en'
featuredImage: '0003.png'
---

<!-- target: 6 mins reading. -->

## Repository

A version control system (VCS) is used to store the history of files changes. The idea here is to store a file with metadata about what are the changes a file ran into and enable the user to easily manage this changes in time.

There are multiple implementations and today a distributed VCS is one the most popular one.

I'm 100% sure that if you are a developer you have come across **git**. Git is a distributed VCS. _Github_ is a cloud service that provides Git.

Many times when we start a new project is pretty familiar and natural for us to just go to the web, create a new repo, clone, pull and 💥 we are already working with it.

There is ton of documentation about how to use VCS and especially git.

In the traditional way of thinking, whenever we have a new project for our company we start from creating a new repository with its own name and a very standard flow for the build process.

This is very well known and works amazingly.

At some point, you decide that you need to re-use something from a different repo. Easy enough, you install your new library, use it and you are good to go.

New project comes along, for the 30th time, you create your new repository, new pipeline, new build process and again. You get the point, this process could be time consuming but keeps things very much separated.

Imagine now the build process is exactly the same for all this repositories and because these repositories need to change we are in the position that we have to think about a way of sharing the build process.

How would we solve this?

One option could be to create a shared project with the build process that later you could import from all this repositories that need it.

Now, the build process need to change for all this 30 repos. semver strikes again, etc etc.. oh no!

Hands on, only 31 repos to upgrade and we are good to go.

Now that we have the situation, I'd like to tell you that this is not your only option. There's a "new" type of repository that can help you on situations like this.

These are called **monorepos**.

## Introducing monorepository


### Tooling

### Advantages

### Examples

## Monorepo vs simple-repo

## Conclusion

### Sources & Inspiration

- [Wikipedia - repo](<https://en.wikipedia.org/wiki/Repository_(version_control)>)
- [Wikipedia - monorepo](https://en.wikipedia.org/wiki/Monorepo)
- [Toptal - guide-to-monorepos](https://www.toptal.com/front-end/guide-to-monorepos)
- [danluu - Advantages of monorepos](https://danluu.com/monorepo/)
- [Atlassian - monorepos](https://www.atlassian.com/git/tutorials/monorepos)
- [Matt Klein Monorepos: Please don’t!](https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b)
