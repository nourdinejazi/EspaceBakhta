import React from 'react'
import Image from 'next/image';
import { RiFacebookFill,RiInstagramLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="  relative    z-20 p-4 border border-y-pp border-y-8 grid grid-cols-1  font-quick text-sm">
        <div className="   " >
          <div className='flex  flex-col justify-center items-center gap-2'>
              <div className=' flex flex-col items-center'>
                <Image src="/images/espaceb.png" className='w-44 opacity-70 ' width={1000} height={1000}   alt="" />
                215 Justice Ridge Rd., Candler, NC 28715
                (+216) 23 737 915  •   espace.bakhta.2022@gmail.com
                Privacy Policy
              </div>
                <div className='flex flex-col items-center'>
                  <p className='py-2'>Visitez nous sur</p>
                  <div className='flex gap-5 text-pink-500 opacity-50 '><RiFacebookFill size={20}></RiFacebookFill> <RiInstagramLine size={20}></RiInstagramLine></div>
                </div>
          </div>

          <div className='col-span-2 text-center py-2'>
              ©2023 EspaceBakhta - A Gathering Place       Credits   Website By NourdineJazi
          </div>
        </div>
    </footer>
  )
}

export default Footer
