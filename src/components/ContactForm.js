import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_p3jtfog', 'template_yz0r9wv', form.current, 'oFzmgHNgYj7NJlMKE')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   };

   const [email, setEmail] = useState();
   const [name, setName] = useState();
   const [emailDirty, setEmailDirty] = useState(false);
   const [nameDirty, setNameDirty] = useState(false);
   const [emailError, setEmailError] = useState('Email can not be empty');
   const [nameError, setNameError] = useState('Name can not be empty');
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (nameError || emailError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [nameError, emailError])

   const nameHandler = (e) => {
      setName(e.target.value);
      const regex = /^[a-z0-9_.,'"!?;:& ]+$/i;
      if (!regex.test(String(e.target.value).toLowerCase())) {
         setNameError('Please enter in English');
      } else {
         setNameError('');
      }
   }

   const emailHandler = (e) => {
      setEmail(e.target.value);
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!regex.test(String(e.target.value).toLowerCase())) {
         setEmailError('Invalid Input');
      } else {
         setEmailError('');
      }
   }

   const blurHandler = (e) => {
      switch(e.target.name) {
         case 'user_email':
            setEmailDirty(true)
            break
         case 'user_name':
            setNameDirty(true)
            break
      }
   }

  return (
   <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      {(nameDirty && nameError) &&  <div>{nameError}</div>}
      <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="user_name" />
      <label>Email</label>
      {(emailDirty && emailError) &&  <div>{emailError}</div>}
      <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows="6" />
      <input disabled={!formValid} type="submit" value="Send" />
   </form>
  );
};

export default ContactForm;