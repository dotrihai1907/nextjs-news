"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news data.");
        setIsLoading(false);
      }

      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
