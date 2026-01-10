/* eslint-disable @next/next/no-img-element */
import { News } from "@/types";
import Link from "next/link";

export default function NewsList({ news }: { news: News[] }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id} className="news-item">
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />

            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
