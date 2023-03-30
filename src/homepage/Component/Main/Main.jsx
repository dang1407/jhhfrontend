import React, { useEffect } from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import './main.scss'
import img from '../../assets/imgs/homestay.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  },

  {
    id: 2,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  },

  {
    id: 2,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  },

  {
    id: 4,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  },

  {
    id: 5,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  },

  {
    id: 6,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and advencturous activities'
  }
]

const Main = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>
      
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* use high ordfer array method (map), use list of object in one array */}
        {
          Data.map(( {id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div className="singleDestination" key={id}>
                
                <div className="imageDiv">
                  <img src={imgSrc} alt= {destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle"> {destTitle} </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span> {grade} <small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>



                    <div className="desc">
                      <p> {description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>
                </div>
                


              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main