import React from 'react'
import background from "../../../static/background.webp"
import mountain from "../../../static/mountain.png"
import santa from "../../../static/santa.png"
import { BannerWrapper } from '../style'

const Banner = () => {
  return (
    <BannerWrapper>
        <img className = "background" src={background}/>
        <img className='mountain' src={mountain}/>
        <img className='santa' src={santa}/>
    </BannerWrapper>
  )
}

export default Banner