
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import "../Styles/landing.css"

const Landing = () => {
  const navigate = useNavigate()


  const handleClick = (e) => {
    navigate("/howto")
  }
  return (
    <div className="landing-container bg-black h-screen md:h-auto">
      <h1 className='text-6xl font-bold text-white text-center  mb-10 p-6' style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>TNW</h1>
        <div className='landing-img-container p-4'>
          <img className='landing-img w-full aspect-auto border rounded-lg ' src= "https://res.cloudinary.com/dhx9ogsz5/image/upload/c_crop,ar_16:9/v1717771875/A_military_submarine_approaching_a_war_scene_lzcqbw.jpg"
          alt="img-of-sailor-at-sea"
          />
          <button
          className="p-2 text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-wine/90 hover:bg-forest-btn text-white py-2 px-4 rounded animate-pulse pt-3"
          onClick={() => handleClick()}
          style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>Play Game Here</button>
          <span className=' text-yellow-400' style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>Enter the Field... If you dare '_'</span>
        </div>
    </div>
  )
}

export default Landing