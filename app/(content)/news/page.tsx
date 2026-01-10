import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
};

export default async function NewsPage() {
  const news = (await getAllNews()) as News[];

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
