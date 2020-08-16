---
title: 'How to improve the UX by optimizing your fonts'
subtitle: 'react-equalize'
date: '2020-08-16'
topic: 'performance'
description: 'I was checking some performance audit tools and a common sign that every tool was giving was that the way I was requesting the fonts was hurting the speed.'
language: 'en'
featureImage: ''
---

# How to improve the UX by optimizing your fonts

Lately, I have been interested in improving the speed of my blog. The main reason why I wanted to do that was because I love seeing the content instantly. I was checking some performance audit tools and a common sign that every tool was giving was that the way I was requesting the fonts was hurting the speed of my site.

I found two main questions needed answers to come up with a better approach:

- Where are your fonts hosted?
- What's your font display strategy?

## Source of your fonts assets

My fonts were coming from a CDN. This is a common approach and it's very easy to integrate to any webpage because you copy paste a couple of lines and you have it working.

Using your fonts from a CDN have some implications you should be aware of:

1. CDN could be **slow** or in the worst-case scenario **down**.
1. Performance penalty because of network negotiation: DNS, TCP, TLS.
   1. The browser needs to create a new connection because the target resource is outside of your domain.
1. Prioritization of resources is not optimal.
   1. HTTP2 is more efficient with resources from the same domain.
1. Caching policy is decided by the CDN.
1. Security could be compromised and you'll deliver malicious fonts.

The other approach is to **host your fonts**. - Serve your fonts assets from the same domain where your site is host -.

You don't have the disadvantages that I mentioned before and it's not a lot of work.

## Font display strategy

Once you have included your fonts in your project you need to load it into your page. You can change the behaviour of how your fonts load with the property `font-display` . Depending on what you want I'll recommend you to take a look at these two options:

### font-display: "optional"

1. The browser starts by showing nothing _(no text)._
1. The browser will start downloading the main font.
1. The browser will wait for a very short period of time to the main font to be downloaded (~100ms).
1. If the main font is available it will show that one otherwise it will show the fallback and stick to that.

### font-display: "swap"

1. The browser starts by showing the fallback font _(content is shown)_.
1. The browser will start downloading the main font.
1. The browser will wait for the main font to be downloaded (Any time).
1. After it is downloaded the browser will switch to the main font.

A couple of things worth mentioning. `font-display: swap` will make your content shift from the "web-safe" font to your main font meanwhile `font-display: optional` won't show any content at all.

I went for `font-display: optional` because this gave the user-experience I was aiming to. My blog is full text and the glitch of `font-display: swap` was really bad.

### Check your fallback

With `font-display: swap` is critical to select the correct fallback. If you have a "serif" kind of font and your fallback is "Times new Roman" then it will look very funny.

## Implementation for Gatsby with styled-components

Because I use gatsby with styled-components (emotion) for my blog I will show you how I self-hosted and configured my fonts:

1. Download your font.
2. Copy that to your project. `e.g. static/fonts/Romoto.woff2`
3. Create a js file where we import our fonts.

```javascript
// fonts.js
import RomotoWoff from '../static/fonts/Romoto.woff'
import RomotoWff2 from '../static/fonts/Romoto.woff2'

export { InterUIWoff, InterUIWoff2 }
```

4.  Create a global styled-component where you will import your fonts.

```javascript
// globalFonts.js
import React from 'react'
import { Global, css } from '@emotion/core'
import * as fonts from './fonts'

const GlobalFonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Romoto';
        font-style: normal;
        font-weight: 400;
        font-display: optional;
        src: url("${fonts.RomotoWoff2}") format('woff2'),url("${fonts.RomotoWoff}") format('woff');
      }
    `}
  />
)

export default GlobalFonts
```

5.  Inject your font into your layout.

```javascript
// layout.js
import React from 'react'
import GlobalFonts from './globalFonts'

const Layout = ({ children }) => (
  <>
    <GlobalFonts />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

6. Use your self-hosted font

```css
* {
  font-family: Romoto, sans-serif;
}
```

## Conclusion

Self-host your fonts and think about your font-loading strategy. We should consider performance but if this means giving a non-optimal UX you should think this twice.

## Reference

Docs: [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)
