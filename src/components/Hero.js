import React from 'react'
import './Hero.css';
import Button from './Button';
import RestaurantImage from '../assets/restauranfood.jpg'

export default function Hero() {
  return (
    <article className='main-hero-section'>
        <div className='main-hero-left-div'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <Button text="Reserve Table" width="200px"/>
        </div>
        <div className='main-hero-right-div'>
            <img src={RestaurantImage} alt='Bruchetta'/>
        </div>
    </article>
  )
}
