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
  s.src = 'https://m4x-io.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>
  `

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Comments
