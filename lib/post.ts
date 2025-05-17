import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';

export async function convertMarkdownToHtml(content: string): Promise<string> {
  const { content: md } = matter(content);
  const processed = await remark()
    .use(remarkGfm)
    .use(html)
    .process(md);
  return processed.toString();
}
