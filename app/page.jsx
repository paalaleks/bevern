import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchPages } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default async function Home() {
  const postList = await fetchPages();
  const firstFourPosts = postList.results.slice(0, 4);
  return (
    <main className="grid grid-flow-row relative">
      <div className="relative z-10 min-h-screen grid grid-flow-row max-w-4xl w-full mx-auto ">
        <section className="self-end max-w-2xl mx-auto">
          <div className="flex justify-start items-baseline pt-8 pb-3 flex-wrap px-6">
            <Image
              alt="beaver logo"
              src="/beaver.png"
              width={200}
              height={200}
              className="w-36 object-contain"
            />
            <h1 className="text-7xl h-16 pl-4 sm:pl-1 pt-2 sm:pt-0 text-beige-300 font-serif uppercase">
              Bever&apos;n
            </h1>
          </div>
          <p className="leading-relaxed text-lg px-5 sm:px-10">
            <br />
            Nettsiden er under arbeid.
            <br />
            <br />
            Jeg heter <strong>Willy Fladby</strong> og jeg elsker trær, men noen
            ganger må de fjernes eller beskjæres, og da gjør jeg gjerne jobben
            for deg. Står treet vanskelig til kan jeg klatre opp og felle det
            bit for bit, og vil du at jeg kjører alt bort ordner jeg det også.
            Kanskje du vil ha ved istedenfor tre? Da kan jeg kløyve og stable
            det opp til tørk. Hvis du er så heldig å ha trær som egner seg til å
            lage noen unike bordplater eller annet interiør av, tar jeg gjerne
            en kreativ prat om det.
            <br />
            <br />
            Det har dessverre vært litt tekniske problemer med kontaktskjemaet
            på nettsiden. Så hvis du har forsøkt å komme i kontakt med meg, men
            ikke fått svar, må du gjerne ringe meg eller sende meg en sms. Håper
            vi snakkes!
          </p>
        </section>
        <Link
          href="/jobb-logg"
          className="group z-10 relative pt-8 self-end sm:self-start"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 group-hover:brightness-110 transition duration-300 ease-in-out shadow-sm">
            {firstFourPosts.map((post) => {
              return (
                <Image
                  alt="jobb logg bilder"
                  key={post.id}
                  src={post.cover.external.url}
                  height={650}
                  width={650}
                  className="object-cover h-full"
                />
              );
            })}
          </div>
          <div className="flex justify-center py-8">
            <button className="text-3xl sm:text-4xl font-serif text-beige-400 ">
              Gå til jobb logg{" "}
              <LuArrowRight className="inline-block group-hover:animate-arrow ml-1 font-serif" />
            </button>
          </div>
        </Link>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
