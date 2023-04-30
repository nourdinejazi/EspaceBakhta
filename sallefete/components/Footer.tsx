import React from 'react'
import Image from 'next/image';
import { RiFacebookFill,RiInstagramLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="  relative    z-20 p-4 border border-y-yellow-600 border-y-2 grid grid-cols-1  font-quick text-sm">
        <div className="   " >
          <div className='flex  flex-col justify-center items-center gap-2'>
              <div className=' flex flex-col items-center gap-2'>
                <Image src="/images/espacebgold2.png" className='w-44  ' width={1000} height={1000}   alt="" />
                <p>Av Dali Jazi, AFH Nabeul RR28, (+216) 23 737 915  •  </p>
                <p> espace.bakhta.2022@gmail.com</p>
              </div>
                <div className='flex flex-col items-center'>
                  <p className='py-2'>Visitez nous sur</p>
                  <div className='flex gap-5 text-yellow-600  '><a href="https://www.facebook.com/espacebakhta/" target="_blank"><RiFacebookFill size={20}></RiFacebookFill></a> <a href="https://www.instagram.com/espace_bakhta/" target="_blank"><RiInstagramLine size={20}></RiInstagramLine></a></div>
                </div>
          </div>

          <div className='col-span-2 text-center py-2'>
              ©{new Date().getFullYear()} EspaceBakhta - A Gathering Place       Credits   Website By NourdineJazi
          </div>
        </div>
    </footer>
  )
}

export default Footer
