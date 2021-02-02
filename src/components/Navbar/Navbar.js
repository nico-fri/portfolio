import React, { useState } from 'react'
import './Navbar.css'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { BiCodeAlt } from 'react-icons/bi'
import Sidebar from '../Sidebar/Sidebar'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick((prevState) => !prevState)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <div className='navbar container'>
        <div className='navbar__logo'>
          <BiCodeAlt /> <a href='/'>Nico.</a>
        </div>
        <div className='navbar__btn' onClick={handleClick}>
          <IconContext.Provider value={{ className: 'navbar__btnIcon' }}>
            {click ? <VscClose /> : <HiOutlineMenuAlt4 />}
          </IconContext.Provider>
        </div>
      </div>
      <Sidebar closeMobileMenu={closeMobileMenu} click={click} />
    </>
  )
}

export default Navbar
