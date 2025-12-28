"use client";

/* eslint-disable @next/next/no-img-element */
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

export default function InterceptedImagePage(
  props: PageProps<"/news/[slug]/image">
) {
  const { slug } = use(props.params);

  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
