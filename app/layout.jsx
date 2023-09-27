import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import localFont from 'next/font/local';

const mogra = localFont({
  src: 'fonts/Mogra-Regular.ttf',
  display: 'swap',
  variable: '--font-mogra',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakartaSans',
});

export const metadata = {
  title: `Bevern's - Willy Fladby`,
  description: `Bevern's nettside. Kontakt meg og se på prosjektene mine.`,
  image: '/treeclimber_green.png',

  ogSiteName: `Bevern's - Willy Fladby`,
  ogLanguage: `no_NO`,
  ogUrl: `https://bevern.no`,
  ogTitle: `Bevern's - Willy Fladby`,
  ogDescription: `Bever's nettside. Kontakt meg og se på prosjektene mine.`,
  ogImage: '/treeclimber_green.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mogra.variable} ${jakartaSans.variable}  bg-sea_green-300 text-beige font-sans`}
      >
        <div className="fixed z-0 right-0 bg-[url('/treeclimber_green.png')] min-h-screen w-[633px] bg-no-repeat bg-right opacity-50" />
        {children}
      </body>
    </html>
  );
}
