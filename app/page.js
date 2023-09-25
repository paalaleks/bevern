import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { fetchPages } from '@/lib/notion';
import Image from 'next/image';
import { LuArrowRight } from 'react-icons/lu';

export default async function Home() {
  const postList = await fetchPages();
  const firstFourPosts = postList.results.slice(0, 4);
  return (
    <main className="grid grid-rows-2 relative">
      <div className="relative z-10 min-h-screen grid grid-flow-row max-w-4xl w-full mx-auto ">
        <section className="self-end">
          <div className="flex items-baseline pt-6 pb-3 flex-wrap px-6">
            <Image
              alt="beaver logo"
              src="/beaver.png"
              width={200}
              height={200}
              className="w-36 object-contain"
            />
            <h1 className="text-7xl h-16 pl-4 sm:pl-1 pt-2 sm:pt-0 text-beige-400 font-serif uppercase">
              Bever&apos;n
            </h1>
          </div>
          <p className="leading-relaxed text-lg paddingX">
            Jeg elsker trær, men noen ganger må de fjernes eller beskjæres og da
            gjør jeg gjerne jobben for deg. Står treet vanskelig til kan jeg
            klatre opp og felle det bit for bit, og vil du at jeg kjører alt
            bort ordner jeg det også. Kanskje du vil ha ved istedenfor tre? Da
            kan jeg kløyve og stable det opp til tørk. Hvis du er så heldig å ha
            trær som egner seg til å lage noen unike bordplater eller annet
            interiør av, tar jeg gjerne en kreativ prat om det.
          </p>
        </section>
        <section className="group z-10 relative sm:px-10 pt-5 self-end sm:self-start">
          <div className="grid grid-cols-2 sm:grid-cols-4 group-hover:brightness-105 cursor-pointer transition duration-300 ease-in-out">
            {firstFourPosts.map((post) => {
              return (
                <Image
                  alt="jobb logg bilder"
                  key={post.id}
                  src={post.cover.external.url}
                  height={650}
                  width={650}
                  className="object-cover flex h-full"
                />
              );
            })}
          </div>
          <button className="text-4xl font-serif py-5 text-beige-400 ml-10 sm:ml-0">
            Gå til jobb logg{' '}
            <LuArrowRight className="inline-block group-hover:animate-arrow ml-1 font-serif" />
          </button>
        </section>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
