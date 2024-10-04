import React from 'react';
import BusinessImg from '../assets/business consulting.jpg';
import RegistrationImg from '../assets/registration.png';
import SignupImg from '../assets/Startimg.jpg';

function Project() {
    return (
        <div id='project' className='flex flex-col py-20 px-5 justify-center bg-secondary text-white'>
            <div className='w-full'> 
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>Project</h1>
                    <p> These are some of my projects. I have built these with HTML, CSS, JS, Bootstrap, React, and MongoDB. Check them out. </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex md:flex-row flex-col px-10 gap-5'>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={BusinessImg} alt="Business Consulting"/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                            <p className='text-center px-5 py-5'>Designed and developed a Business Consulting Website using HTML and CSS, incorporating a professional layout and responsive design.</p>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => window.open('https://github.com/Swathyramarao/Consultancy', '_blank')}>View on GitHub</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={RegistrationImg} alt="Registration Page"/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                            <p className='text-center px-5 py-5'>Developed a responsive Registration Page using HTML and CSS, focusing on user experience and accessibility.</p>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => window.open('https://github.com/Swathyramarao/Registartion', '_blank')}>View on GitHub</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={SignupImg} alt="Sign-up Page"/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                            <p className='text-center px-5 py-5'>I developed a responsive Startup website using React, with MongoDB handling data storage on the backend.</p>
                            <button className='  bg-blue-500  text-white  py-2 px-4 rounded  ' onClick={() => window.open('https://github.com/Swathyramarao/startup', '_blank')}>View on GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
