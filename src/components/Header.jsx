import React from 'react'
import logo from "../assets/itb logo-01.png"

const Header = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-5'>
        <img src={logo} alt="logo" className='size-24' />
    </div>
    </>
  )
}

export default Header