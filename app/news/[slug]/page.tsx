/* eslint-disable @next/next/no-img-element */
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { use } from "react";

export default function NewsDetailPage(props: PageProps<"/news/[slug]">) {
  const { slug } = use(props.params);

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) notFound();

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>

      <p>{newsItem.content}</p>
    </article>
  );
}
