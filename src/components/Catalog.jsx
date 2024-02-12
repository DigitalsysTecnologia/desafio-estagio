import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Styles from '../style/Catalog/catalog.module.css'
import MissionIMG from '../assets/mission-img.png'
import HeroIMG from '../assets/hero-img.png'

function Catalog() {
  return (
    <>
    <Navbar></Navbar>
    <div className={Styles.content}>
        <div className={Styles.missao}>
            <img src={MissionIMG} alt=""/>
            <Button></Button>
        </div>
        <div className={Styles.hero}>
            <img src={HeroIMG} alt=""/>
            <Button></Button>
        </div>
    </div>
    </>
  )
}

export default Catalog