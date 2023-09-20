import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-opacity-90 bg-beige-500 mx-auto">
      <div className="flex flex-col justify-evenly items-center min-h-screen px-4 bg-beige-300 max-w-lg mx-auto">
        <Image
          width={596}
          height={671}
          class="max-w-lg w-full max-h-fit h-full"
          alt="hero"
          src="/beaver.jpg"
        />
        <p className="mb-4 leading-relaxed text- py-4">
          <strong>Her kommer nettsiden til Bever'n,</strong> også kjent som
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
    </section>
  );
};

export default Hero;
