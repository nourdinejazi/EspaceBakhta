import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
const addresse = () => {
  return (
    <div>
       <Head>
        <title>Adresse</title>
        </Head>
        <Nav></Nav>
        <div className="lg:grid lg:grid-cols-2 lg:mx-16 lg:mt-16 mb-36 font-quick lg:text-justify">
          <div className=""><Image src="/images/img21.jpeg" width={1000} height={1000}  alt="" /></div>
          <div className='flex  flex-col   gap-5  justify-start items-center '>
                <div className='font-gor text-2xl  font-semibold pt-4 ' >Adresse</div>
                <Image src="/images/espacebgold2.png" className='lg:w-96 sm:w-72'  width={1000} height={1000}  alt="" />
                <p className='lg:px-16 sm:px-8 text-justify '>Nous sommes situés dans un emplacement pratique et facilement accessible pour que vous puissiez facilement rejoindre notre espace de fête.       <a className='underline text-yellow-600' href="https://goo.gl/maps/Q48k5iJyUvZtgUEB7" target="_blank">Veuillez cliquer ici pour la localisation sur Google Maps</a>     , et nous sommes situés à proximité de nombreux centres commerciaux, restaurants et attractions locales. Nous avons amplement de places de stationnement disponibles pour vous et vos invités afin que vous puissiez vous concentrer sur la célébration de votre événement sans avoir à vous soucier de la recherche d'un stationnement. Nous sommes impatients de vous accueillir dans notre espace de fête et de vous offrir une expérience exceptionnelle que vous n'oublierez jamais.</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default addresse
