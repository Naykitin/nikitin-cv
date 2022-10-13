import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
   const form = useRef();
   const [email, setEmail] = useState();
   const [name, setName] = useState();
   const [emailDirty, setEmailDirty] = useState(false);
   const [nameDirty, setNameDirty] = useState(false);
   const [emailError, setEmailError] = useState('Email can not be empty');
   const [nameError, setNameError] = useState('Name can not be empty');
   const [formValid, setFormValid] = useState(false);
   const [result, setResult] = useState();
   const [flip, setFlip] = useState(false);

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_p3jtfog', 'template_yz0r9wv', form.current, 'oFzmgHNgYj7NJlMKE')
       .then((result) => {
           console.log(result.text);
           if (result = 'OK') {
            setResult('Message successfully sent :)');
           } else {
            setResult('Something went wrong :(');
           }
       }, (error) => {
           console.log(error.text);
       }).then(setFlip(true));
   };

   useEffect(() => {
      if (nameError || emailError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [nameError, emailError])

   const nameHandler = (e) => {
      setName(e.target.value);
      const regex = /^\d+/;
      if (regex.test(String(e.target.value).toLowerCase())) {
         setNameError('Invalid name');
      } else {
         setNameError('');
      }
   }

   const emailHandler = (e) => {
      setEmail(e.target.value);
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!regex.test(String(e.target.value).toLowerCase())) {
         setEmailError('Invalid email');
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
   <div className={`contact__form ${flip ? 'active': ''}`}>
      <form ref={form} onSubmit={sendEmail} className="form__front">
         {(nameDirty && nameError) ? <div style={{color: 'red'}}>{nameError}</div> : <label>Name</label>}
         <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="user_name" />
         
         {(emailDirty && emailError) ? <div style={{color: 'red'}}>{emailError}</div> : <label>Email</label>}
         <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="user_email" />
         <label>Message</label>
         <textarea name="message" rows="6" />
         <input disabled={!formValid} type="submit" value="Send" />
      </form>
      <div className="form__back">
         <p>{result}</p>
         <button onClick={() => setFlip(false)}>Back</button>
      </div>
   </div>
  );
};

export default ContactForm;