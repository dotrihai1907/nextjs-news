/* eslint-disable @next/next/no-img-element */
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage(
  props: PageProps<"/news/[slug]/image">
) {
  const { slug } = await props.params;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
