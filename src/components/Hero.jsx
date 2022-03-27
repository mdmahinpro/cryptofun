import React from 'react'
import blockchain from '../assets/blockchain.mp4'

function Hero() {
  return (
    <div className='w-full h-[90vh] top-90px'>
        <video className='object-cover w-full h-full absolute z-[-1]' src={blockchain} autoPlay loop muted  />
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-center space-y-3 text-white'>
            <h1>Decentralized</h1>
            <h1><span className='blue'>Trading</span> Protocol</h1>
            <p className='text-xl p-2'>Guranteed Profit with etherum classic ready to be next millionaire</p>
            <div className='space-x-4'>
                <button>Use Defi</button>
                <button>FAQ</button>
            </div>
        </div>
        <div>
            <p className='text-white text-2xl font-bold text-center'>Total Volume Secured : $4242692029602203</p>
        </div>
    </div>
  )
}

export default Hero