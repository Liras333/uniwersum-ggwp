import {Jost} from 'next/font/google' 
//Imperial Script 
import icon from '@/public/favicon.ico'
import Header from "@/app/_components/Header";
import "@/app/_styles/global.css";
import Footer from './_components/Footer';


export const metadata = {
  title: {
    template: '%s | Uniwersum G.G.W.P.',
		default: 'Witaj w Uniwersum G.G.W.P.'
  },
  description: "Uniwersum G.G.W.P. Jest to wielki zbiór historii które miały miejsce na przestrzeni ponad 5 Epok ( około 12 500 lat). Wszystkie te wydarzenia miały miejsce na różnych światach.",
  icon: icon,
  authors: [
    {name: 'Patryk Migała', url: 'https://www.linkedin.com/in/patryk-miga%C5%82a/'}
  ]
};

const jostear = Jost ({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',

})

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${jostear.className}  bg-secondary-900 grid grid-cols-1 grid-rows-[5rem_auto_1fr]  min-h-screen`}>
        <Header/>
        <hr className=" border-secondary-700 mx-10 mb-15"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
