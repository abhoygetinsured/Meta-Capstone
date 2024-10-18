import React from 'react'
import './About.css'
import photo1 from '../assets/Mario and Adrian A.jpg'
import photo2 from '../assets/Mario and Adrian b.jpg'

export default function About() {
  return (
    <>
        <article className='about-div'>
            <div className='about-left-div'>
                <p className='about-title'>Little Lemon</p>
                <p className='about-location'>Chicago</p>
                <p className='about-desc'>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <div className='about-right-div'>
                <img src={photo1} alt='photo1' className='about-image1'/>
                <img src={photo2} alt='photo2' className='about-image2'/>
            </div>
            
        </article>
    </>
  )
}
