import React from 'react'
import { SiFsecure, SiHiveBlockchain, SiStrapi, SiVaadin } from 'react-icons/si'
import AboutCard from './AboutCard'

function About() {
  return (
    <div className=' max-w-[1280px] mx-auto py-16 px-4 bg-black text-white'>
        <div className='space-y-12 text-center'>
            <h1>A Growing Protocol System</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt eum obcaecati animi repudiandae pariatur quia alias provident illum iste nihil officia illo quo inventore dolore, ipsa minus vel sed repellat cum, exercitationem, eveniet dolor. 
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Card */}
                <AboutCard icon={<SiHiveBlockchain size={40}/>} heading="Reliable,Temper Proof" details='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste
            neque explicabo laudantium deserunt! Aliquam natus ea totam tempore
            autem perferendis veritatis saepe iure quos officia labore eum
            mollitia possimus sunt nihil, voluptatem eveniet pariatur eos
            dignissimos asperiores impedit rerum.'/>
                <AboutCard icon={<SiStrapi size={40}/>} heading="Building Future,Building Blockchain" details='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste
            neque explicabo laudantium deserunt! Aliquam natus ea totam tempore
            autem perferendis veritatis saepe iure quos officia labore eum
            mollitia possimus sunt nihil, voluptatem eveniet pariatur eos
            dignissimos asperiores impedit rerum.'/>
                <AboutCard icon={<SiFsecure size={40}/>} heading="Solidify Knowledge,Clearify Problem" details='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste
            neque explicabo laudantium deserunt! Aliquam natus ea totam tempore
            autem perferendis veritatis saepe iure quos officia labore eum
            mollitia possimus sunt nihil, voluptatem eveniet pariatur eos
            dignissimos asperiores impedit rerum.'/>
               
                <AboutCard icon={<SiVaadin size={40}/>} heading="Relief From Pain,To Gain" details='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste
            neque explicabo laudantium deserunt! Aliquam natus ea totam tempore
            autem perferendis veritatis saepe iure quos officia labore eum
            mollitia possimus sunt nihil, voluptatem eveniet pariatur eos
            dignissimos asperiores impedit rerum.'/>
            </div>
        </div>
    </div>
  )
}

export default About