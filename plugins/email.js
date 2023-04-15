import emailjs from 'emailjs-com';

export default defineNuxtPlugin((/*nuxtApp*/) => {
  emailjs.init('bnoXezOy1MaFtswO3');

   const sendEmail = async (templateParams) => {
    await emailjs.send('service_g5cvd17', 'template_cc7mvrm', templateParams)
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