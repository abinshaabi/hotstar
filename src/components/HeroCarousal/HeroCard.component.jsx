import React from 'react'

const HeroCard = () => {
  return (
    <div style={{width: "1260px", height: "400px", backgroundColor: '#030b16'}} className='flex mx-auto rounded-lg'>
        <div className='w-2/5 pl-12 pt-20 '>
            <h1 className='text-3xl font-bold text-white'>Bhag Milkha Bhag</h1>
            <h3 className='font-medium text-lg text-gray-300 my-2'>Hindi &bull; Biopic &bull; 2013</h3>
            <h2 className='font-medium text-md text-gray-300'>The film chronicles Milkha Singh aka 'The Flying Sikh's,' incredible struggle - from being an orphan to 
                becoming one of India's greatest athletes
            </h2>
        </div>
        <div className='w-8/12 h-full  '>
            {/*<div className='absolute opacity-80 bg-black h-full w-5' style={{transform: "rotate(180deg)" , backgroundImage: "linear-gradient(90deg, rgb(3, 11, 22) 24.97%, rgb(3, 11, 22) 38.3%, rgba(3, 11, 22, 0.04) 97.47%, rgb(3, 11, 22) 100%"}} /> */}
            
            <img className='w-full h-full object-cover rounded-r-lg' src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/9457/1000019457/1000019457-h" alt="" />
        
        </div>
    </div>
  )
}

export default HeroCard