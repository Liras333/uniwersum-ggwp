import Image from 'next/image'
import baner from '@/public/baner.jpg'
import Link from 'next/link';

export default function Page() {
  return (
   <div className="mt-40">
    <Image src={baner} fill className="object-cover object-top" placeholder="blur" alt="b"/>
    <div className="relative flex justify-center align-middle">
      <Link  className="z-102 underline-offset-25 underline opacity-80 text-3xl px-6 py-4 font-bold text-primary-300 hover:opacity-100 transition-opacity " href="/glowna">
          &rarr; Wejdź do Uniwersum G.G.W.P. &larr;
      </Link>
    </div>
   </div>
  );
}
