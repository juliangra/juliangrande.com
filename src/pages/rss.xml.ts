import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${SITE.name} — Blog`,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace(/\.mdx?$/, '')}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en</language>`,
    stylesheet: false,
  });
}
