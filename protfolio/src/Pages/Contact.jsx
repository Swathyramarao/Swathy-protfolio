import React from 'react';


function Contact() {
  return (
    <section id='contact' className='flex flex-col bg-secondary px-5 pb-20 py-32 text-white' >
     <div className='flex flex-col items-center justify-center'>
       
          <h1 className='text-4xl text-blue-950 border-b-4 mb-5 w-[140px] font-bold'>Contact</h1>
          <p className='pb-4 '>If you want to discussmore in detail, Please contact me.</p>
         <p className='py-2'> <span className='font-bold'> Email:</span> swathy1883@gmail.com</p>
         <p className='py-2'> <span className='font-bold'> Phone:</span> 9345612581</p>
        </div>
    
    </section>
  );
}

export default Contact;
