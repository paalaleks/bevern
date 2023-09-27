import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchPages } from '@/lib/notion';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function page() {
  const postList = await fetchPages();
  if (!postList) notFound;

  return (
    <section className="max-w-2xl mx-auto relative z-10 mb-24 px-4">
      <Link
        href="/"
        className="flex justify-center items-center py-8 group text-beige-300"
      >
        <FaArrowLeft className="group-hover:animate-arrow mr-1" />
        <span className="font-serif">Tilbake</span>
      </Link>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {postList.results.map((post) => {
            return (
              <div key={post.id}>
                <Image
                  alt={post.properties.Name.title[0].plain_text}
                  src={post.cover.file.url}
                  width={500}
                  height={500}
                  className="h-full max-h-72 object-cover rounded-xl"
                />
                <h2 className="font-serif text-xl mt-1">
                  {post.properties.Name.title[0].plain_text}
                </h2>
                <p>{post.properties.Description.rich_text[0].plain_text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
