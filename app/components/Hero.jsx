import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-opacity-90 bg-beige-500">
      <div className="flex flex-col justify-evenly items-center m-auto min-h-screen p-4">
        <Image
          width={596}
          height={671}
          class="max-w-lg w-full"
          alt="hero"
          src="/logo.png"
        />
        <div className="text-center w-full max-w-lg">
          <h1 className="text-8xl font-black text-lighter">Bever&apos;n</h1>
          <p className="mb-4 leading-relaxed text-lg">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
        <div className="flex justify-center space-x-2 w-full">
          <button className="flex justify-center items-center text-light bg-feldgrau border-0 py-3 px-6 focus:outline-none hover:bg-feldgrau-600 rounded text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-image"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className="ml-1">Bildegalleri</span>
          </button>
          <button className="flex justify-center items-center text-light bg-feldgrau border-0 py-3 px-6 leading-5 focus:outline-none hover:bg-feldgrau-600 rounded text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="ml-1">Kontak meg!</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
