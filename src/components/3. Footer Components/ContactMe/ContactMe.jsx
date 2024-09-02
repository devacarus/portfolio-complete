import React, { useRef, useState } from 'react';
import './ContactMe.css';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../../your_info';
import { useToast } from "react-toast-master";

const ContactMe = () => {
  const [from_name, setName] = useState('');
  const [from_email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const { toastMaster, hideToast } = useToast();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const params = {from_name, from_email, message}
    const { serviceID, templateID, publicKey } = emailConfig;
    setSending(true);
    emailjs
      .send(serviceID, templateID, params, {
        publicKey: publicKey,
      })
      .then((result) => {
        console.log(result.text);
        setSending(false)
        toastMaster({
          type: "successWhite",
          message: "Message was sent successfully!\nThank you for contacting me.",
          bg: "gray",
          align: "center",
        })
        const timeoutId = setTimeout(hideToast,3000);
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        setSending(false)
        toastMaster({
          type: "errorWhite",
          message: "Message send failed!\nPlease try again.",
          bg: "gray",
          align: "center",
        })
        console.log(`Email send error: ${error.text}`);
      });
  };

  return (
    <section id='ContactMe'>
      <div className='form-container wow fadeInRight' data-wow-delay='.4s'>
        <div className='contact-form-wrapper d-flex justify-content-center'>
          <form onSubmit={sendEmail} className='contact-form'>
            <h5 className='title'>Contact Me</h5>
            <p className='description'>
              Feel free to contact me if you like to reach out or have any
              questions.
            </p>
            <div>
              <input
                type='text'
                className='form-control rounded border-white mb-3 form-input'
                name='from_name'
                placeholder='Name'
                onChange={(e)=>setName(e.target.value)}
                value={from_name}
                required
              />
            </div>
            <div>
              <input
                type='email'
                className='form-control rounded border-white mb-3 form-input'
                name='from_email'
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                value={from_email}
                required
              />
            </div>
            <div>
              <textarea
                className='form-control rounded border-white mb-3 form-text-area'
                name='message'
                rows='5'
                cols='30'
                placeholder='Message'
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
            </div>
            <div className='submit-button-wrapper' data-wow-delay='.6s'>
            {sending ? (
              <button type='submit' className='submit-button' disabled={true}>
                Sending...
              </button>
            ): (
              <button type='submit' className='submit-button'>
                Send
              </button>
            )}
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
