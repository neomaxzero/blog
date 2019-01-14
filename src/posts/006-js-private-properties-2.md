---
title: 'private properties in classes'
subtitle: 'part II'
topic: 'Javascript'
date: '2018-12-23'
---

# Javascript - private properties in classes Part 2

Before we talked about how important private properties are and I show you a way to solve this with WeakMaps, now I'm going to show you
an alternative using `Symbols`.

## Symbol

Is a relatively new feature introduced in [ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol).
More accurately Symbol is a new type that can be use as an identifier.

## Symbol in private properties

```javascript
const Magic = (() => {
    const sayHi_ = Symbol('sayHi');

    class Magic {
      constructor() {
         this.privateMsg = 'ohhh!! private Magic!!'

        function sayHi() {
          console.log('Say Hi');
        }

        this[sayHi_] = sayHi;
      }

      sayMagic() {
        console.log(this.privateMsg);
      }

      sayFromPrivate() {
        this[sayHi_]();
      }
    }
    return Magic;
})();

const magician = new Magic();

magician.sayHi(); // magician.sayHi is not a function
magician.sayMagic(); // ohhh!! private Magic!!
magician.sayFromPrivate(); // Say Hi
```
