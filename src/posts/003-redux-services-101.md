---
title: 'Redux: Introduction to services'
date: '2018-09-08'
---

# 003 - Redux: Introduction to services.

## Redux-thunk

When working with React with redux, one of early decitions we have to make is regarding how are we going to deal with service calls. If we started following the redux documentation the first way to handle this is to use a very small library called redux-thunk. When we are not familiar with any redux way at all this might be very confusing because redux by default only expect actions to be plain objects with a type.

If we dive deep into the thunk library we can see how simple the implementation is:

```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }

    return next(action)
  }
}

const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware

export default thunk
```

In an essence Redux-thunks is a middleware. (maybe I need to clarify what is a middleware, before talking about thunks).
This middleware grabs an action and in the case the action is a function, it will append dispatch and getState allowing the original action to trigger new actions. In a way, this middleware solve the problem of calling services since now we have the chance to dispatch further actions after a call is successful or not.
