import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
const contact = () => {
  return (
    <div>
        <Head>
        <title>Contact</title>
        </Head>
        <Nav></Nav>
        <div>
            <div className='flex  flex-col  py-16 gap-5  justify-center items-center '>
                <div className='font-gor text-2xl  font-semibold ' >Contact</div>
                <Image src="/images/espaceb.png" className='lg:w-96 sm:w-72' width={1000} height={1000}  alt="" />
            </div>
        </div>  
        <div className="lg:grid lg:grid-cols-2 lg:mx-16 sm:flex sm:flex-col sm:order2 sm:gap-5 mb-32 ">
            <div className="font-quick lg:flex lg:flex-col lg:justify-center h-full items-start lg:pr-32 lg:pl-8 sm:mx-8">
            <p className='font-gor lg:text-4xl sm:text-3xl font-semibold lg:py-4 text-amber-900	'>Contacter-nous</p>
            <p className=' lg:pb-4'>Nous sommes ravis de vous offrir notre espace de fête pour rendre votre événement spécial et mémorable. Notre équipe dévouée est là pour vous aider à organiser votre fête en fonction de vos besoins et de vos préférences. Que vous planifiez un anniversaire, une réunion de famille ou une fête d'entreprise, nous sommes là pour vous aider à faire de votre événement un succès. N'hésitez pas à nous contacter sur <span className='underline text-pink-400'>Tél 23 737 915</span> pour plus d'informations sur nos services et pour réserver notre espace pour votre prochaine fête. Nous avons hâte de vous aider à créer des souvenirs inoubliables!</p>
            </div>
            <div className="lg:flex items-end sm:order1">
                <Image src="/images/img5.jpeg" width={1000} height={1000}  className='min-w-full min-h-full' alt="" />
            </div>
            <div className="lg:flex items-start justify-end sm:order-4">
                <Image src="/images/img9.jpeg" className='min-w-full min-h-full	 ' width={1000} height={1000} alt="" />
            </div>
            <div className="sm:order-3 sm:mx-8">
                <div className=" font-quick lg:flex lg:flex-col lg:justify-center h-full items-start lg:pr-32 lg:pl-8 ">
                <p className='font-gor lg:text-4xl sm:text-3xl font-semibold lg:py-4  text-amber-900'>Notre Espace</p>
                <p>Dans l'ensemble, l'espace Bakhta est un lieu polyvalent et convivial qui peut répondre aux besoins d'une variété d'événements, qu'il s'agisse de mariages, de spectacles, de cérémonies ou de séminaires. Avec ses installations modernes, ses équipements de qualité et son espace vert aménagé, l'espace Bakhta offre un cadre idéal pour les événements les plus divers.</p>
                <p className='lg:pt-4 lg:pb-4'>Nous sommes heureux de discuter de vos besoins et de personnaliser une offre qui répond à vos attentes. N'hésitez pas à nous contacter pour plus d'informations ou pour réserver notre espace pour votre événement.</p>
                </div>
            </div>
        </div>    


        <Footer></Footer>
    </div>
  )
}

export default contact
