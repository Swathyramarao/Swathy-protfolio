import React from 'react';
import { AiOutlineLinkedin ,AiOutlineGithub,} from "react-icons/ai";
import IntroImg from '../assets/intro1.jpeg';
function Hero() {
  return (
    <section className='flex md:flex-row flex-col px-5 py-36 bg-secondary justify-center'>
        <div className='w-1/2 flex flex-col'>
       <h1 className=' text-white text-4xl '> Hi,<br/> Im Swathy <span className="text-black">R</span>
       <p className='text -2xl'> Im a Frontend developer</p>
       </h1>
       <div className='flex py-10'>
        <a href='https://www.linkedin.com/in/swathy-r2003' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
        <a href='https://github.com/Swathyramarao' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img  className='md:w-1/4' src={IntroImg}/>
       </section>
    
  )
}

export default Hero;