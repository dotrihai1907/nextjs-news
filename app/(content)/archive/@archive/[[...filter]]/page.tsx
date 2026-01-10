import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }: { year: string; month?: string }) {
  const availableYears = await getAvailableNewsYears();
  const availableMonths = getAvailableNewsMonths(year);

  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (year && month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  if (year && !month) links = availableMonths;
  else if (year && month) links = [];

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilterNews({ year, month }: { year: string; month?: string }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return <div>{newsContent}</div>;
}

export default async function FilteredNewsPage(props: {
  params: Promise<{ filter?: string[] }>;
}) {
  const { filter } = await props.params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear!} month={selectedMonth} />
      </Suspense>

      <Suspense fallback={<p>Loading news...</p>}>
        <FilterNews year={selectedYear!} month={selectedMonth} />
      </Suspense>
    </>
  );
}
