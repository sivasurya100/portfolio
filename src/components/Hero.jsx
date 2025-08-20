import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export const Hero =() =>  {
      const config = {
        social: {
            twitter: 'https://twitter.com/',
            facebook: 'https://facebook.com/',
            linkedin: 'https://linkedin.com/in/sivasurya2020'
        }
      }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
           <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im SivaSurya 
           <p className='text-2xl'>Im a Python Full-Stack developer</p>
           </h1>
           <div className='flex py-10'>
            <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={50} /></a>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={50} /></a>
            <a href={config.social.linkedin} className=' hover:text-white'><AiOutlineLinkedin size={50} /></a>
           </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}