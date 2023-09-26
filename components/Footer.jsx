import Link from 'next/link';
import { RxNotionLogo } from 'react-icons/rx';
export default function Footer() {
  return (
    <div className="text-xs flex flex-col justify-end items-end pb-4 mr-8 opacity-50 hover:opacity-100">
      <Link
        href={`https://www.paalsportfolio.no`}
        className="inline-flex items-center z-20 relative"
      >
        By Paal A, using <RxNotionLogo className="ml-1" />
      </Link>
    </div>
  );
}
