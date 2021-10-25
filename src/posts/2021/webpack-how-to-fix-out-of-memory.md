---
title: 'Webpack: How to fix "Heap out of memory”'
subtitle: 'JS is out'
date: '2021-10-25'
topic: 'job'
tags: ['build', 'bundle', 'troubleshooting']
description: 'This past week I encountered an error where a build process was failing in a CI environment because the system was running out of memory. The error looked something similar to: Javascript heap out of memory'
language: 'en'
---

This past week I encountered an error where a build process was failing in a CI environment because the system was running out of memory. The error looked something similar to:

```jsx
wait - compiling...

<--- Last few GCs --->

[82128:0x102a81000]  5231616 ms: Mark-sweep 2091.9 (2100.2) -> 2091.6 (2100.2) MB, 260.0 / 0.1 ms  (average mu = 0.584, current mu = 0.000) last resort GC in old space requested
[82128:0x102a81000]  5231884 ms: Mark-sweep 2091.6 (2100.2) -> 2090.3 (2100.2) MB, 267.7 / 0.0 ms  (average mu = 0.393, current mu = 0.000) last resort GC in old space requested

<--- JS stacktrace --->

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

## Why is Webpack throwing this error?

Depending on the Node version this error means that **you have reached the limit** of what can be held in memory for your process to complete. 

In the following table, you can see the estimated default memory limits per node version: 

[Default node memory limits](https://www.notion.so/c227ad9575244a7b9aefd77f16e9a064)

Regardless of your hardware capacity if your process is taking more memory than what it's allowed to it will throw.

### Let's try patching it

To "fix" this, a quick google search will suggest you increase this limit by setting a different memory limit. This can be done by either providing a parameter to node (`-max-old-space-size=<memory in MB>`)or setting an environment variable:

```bash
NODE_OPTIONS=--max_old_space_size=4096
```

If this is the case for you. Lucky you...You can stop worrying about reaching the limit, for now, 😋.

## What if there is no more available hardware?

It's quite easy to throw money at the problem but what if that is not possible. There is probably a reason why the process now it's suddenly failing and if we want to find alternatives on how to decrease memory consumption there are a couple of things you could try.

## Troubleshooting your failing build

### There are too many BIG files to process

The primary reason why Webpack would fail is when we have too many files that when they are in memory the whole build process collapses. This happens because Webpack recreates the file tree in memory with everything you import from your entry files (e.g. index.js). To do this more efficiently, Webpack can limit how many things to have in memory at the same time but the default could be sometimes already too much.

There is one very useful param that will help in preventing getting to this limit by setting how many files are compiled in parallel. This will reduce memory usage but will increase build time significantly: `parallelism`. The default is 100 but you can set lower limits until you see things are still working.

You could end up in a situation where you have set this parameter to 1 and your process still fails. This means there is one file you are trying to import and that one alone is already too big. 

### Processing unnecessary files

Imagine you have an image. Pretty high quality (50MB). For any mysterious reason, you want to use that big of an image on your webpage. Every time you use `import X from Y` Webpack will put that file in memory and later on use it to complete its build process. Maybe one image is already too much, in that case, you should consider taking this file out of Webpack. For images, the solution is pretty straightforward: Create a file server that returns your static assets. You can later even put a CDN in front of that and you are golden 🤤.

### High memory consumption Plugins

Webpack allows the use of plugins that will give your build the freedom of handling the files in any way possible. You can process new types of files, hook into steps of the compilation and do pretty much whatever you want. Many times plugins deal with file types and operations that can push your memory consumption closer to its limit. Plugins for data compression, encryption, and handling big assets such as videos or JSON files are the ones you should be paying close attention to.

If you wanna measure how much memory a plugin is consuming you can try commenting them out one by one and check the max memory usage of your build. Might be worth also checking how much time that plugin is adding.

A plugin is a convenient way of handling everything related to your build inside the same command/tool. Doing the same job outside of the Webpack pipeline is also an option.

## Outdated NPM modules

When it comes to Webpack itself and plugins. It's good to be up-to-date with the version of your packages. This is not only relevant for security reasons but also performance. Everything that will speed up your build pipeline and decrease memory consumption will benefit your day-to-day immensely. Memory leaks are pretty often a big deal in Webpack and plugins. Try to be up to date with the versions but not right at the edge. Being the first adopter of major changes creates a risk that should evaluate carefully.

## Conclusion

Webpack memory consumption depends on the size of your project. If you run into issues try throwing a little bit of money at the problem (memory is not that expensive). If you still have issues, evaluate what is affecting your build process and iterate from there. Always try to be up-to-date with your npm node modules, that can optimize resource consumption.