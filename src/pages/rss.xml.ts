import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const sorted = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'm4x blog',
    description: 'Another day to Frontend, Performance, React, Javascript',
    site: context.site!.toString(),
    items: sorted.map((post) => {
      const slug = post.data.lang === 'es' ? `es/${post.id}` : post.id;
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || post.data.subtitle || '',
        link: `/${slug}/`,
      };
    }),
  });
}
