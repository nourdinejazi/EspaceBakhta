import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
const offres = () => {
  return (
    <div>
        <Head>
        <title>Offres</title>
        </Head>
        <Nav></Nav>
        <div className='flex flex-col w-full font-quick    items-center mb-32'>
            <div className='flex  flex-col  py-16 gap-5  justify-center items-center '>
                <div className='font-gor text-2xl  font-semibold ' >Nos Offres</div>
                <Image src="/images/espaceb.png" className='lg:w-96 sm:w-72' width={1000} height={1000}  alt="" />
            </div>
            <div className=' w-3/4 flex  flex-col gap-16 ' 	  >
                <p>
                Espace Bakhta dispose également d'un espace vert aménagé qui peut être utilisé pour des cérémonies de mariage en plein air, des fêtes de jardin ou tout simplement pour offrir un cadre naturel et agréable pour les invités. L'espace vert comprend également des installations telles qu'une piste de danse, des aires de jeux pour enfants, 
                En plus de ces équipements, l'espace Bakhta propose également des services de traiteur pour les événements, avec une variété de menus adaptés aux différents goûts et budgets. Les organisateurs peuvent choisir parmi une gamme de buffets, de menus à la carte ou de plats spéciaux pour les occasions spéciales. Le personnel de l'espace Bakhta peut également aider les organisateurs à planifier et à organiser leur événement, en fournissant des conseils et une assistance pour les aspects logistiques de l'événement.
                </p>
                <div className="flex flex-col sm:gap-6">
                    <div className="border-l-2 border-pink-400 m-2 p-2">
                    <span className='font-gor text-xl font-semibold'>Offre mariage</span> : Cette offre peut inclure la location de la salle de mariage, l'utilisation de l'espace vert pour la cérémonie de mariage, la décoration de la salle, le service traiteur pour le dîner et le dessert, les boissons et les animations musicales pour la soirée dansante.
                    </div>

                    <div className="border-l-2 border-pink-400 m-2 p-2">
                    <span className='font-gor text-xl font-semibold'>Offre séminaire</span> : Cette offre peut inclure la location de la salle de séminaire, l'utilisation de l'espace vert pour les pauses et les activités de team building, l'équipement audiovisuel pour les présentations, le service traiteur pour les déjeuners et les pauses café...
                    </div>

                    <div className="border-l-2 border-pink-400 m-2 p-2">
                    <span className='font-gor text-xl font-semibold'>Offre fête de jardin</span> : Cette offre peut inclure la location de la salle de fête, l'utilisation de l'espace vert pour les activités en plein air, la décoration de la salle et de l'espace vert, le service traiteur pour le dîner et le dessert, les boissons et les animations pour la soirée.
                    </div>

                    <div className="border-l-2 border-pink-400 m-2 p-2">
                    <span className='font-gor text-xl font-semibold'>Offre spectacle</span> :  Cette offre peut inclure la location de la salle pour le spectacle, l'utilisation de l'espace vert pour les stands de nourriture et de boissons, la scène et l'équipement technique pour la performance, la sécurité pour les invités, et la gestion de la billetterie et de la promotion.
                    </div>
                </div>
                <p>
                Ces offres peuvent être personnalisées en fonction de vos besoins et de votre budget. Les organisateurs de l'espace Bakhta peuvent travailler avec vous pour créer une offre qui répond à vos attentes et qui assure la réussite de votre événement , pour tout informations complémentaires appelez nous sur <span className='underline text-pink-400'>Tél 23 737 915</span>.
                </p>
            </div>
        </div> 
        <Footer></Footer>
    </div>
  )
}

export default offres
