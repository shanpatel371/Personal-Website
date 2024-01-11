import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q48owpi', 'template_6jevd9r', form.current, '1ut8msLYA5Bli_Mf4')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='contacts' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contacts
                </p>
                <p className='text-red-300 py-4'> //Sorry the contact form has some issue with the emailjs library,
                    just send me an email at shanpatel371@gmail.com or click the email icon on the left</p>
            </div>

            {/* form inputs */}
            <input name='user_name' className='bg-[#ccdf6] my-4 p-2' type="text" placeholder='Name' />
            <input name='user_email' className='my-4 p-2' type="email" placeholder='Email' />
            <textarea name='message' className='my-4 p-2 bg-[#ccdf6]' cols="1" rows="10" placeholder='Message'></textarea>
            <button type='submit' value='send' className='my-4 px-10 py-2 border-2 text-white hover:bg-red-300 border-red-300 flex mx-auto'>Submit</button>
        </form>
    </div>

//     <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>


//     {/* form inputs */}
//     <input name='user_name' className='bg-[#ccdf6] my-4 p-2' type="text" placeholder='Name' />
//     <input name='user_email' className='my-4 p-2' type="email" placeholder='Email' />
//     <textarea name='message' className='my-4 p-2 bg-[#ccdf6]' cols="1" rows="10" placeholder='Message'></textarea>
//     <input type="submit" value='Send' />
// </form>
  )
};
export default Contacts