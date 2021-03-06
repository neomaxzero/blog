---
title: 'Javascript - Private Properties In Classes Part 2'
subtitle: 'part II'
topic: 'Javascript'
date: '2018-12-23'
tags: ['javascript', 'private properties']
---

Before, we talked about how important private properties are and I show you a way to implement it with WeakMaps, now I'm going to show you an alternative using `Symbols`.

## Symbol

Symbol is a relatively new feature introduced in [ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol).
More accurately Symbol is a new type that can be use primarily as an identifier.

## Symbol in private properties

In the following snippet I will propose an implementation of private properties with symbols.

It is good to warn you before you dive into the code:

> Symbols are not supported on Internet explorer.

The use case that we have here is about a class that has three methods.

- `sayHi()`.
- `sayMagic()`.
- `sayFromPrivate()`.

What we want to achieve is to expose only `sayFromPrivate()` and `sayMagic()`. In our implementation we make sure that `sayHi()` is not exposed on the API we are returning.

Enjoy a drink while you check this peace of code.

```javascript
const Magic = (() => {
  const sayHi_ = Symbol('sayHi')

  class Magic {
    constructor() {
      this.privateMsg = 'ohhh!! private Magic!!'

      function sayHi() {
        console.log('Say Hi')
      }

      this[sayHi_] = sayHi
    }

    sayMagic() {
      console.log(this.privateMsg)
    }

    sayFromPrivate() {
      this[sayHi_]()
    }
  }
  return Magic
})()

const magician = new Magic()

magician.sayHi() // magician.sayHi is not a function
magician.sayMagic() // ohhh!! private Magic!!
magician.sayFromPrivate() // Say Hi
```

What we are doing here is first creating a function scope where we save the symbols that will represent the name inside of our class.

We immediately declare the class where we declare our private method in the constructor. The tricky part, or the main thing, that comes after where we use the symbols.

**We create an object where we map the unique symbols for our private methods to the private functions declared.**

Now that we have the map with the private functions available in our class we can use it as we wish. (like in `sayFromPrivate()`).

At the end of the snippet we can see that `sayHi()` is not available directly from the exported class.

## Let's wrap this article up

After investigating about Symbols, I'd like to conclude that this approach is not desirable for a few reasons.

- **Polluted Code**. If we want to make our collegues and also ourselves a little bit confused about the implementation of private properties this is a nice way. In my opinion this adds a lot of complexity and there are other ways of doing the same without increasing a lot the complexity of the code.

- **Browser Support**. IE is not supported. :O This could be a pretty big deal.

- **Private Method?**. It's still possible to retrieve all the symbols of the class and then access the "private" methods. It's still a little bit tricky, but possible.
