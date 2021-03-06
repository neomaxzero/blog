---
title: 'Javascript - Private Properties in Classes'
subtitle: 'part I'
topic: 'Javascript'
date: '2018-09-30'
tags: ['javascript', 'private properties']
---

Classes are a very recent addition to the language. Before the existance of classes if we wanted to apply Object oriented principles to the language we needed to rely on our expertise and common well known strategies to create pseudo-classes.

## Why are private properties (incl. methods) important?

When creating an entity such as a class. This will have a purpose. It is very important that we only expose the absolutely minimum information and behaviour that serves that purpose.
Once a property is public, is something else you need now to take care of.

Let's try to explain this with an analogy.

Imagine a class is your house. Yes! your most precious asset. And Imagine that in this scenario you let people get into your house to make use of it. Because all classes needs a purpose, the actual purpose in this case is to sleep.

In this context, it is much likely, that you are probably thinking, Wait! its only to sleep so why would I also share my shiny new gym.

So, there are many things/rooms/features of your house that you don't actually need to let your guests use since it does not apply to its purpose. And if we go and think about what options we have not to allow guests to access this things, you can come up with plenty of idea. For example, you can lock all the rooms that you want to keep _private_ or keep all those features you don't want to share hidden in some way.

Let's keep thinking a little bit further with this. What is the problem!!! I don't get it. :P Imagine if you, just because its easy, share everything. You don't care much about it and you just are a "good" host and like to keep all things on plain sight. Now you need to take care of the entire house, even though you only actually needed to share the bedroom. (in this hiphotetical scenario).

With classes it's pretty much exactly like that. Once you make something public, you _HAVE_ to mantain it. There is one more thing you need to keep it update it and more important, if people start using it. Dealing with changes is a lot harder.

I hope you get the idea!

## Ok.....? Then, What's with Javascript?

Javascript does not have private properties per se [(yet)](https://github.com/tc39/proposal-class-fields#private-fields). I will show you two ways of dealing with this so you can start using it in your new projects:

### Weekmap and classes

In this approach we are going to use closures as a way to hide methods and properties of a class and only reveal what is neccessary. Also known as a [Revealing module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript).

```javascript
const Magic = (() => {
  let privateMethods = new WeakMap()

  return class Magic {
    constructor() {
      const privateMsg = 'ohhh!! private Magic!!'

      privateMethods.set(this, {
        sayHi: () => console.log(privateMsg),
      })
    }

    sayMagic() {
      privateMethods.get(this).sayHi()
    }
  }
})()

const magician = new Magic()

magician.sayMagic() //  ohhh!! private Magic!!

magician.sayHi() // is not a function
```

I'm not a fan of throwing code at your face and leave it to you to figure things out. So, I will try to join you and see what the hell is going on here.

The first thing is happening in this code is that we are assigning a [IIFE](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6) to a variable. That allow us to create a new scope where we can save our private methods.

Then we are creating our [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap). A WeakMap is a new data structure introduced on ES6 that holds a key/value pair and is weak referenced, as it name said. In this case we are using it to hold reference to the private methods we define in our class.

Immediately after that, we return our actual `magic` Class.

In the constructor we also create some private property that then we will return when calling the private method.

we call the `set` method in our WeakMap with our own instance as a key, and an object with the private methods as second parameter.

`sayMagic` is the public method we are exposing that is only executing the private method.

Then right after we have an example of how is being used.

In the next post I will be showing a different approach for dealing with private properties.
