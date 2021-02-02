import React, { useState } from 'react'
import './Portfolio.css'
import data from '../../data/data'
import Information from '../Information/Information'
import { FaReact, FaAngular } from 'react-icons/fa'
import { SiStyledComponents } from 'react-icons/si'
import { MdDashboard } from 'react-icons/md'
import { IconContext } from 'react-icons'

function Portfolio() {
  const [current, setCurrent] = useState(0)
  const length = data.length

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className='container'>
          {index === current && (
            <div className='portfolio'>
              <div className='portfolio__left'>
                <h4 style={{ color: item.color }}>{item.subtitle}</h4>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <IconContext.Provider value={{ className: 'portfolio__icon' }}>
                  {item.react && <FaReact />}
                  {item.angular && <FaAngular />}
                  {item.styled && <SiStyledComponents />}
                  {item.dashboard && <MdDashboard />}
                </IconContext.Provider>
              </div>

              <div className='portfolio__right'>
                <a href={item.link} target='_blank' rel='noreferrer'>
                  <img
                    className='portfolio__img box--shadow'
                    src={item.image}
                    alt={item.title}
                  />
                </a>
              </div>
              <svg
                className='portfolio__bg'
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill={item.color}
                  d='M23.9,-33.9C33.9,-20.2,46.7,-15.4,51.7,-6.3C56.7,2.8,53.9,16.1,46.8,25.6C39.7,35.1,28.3,40.7,14.7,49.7C1.1,58.8,-14.6,71.1,-28,69.5C-41.3,67.8,-52.1,52.1,-61.9,35.6C-71.6,19,-80.2,1.7,-77.3,-13.5C-74.5,-28.7,-60.2,-41.7,-45.4,-54.5C-30.6,-67.4,-15.3,-80,-4.1,-75.1C7,-70.2,14,-47.6,23.9,-33.9Z'
                  transform='translate(100 100)'
                />
              </svg>
              <Information
                prevProject={prevProject}
                nextProject={nextProject}
                github={item.github}
                link={item.link}
              />
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Portfolio
