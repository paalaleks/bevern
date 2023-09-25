import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-screen grid">
      {/* <Image
        width={596}
        height={671}
        class="w-full mx-auto object-contain max-h-fit h-full"
        alt="hero"
        src="/beaver.jpg"
      /> */}
      <div className="px-12 sm:px-6 lg:px-8 self-center">
        <div className="h-10"></div>
        <p className="leading-relaxed text-lg">
          <strong>Her kommer nettsiden til Bever&apos;n,</strong> også kjent som
          Willy Fladby. Jeg elsker trær, men noen ganger må de fjernes eller
          beskjæres og da gjør jeg gjerne jobben for deg. Står treet vanskelig
          til kan jeg klatre opp og felle det bit for bit, og vil du at jeg
          kjører alt bort ordner jeg det også. Kanskje du vil ha ved istedenfor
          tre? Da kan jeg kløyve og stable det opp til tørk. Hvis du er så
          heldig å ha trær som egner seg til å lage noen unike bordplater eller
          annet interiør av, tar jeg gjerne en kreativ prat om det. Jeg er
          bosatt i Trysil, men kan ta på meg oppdrag over hele Innlandet.
          Forsikret gjennom gjensidige. Org.nr. 930775096 Ta kontakt, så lager
          vi en avtale!
        </p>
      </div>
    </div>
  );
};

export default Hero;
