---
title: 'Lets review: Mastering Modular Javascript - Chapter 6 - 1/3'
subtitle: 'part I'
date: '2019-03-26'
topic: 'book review'
---

Based on my [highlights](https://github.com/neomaxzero/m-quickreview/blob/master/mastering-modular-js/chapter-06.md)

**Disclaimer**
_This chapter is a mix between my thoughts and my notes.
My notes are fully based on the text, so, if you want to check exactly what the author said please refer to the highlights._

## Modular Development methodology and philosophy

We talked a lot about the different implications and considerations we should have at a time of writing modules, the interaction between them. But little we said about how this modules should be release to the real world. How this is related to modularity could be tricky to determine.

### Secure configuration management

If your application grows until a certain point it needs to "talk" with a different system. You'll run into the need of having keys to use inside your codebase. This keys are secrets and it should be treat it like that. Keys should not be suppossed to be commited to your version control system.

To avoid doing that is always a good practice to give a second thought and start saving in a secure place right away.

A well accepted and default option is to save those variables as `environment variables`. There are plenty of npm packages that can give you a hand on this.

### Explicit dependency management

On node applications we could use global packages that are not installed on our local project. The application will work but not on every system is executed. We should at all cost avoid relying on global packages. If we also use environmental variables we should explicitely indicate that on the readme or somewhere easy to see.

Running our application on a container such as docker and configuring everything from a docker script could ease the process to the minimun.
