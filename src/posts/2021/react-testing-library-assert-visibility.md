---
title: 'React Testing Library: On How To Assert Visibility'
subtitle: 'QueryByTestId'
date: '2021-10-15'
topic: 'testing'
tags: ['react']
description: 'There are times where you want to assert that an element is not there. This is useful in cases where your component has specific logic that will make it "disappear".'
language: 'en'
---

There are times where you want to assert that an element is not there. This is useful in cases where your component has specific logic that will make it "disappear".  There are two ways in which a component won't be displayed on the screen: The DOM element is not there or CSS classes were applied. Let's see how to test each scenario

## DOM Element not present

Let's say we have a toggle component that will prevent the element from rendering its children in case a flag is true:

```jsx
import React from 'react';

const Toggle = ({ show }) => show ? (
    <h1 data-testid="title"> WoW </h1>
) : null;

export default Toggle;
```

This is a pretty straightforward component and ideally, we would like to check what happens when we set `show` to true. The solution looks like this:

```jsx
import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

test('Should not show element if show is false', () => {
    render(<Toggle show={false}/>)

    expect(screen.queryByTestId('title')).toBeNull();
});
```

Note that instead of using `getByTestId` that will return an element from the React Testing Library we are using `queryByTestId` that returns the DOM element directly. This is the case because if we use the former, the library throws an exception.

## CSS Classes applied

In this case, instead of removing an element from the DOM, we are applying CSS classes that will make it disappear from the page. This is useful many times when the component is either animated or too heavy to compute.

We'll use the same example with a slightly different structure. I'll leave the CSS out of this but you can imagine is a simple `display: none` attribute.

```jsx
import React from 'react';

const Toggle = ({ show }) => (
    <h1 clasName={!show? "hide"} data-testid="title"> WoW </h1>
) ;

export default Toggle;
```

In the react testing library we are encouraged to test how the end-user would do this. In this case, we have the dom structure in memory and nothing else. This means that we can only rely on the DOM structure to assert if what the user might be seeing complies with what we output.

To test this behavior we will need to check if the class is there. Let's see how we do that:

```jsx
import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

test('Should not show element if show is false', () => {
    render(<Toggle show={false}/>)

    expect(screen.queryByTestId('title').classList).toContain('hide');
});
```

Again now, we are accessing the DOM element to get the classNames. Very easily we can check if the class that will make it disappear is there.

## Conclusion

To assert visibility with the React Testing Library we can query directly the element with `queryByTestId` or any other method from the library that returns an HTMLElement. Then you can use your assertions as usual. If you tried to use getBy when the element is not there, the library will throw which is what we want to prevent in this case.
