import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
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
                <img src="/images/espaceb.png" className='lg:w-96 sm:w-72' alt="" />
            </div>
        </div>   
        <div className=" mb-8   flex justify-center mb-32">
          <section className='gallery lg:overflow-auto scroll-smooth h-5/6 lg:w-3/4 sm:w-full sm:mx-2	   flex flex-wrap justify-center items-center  gap-2    '>
            <div className=''><img src="/images/img7.jpeg" className=''  alt="" /></div>
            <div className=''><img src="/images/img14.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img15.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img16.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img18.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img19.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img2.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img20.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img21.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img22.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img13.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img12.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img11.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img17.jpeg"  className=''  alt="" /></div>
            <div className=''><img  src="/images/img1.jpeg " className='' alt="" /></div>
            <div className=''><img src="/images/img10.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img9.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img8.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img3.jpeg"  className=''  alt="" /></div>
            <div className=''><img src="/images/img6.jpeg"  className=''  alt="" /></div>
            
          </section>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default catalogue
