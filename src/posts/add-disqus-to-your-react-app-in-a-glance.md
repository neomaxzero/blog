---
title: 'Add disqus to your react app in a glance'
subtitle: 'comments'
date: '2019-11-27'
topic: 'react'
description: 'react comments: How to add disqus to your react app'
tags: 'react, disqus, comments, modules'
---

# Add disqus to your react app in a glance

I recently started adding more content to my blog and in the process I decided to have a communication channel with my audience, if there's any, would be quite useful.

Disqus it's a _"comment as a service"_ platform that give you all the tools you need to have this feature on your application in _literally 5 mins_.

## Let's get it on

1. Create a disqus account, if you don't have it yet.
2. Add the component that is going to load the disqus comment box to your app.

```javascript
// Comments.js
import React, { useEffect } from 'react'

const Comments = ({ fullUrl, id }) => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script'
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function() {
        this.page.url = fullUrl
        this.page.identifier = id
      }

      const d = document
      const s = d.createElement('script')
      s.src = 'https://MYDISQUS.disqus.com/embed.js' // REPLACE THIS LINE WITH YOUR DISQUS LINE
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }, [])
  return <div id="disqus_thread"></div>
}

export default Comments
```

3. Use it in your app whenever you want to add comments:D

```javascript
// Post.js
import React from 'react'
import Comments from './Comments'

const Post = ({ url, id }) => (
  <>
    <RestOfThePost />
    <Comments fullUrl={url} id={id} />
  </>
)

export default Post
```

4. Make sure you add the url of the page you are taking comments for and an id.
5. Wait for the awesome comments from your followers.

## Is that all I need?

Yes! Incredible, that's all that you need to use disqus. Make sure to add comments yourself to be sure you are sending the right url and id. Stay longer if you want the rest of the story...

## Extra: Juice of the story

While doing some research on how to add this I encounter a couple of options that I could try on:

First,I tried adding the snippet of code that it's in the disqus wizzard.

I turned into a component with the famous `dangerouslySetInnerHTML` and It looked like this

```javascript
import React from 'react'

const Comments = ({ fullUrl, id }) => {
  const html = `
  <div id="disqus_thread"></div>
  <script>
  var disqus_config = function () {
  this.page.url = '${fullUrl}';
  this.page.identifier = '${id}';
  };
  (function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://MYDISQUS.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>
  `

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Comments
```

But, this didn't work out of the box. Every time the client side routing was switching components it was behaving quite awful. Also, I was adding a new script everytime the component was mounting. 

Yes, I know it was waaay to mvp. But it worked, 2 out 10 times :P

Second tried was using the npm module [disqus-react](https://github.com/disqus/disqus-react) that disqus provides but I was skeptical of how would this be much different from the web approach and if you look at the code...

```javascript
// file: https://github.com/disqus/disqus-react/blob/master/src/DiscussionEmbed.jsx

// ..lots of react code
 loadInstance() {
        const doc = window.document;
        if (window && window.DISQUS && doc.getElementById('dsq-embed-scr')) {
            window.DISQUS.reset({
                reload: true,
                config: this.getDisqusConfig(this.props.config),
            });
        } else {
            window.disqus_config = this.getDisqusConfig(this.props.config);
            window.disqus_shortname = this.props.shortname;
            insertScript(`https://${this.props.shortname}.disqus.com/embed.js`, 'dsq-embed-scr', doc.body);
        }
  }
// ..lots of react code
```

...and if you look at the code, It isn't.

I didn't install the npm module and tried it out because at this point I have learnt enough about what I need to do to make it work without another black box in my proyect.

So, a couple of tries more and I ended up with this small, in house component that does exactly that. - [useDisqus](https://github.com/neomaxzero/useDisqus)

In this story of adding a "simple" component. I hope you can relate with the thought process to decide what to do at any given time when picking a new library.

**If you read this far, thank you and give me a sign ( like, comment, email, etc) that you want to keep reading about my day to day struggles.**

I have a tendency of over analyzing simple stuff which sometimes are good for stories but not that much for your productivity.

_PS:_ it took me more than 50 mins to add disqus and I hope you can do it in 5 mins. (10x factor)?
