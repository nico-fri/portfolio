import React from 'react'
import './Sidebar.css'
import { AiFillGithub } from 'react-icons/ai'
import data from '../../data/data'
import { BiCodeAlt } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'

function Sidebar({ closeMobileMenu, click }) {
  return (
    <div className='sidebar'>
      {click && (
        <div className='sidebar__wrapper' onClick={closeMobileMenu}></div>
      )}
      <ul
        className={
          click ? 'sidebar__menu sidebar--active box--shadow' : 'sidebar__menu'
        }
      >
        <div>
          <div className='sidebar__logo'>
            <BiCodeAlt /> <a href='/'>Nico.</a>
          </div>
          {data.map((item, id) => (
            <li key={id} className='sidebar__links'>
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='sidebar__link'
                onClick={closeMobileMenu}
              >
                {item.title}
              </a>
            </li>
          ))}
          <div className='sidebar__cardWrapper'>
            <a
              href='https://github.com/nico-fri'
              target='_blank'
              rel='noreferrer'
            >
              <div className='sidebar__card'>
                <IconContext.Provider
                  value={{ className: 'sidebar__cardIcon' }}
                >
                  <AiFillGithub />
                </IconContext.Provider>
              </div>
            </a>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
