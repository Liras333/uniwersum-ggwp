import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-4xl ">Nie znaleziono strony</h2>
      <Link href="/" className="text-xl text-primary-300 underline hover:text-primary-200 m-10">&rarr; Wróć nas tronę główną &larr;</Link>
    </section>
  )
}