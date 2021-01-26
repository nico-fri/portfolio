import React from 'react'
import './Information.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { AiFillGithub } from 'react-icons/ai'
import { MdOpenInBrowser } from 'react-icons/md'

function Information({ prevProject, nextProject, github, link }) {
  return (
    <div className='information container'>
      <div className='information__left box--shadow'>
        <h4>
          Weitere <br />
          Informationen
        </h4>
        <IconContext.Provider value={{ className: 'information__cardIcon' }}>
          <div className='information__cards'>
            <a href={github} target='_blank' rel='noreferrer'>
              <div className='information__card box--shadow'>
                <AiFillGithub />
              </div>
            </a>
            <a href={link} target='_blank' rel='noreferrer'>
              <div className='information__card box--shadow'>
                <MdOpenInBrowser />
              </div>
            </a>
          </div>
        </IconContext.Provider>
      </div>
      <div className='information__right'>
        <IconContext.Provider value={{ className: 'information__btnIcon' }}>
          <button
            onClick={prevProject}
            className='information__btn box--shadow'
          >
            <BsArrowLeft />
            Prev
          </button>
          <button
            onClick={nextProject}
            className='information__btn box--shadow'
          >
            Next
            <BsArrowRight />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Information
