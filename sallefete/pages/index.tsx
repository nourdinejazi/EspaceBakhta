import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head'
import Nav from '@/components/Nav'
import { IoBook } from "react-icons/io5";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Espace Bakhta</title>
      </Head>
      <main className="" >
      <div className="relative">
      <Nav></Nav>
        <div className=" flex justify-center  items-center  h-screen bg-[url('/images/mpic.jpg')]   bg-center bg-cover">
            <div className=" flex flex-col gap-5 sm:w-4/5  lg:w-1/3 h-auto bg-white rounded-2xl  ">
                <div className='text-xl text-center  font-quick mt-8'>Bienvenue à</div>
                <div className=' flex justify-center'><div><Image className='w-52' src="/images/espacebgold2.png" width={1000} height={1000} alt="" /></div></div>
                <div className="px-8 text-sm text-center pb-4 ">
                  <p>Equipé de tout ce dont vous avez besoin pour organiser un événement réussi.</p>
                </div>
            </div>
          </div>
      </div>
        <div className="diagonal   relative  z-20   bg-yellow-700  bg-opacity-20  flex flex-col gap-24  ">
            <section className=' mb-8 w-full flex  justify-center lg:gap-96 pt-32 sm:flex-col sm:pb-32 sm:items-center sm:gap-10'>
              <div className="text-4xl  text-yellow-700   font-gor opacity-60"><p>Élégance vintage</p></div>
              <div className='sm:w-7/12 lg:w-2/6	 font-quick  flex-col  '>
                <div className=''>
                Notre espace des fêtes est l'endroit idéal pour célébrer tous vos événements spéciaux. Avec sa décoration festive et accueillante, notre espace peut accueillir des événements de toutes tailles, des petits rassemblements intimes aux grands événements pour des centaines de personnes.Nous offrons une variété de services pour rendre votre événement inoubliable. 
                </div>
                <div className="mt-8">
                  <button className='font-quick sm:w-full px-10 py-4  font-semibold text-white  bg-yellow-700   bg-opacity-40 hover:bg-white hover:border border-yellow-400  hover:text-yellow-600 hover:opacity-40 hover:transition duration-500 rounded  '><Link href='/contact'>Contactez-nous</Link></button>
                </div>
              </div>
            </section>
        </div>

        <div className="  sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2  w-full gap-1  ">
              <Image src="/images/img20.jpeg" className='w-full ' width={8000} height={1000} alt="" />
              <Image src="/images/img7.jpeg" className='w-full 'width={1000} height={1000}  alt="" />
        </div>

        <div className="diagonal relative  z-10  lg:h-96 bg-yellow-700  bg-opacity-20  flex flex-col gap-24  ">
            <section className=' w-full flex  justify-center lg:gap-96 pt-32 sm:flex-col sm:pb-32 sm:items-center sm:gap-10'>
              <div className="text-4xl  text-yellow-700  font-gor opacity-60"><p>Nos Offres</p></div>
              <div className='sm:w-7/12 lg:w-2/6	 font-quick  flex-col  '>
                <div className='font-quick '>
                Nous avons plusieurs options disponibles en fonction de vos besoins et de votre budget.Tout d'abord, nous offrons la location de notre espace de fête pour des événements privés tels que  des mariages, des séminaires , des spectacles   et des fêtes de jardin. 
                </div>
                <div className="mt-8">
                  <button className='font-quick sm:w-full px-10 py-4  font-semibold text-white  bg-yellow-700  bg-opacity-40 hover:bg-white hover:border border-yellow-400  hover:text-yellow-700 hover:opacity-40 hover:transition duration-500 rounded '><Link href='/offres'>Voir Offres</Link></button>
                </div>
              </div>
            </section>
        </div>

        <div className=' flex flex-col items-center w-full h-screen  '>
          <div className="  h-full w-full	bg-[url('/images/contact.jpg')] bg-center bg-cover flex  justify-center items-center	">
                <div className="bg-white w-2/4 sm:flex sm:flex-col sm:items-center  sm:text-sm sm:w-11/12 h-auto flex flex-col items-center rounded-2xl pb-8 ">
                  <div className='py-4'><Image className='sm:w-36 lg:w-48 lg:mx-4' src="/images/original_log.jpg" width={1000} height={1000}  alt="" /></div>
                  <div className="flex  sm:flex-col sm:items-center lg:justify-around px-4">
                      <div className=" lg:w-2/4 sm:w-full  px-2 font-quick">
                        <div className='  sm:text-justify '>
                        <p>
                          Consulter notre catalogue de photos de l'espace de fête, où vous pourrez voir toutes les installations et les décorations que nous proposons.
                        </p>
                        </div>
                        <div className="flex justify-center my-4">
                        <button className='font-quick sm:w-full px-10 py-4  font-semibold text-white  bg-yellow-700  bg-opacity-40 hover:bg-white hover:border border-yellow-400  hover:text-yellow-700 hover:opacity-40 hover:transition duration-500 rounded '><Link className='flex items-center justify-center gap-2'  href='/catalogue'>Catalogue <IoBook></IoBook></Link></button>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
