<template>
  <div id="contact" class="py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-32 flex justify-between flex-wrap lg:h-[768px] bg-blue-800 text-white">
    <div class="w-full md:w-[49%] lg:w-1/3 h-[450px] lg:h-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5608281938075!2d3.3885197150029303!3d6.4503838257979895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1073ccdd79%3A0xb77c5f8bd50972a0!2s1%20Joseph%20Street%2C%20Lagos%20Island%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1654943829318!5m2!1sen!2sng" width="100%" height="100%" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border:0" data-v-c7f504ce=""></iframe>
    </div>
    <div class="w-full sm:w-fit md:w-[49%] lg:w-1/3 md:px-8 py-8 md:py-0">
      <h2 class="text-4xl leading-snug font-semibold">Contact info</h2>
      <p class="py-4 leading-7 text-neutral-200">Get in touch with Mayworks today! Our team is always ready to assist you with your needs. </p>
      <div class="flex flex-col">
        <div class="w-full flex py-4">
          <span class="pr-4"> 
            <Icon name="fluent-emoji-high-contrast:office-building" size="2.5em" /> 
          </span>
          <div class="">
            <h2 class="font-medium text-xl">Office Location</h2>
            <p class="text-base text-neutral-200">1 Joseph Street, Lagos Island, 102273,  Lagos, Nigeria</p>
          </div>
        </div>
        <div class="w-full flex py-4">
          <span class="pr-4"> 
            <Icon name="material-symbols:call" size="2.5em" /> 
          </span>
          <div class="">
            <h2 class="font-medium text-xl">Talk with Support</h2>
            <p class="text-base text-neutral-200">
              (234) 808 898 5577 <br> (234) 806 233 8622
            </p>
          </div>
        </div>
        <div class="w-full flex py-4">
          <span class="pr-4"> 
            <Icon name="mdi:clock-time-three" size="2.5em" /> 
          </span>
          <div class="">
            <h2 class="font-medium text-xl">Office Hours</h2>
            <p class="text-base text-neutral-200">
              Mon-Fri: 10:00 - 17:00 <br> Sat: 12:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-fit md:w-[49%] lg:w-1/3 md:px-8">
      <h2 class="text-4xl leading-snug font-semibold">Get in Touch</h2>
      <form @submit.prevent="sendEmail()" class="py-4">
        <input class="bg-blue-500 w-full px-4 h-12 placeholder:text-slate-200 outline-0" type="text" placeholder="Name" v-model="form.name" required>
        <input class="bg-blue-500 w-full px-4 my-4 h-12 placeholder:text-slate-200 outline-0" type="text" placeholder="Email (We wll reach out here)" v-model="form.email" required>
        <input class="bg-blue-500 w-full px-4 h-12 placeholder:text-slate-200 outline-0" type="text" placeholder="Phone" v-model="form.phone" required>
        <textarea class="bg-blue-500 w-full px-4 py-4 my-4 h-36 placeholder:text-slate-200 outline-0" type="text" placeholder="Write your message here..." v-model="form.message" required></textarea>
        <AppNotification :show="showNotification" @close="closeNotification" />
        <p class="bg-red-800 text-sm rounded-sm px-1 mb-1" v-for="error in errors">{{ error + '...' }}</p>
        <button class="px-8 py-4 bg-blue-700 disabled:cursor-wait disabled:text-slate-200" :disabled="loading"> {{ loading ? 'loading...' : 'Submit Now' }} </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        errors: {},
        loading: false,
        showNotification: false
      }
    },
    methods: {
      async sendEmail() {
        this.loading = true

        let template_params = {
          to_name: "Mr. Kingsley",
          to_email: "kingsleyn24@yahoo.com",
          reply_to: this.form.email,
          from_name: this.form.name,
          message: this.form.message + ' My phone number is - '+ this.form.phone
        }

        if(this.validateForm()) {
          await this.$sendEmail(template_params)

          this.showNotification = true;

          setTimeout(() => {
            this.showNotification = false;
          }, 5000)
        }

        this.loading = false
        return
      },
      closeNotification() {
        this.showNotification = false;
      },
      validateForm() {
        let valid = true;
    
        // Validate name field
        if (!this.form.name) {
          valid = false;
          this.errors.name = 'Please enter your name';
        }
    
        // Validate email field
        if (!this.form.email) {
          valid = false;
          this.errors.email = 'Please enter your email';
        } else if (!this.validateEmail(this.form.email)) {
          valid = false;
          this.errors.email = 'Please enter a valid email';
        }
    
        // Validate phone field
        if (!this.form.phone) {
          valid = false;
          this.errors.phone = 'Please enter your phone number';
        } else if (!this.validatePhone(this.form.phone)) {
          valid = false;
          this.errors.phone = 'Please enter a valid Nigerian phone number';
        }
    
        // Validate message field
        if (!this.form.message) {
          valid = false;
          this.errors.message = 'Please enter a message';
        }
    
        return valid;
      },
    
      validateEmail(email) {
        // Use a regular expression to validate email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      },
    
      validatePhone(phone) {
        // Use a regular expression to validate Nigerian phone format
        const regex = /^(\+?234|0)[7-9](0|1)[0-9]{8}$/;
        return regex.test(phone);
      }
    }
  }
</script>