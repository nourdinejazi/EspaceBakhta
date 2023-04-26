import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdClose, } from "react-icons/io";
import { IoBook,IoLocationSharp,IoCheckmarkSharp ,IoCall} from "react-icons/io5";
import Image from 'next/image';
const Nav = () => {

  const [active,setActive]=useState(false)
  function handleActive(){
    setActive(!active)
  }

  return (
    <nav className=' font-quick z-50 sticky top-0 shadow-md    '>
        <div className="h-32	 bg-white sm:flex sm:justify-between sm:px-8 lg:flex lg:justify-center items-center  lg:px-8   ">
            <ul className='font-semibold text-md flex items-center gap-20 sm:hidden'>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/adresse'>Adresse</Link></li>
                    <li className='sm:hidden'><Link href="/"><Image className='w-40' src="/images/logo-no-background.png" width={1000} height={1000}  alt="" /></Link></li>
                    <li ><Link href='/offres'>Nos Offres</Link></li>
                    <li><Link href='/catalogue'>Catalogue</Link></li>
                </ul>
            <div className="lg:hidden"><Link href="/"><Image className='w-28'  src="/images/logo-no-background.png" width={1000} height={1000}  alt="" /></Link></div>
            <button className='font-semibold text-xl lg:hidden' onClick={handleActive} >Menu</button>
        </div>
        <div className={`fixed  top-0 	  w-full h-full bg-white text-pink-400 lg:hidden ${active ? 'left-0 transition-all duration-1000 ' : 'left-[-100%] transition-all duration-1000 ' }  `}>
            <div className='flex justify-end pr-4 py-4'>
            <IoMdClose size={30} onClick={handleActive} className=''></IoMdClose>
            </div>
            <ul className='font-semibold text-2xl flex flex-col  items-start  gap-10 pl-4 '>
                    <div className='flex  gap-5 items-center'>
                    <li><Link href='/contact'>Contact</Link></li><IoCall></IoCall>
                    </div>
                    <div className='flex  gap-5 items-center'>
                    <li><Link href='/adresse'>Adresse</Link></li><IoLocationSharp></IoLocationSharp>
                    </div>
                    <div className='flex  gap-5 items-center'>
                    <li><Link href='/catalogue'>Catalogue</Link></li><IoBook></IoBook>
                    </div>
                    <div className='flex  gap-5 items-center'>
                    <li><Link href='/offres'>Nos Offres</Link></li><IoCheckmarkSharp></IoCheckmarkSharp>
                    </div>
                </ul>
        </div>
    </nav>
  )
}

export default Nav

