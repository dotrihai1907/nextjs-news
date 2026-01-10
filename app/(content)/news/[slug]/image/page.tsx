/* eslint-disable @next/next/no-img-element */
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage(
  props: PageProps<"/news/[slug]/image">
) {
  const { slug } = await props.params;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
