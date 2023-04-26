import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'
const catalogue = () => {
  return (
    <div className='w-full '>
        <Head>
        <title>Catalogue</title>
        </Head>
        <Nav></Nav>
        <div>
            <div className='flex  flex-col  py-16 gap-5  justify-center items-center '>
                <div className='font-gor text-2xl  font-semibold ' >Catalogue</div>
                <Image src="/images/espaceb.png" width={1000} height={1000} className='lg:w-96 sm:w-72' alt="" />
            </div>
        </div>   
        <div className=" mb-8   flex justify-center mb-32">
          <section className='gallery lg:overflow-auto scroll-smooth h-5/6 lg:w-3/4 sm:w-full sm:mx-2	   flex flex-wrap justify-center items-center  gap-2    '>
            <div className=''><Image src="/images/img7.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img14.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img15.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img16.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img18.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img19.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img2.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img20.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img21.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img22.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img13.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img12.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img11.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img17.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img1.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img10.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img9.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img8.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img3.jpeg" className=''  width={1400} height={700} alt="" /></div>
            <div className=''><Image src="/images/img6.jpeg" className=''  width={1400} height={700} alt="" /></div>
            
          </section>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default catalogue
