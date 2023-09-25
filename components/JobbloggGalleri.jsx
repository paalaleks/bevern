import { fetchPages } from '@/lib/notion';
import Image from 'next/image';
import { LuArrowRight } from 'react-icons/lu';

const postList = await fetchPages();
const firstFourPosts = postList.results.slice(0, 4);

export default function JobbloggGalleri() {
  return (
    <div className="flex justify-center flex-col group">
      <div className="grid sm:grid-cols-2 group-hover:brightness-105 cursor-pointer transition duration-300 ease-in-out">
        {firstFourPosts.map((post) => {
          return (
            <Image
              alt="Bilde fra jobblogg"
              key={post.id}
              src={post.cover.external.url}
              height={650}
              width={650}
              className="object-cover flex h-60 w-full"
            />
          );
        })}
      </div>
      <button className=" px-4 py-3 font-bold group-hover:bg-beige-300 group-hover:bg-opacity-25 transition duration-300 ease-in-out ">
        Gå til joblogg{' '}
        <LuArrowRight className="inline-block group-hover:animate-arrow ml-1" />
      </button>
    </div>
  );
}
