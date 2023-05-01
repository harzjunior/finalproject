import React from 'react'
import '../style/services.css'
import Myxen from '../img/Myxen.png'
import Zyris from '../img/Zyris.png'
import Nylarion from '../img/Nylarion.png'
import ImgBox from './ImgBox'



const Services = () => {
  return (
    <section className='service_wapper'>
        <h1> Services Stanley Realtor Provides</h1>
        <div className='service'>

       <ImgBox img={Myxen} title="Investment"/>
       <ImgBox img={Nylarion} title="Brokerage"/>
       <ImgBox img={Zyris} title="Management"/>
       </div>

    </section>
  )
}

export default Services;