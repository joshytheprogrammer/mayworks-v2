// export default defineNuxtPlugin((/*nuxtApp*/) => {
//   emailjs.init('user_bnoXezOy1MaFtswO3')
// })({ app }, inject)

import emailjs from 'emailjs-com';

export default defineNuxtPlugin((/*nuxtApp*/) => {
  emailjs.init('bnoXezOy1MaFtswO3');

  const sendEmail = (templateParams) => {
    emailjs.send('service_g5cvd17', 'template_cc7mvrm', templateParams)
      .then(() => {
        console.log('Email sent successfully!');
      }, (error) => {
        console.error('Error sending email:', error);
      });
  }

  // nuxtApp.inject('sendEmail', sendEmail);
  return {
    provide : {
      sendEmail
    }
  }
});