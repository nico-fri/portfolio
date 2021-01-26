import React, { useState } from 'react'
import './Navbar.css'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { BiCodeAlt } from 'react-icons/bi'
import data from '../../data/data'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
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
      <ul className={click ? 'navbar__menu navbar--active' : 'navbar__menu'}>
        {data.map((item, id) => (
          <li key={id} className='navbar__links'>
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              className='navbar__link'
              onClick={closeMobileMenu}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
