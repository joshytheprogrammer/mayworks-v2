<template>
  <div class="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16 flex flex-col md:flex-row items-start justify-between">
    <div class="max-w-md">
      <NuxtLink class="flex items-center pb-4" to="/">
        <img class="w-24 pr-4" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1681085600/mayworks/mayworks-logo_yl8hzn.png" alt="Mayworks Logo">
        <span class="text-3xl text-blue-900 font-bold">Mayworks</span>
      </NuxtLink>
      <p class="py-8 text-sm leading-7 lg:pb-12 md:w-full">
        Mayworks is a dynamic and forward-thinking company founded in 2014 with a clear vision to help companies grow and thrive. Our journey began with the goal of exporting minerals from Nigeria to other countries such as the US, Uk, China, Canada and more. Over the years, we have grown and evolved, and today, our focus is on helping businesses of all sizes to overcome their challenges and achieve success.
      </p>
      <p class="py-1 text-sm leading-7">
        This website was designed and built by <a class="hover:underline hover:text-blue-900 font-medium" href="https://joshytheprogrammer.com">joshytheprogrammer</a>
      </p>
      <ul class="flex w-full pb-8">
        <li class="pr-4">
          <Icon name="cib:facebook" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:instagram" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:twitter" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:pinterest" size="1.25em" />
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between sm:px-4">
      <h3 class="text-3xl font-semibold pb-4 text-blue-900">Links</h3>
      <ul class="py-8">
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-blue-900 font-medium" to="/#top">Home</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-blue-900 font-medium" to="/#about">About us</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-blue-900 font-medium" to="/#services">Services</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-blue-900 font-medium" to="/#testimonials">Testimonials</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-blue-900 font-medium" to="/#contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-3xl font-semibold pb-4 text-blue-900">Contact us</h3>
      <ul class="py-8">
        <li class="pb-8 ">
          <Icon class="pr-1 text-blue-900" name="material-symbols:phone-in-talk" size="1.25em" />
          <span class="pr-4 w-80">
            +234 808 898 5577
          </span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-blue-900"  name="material-symbols:mail-rounded" size="1.25em" />
          <span class="pr-4">kingsleyn24@yahoo.com</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-blue-900"  name="material-symbols:location-on" size="1.25em" />
          <span class="pr-4 w-40 lg:w-80 block">1 Joseph Street, Lagos Island, 102273, Lagos, Nigeria</span>
        </li>
      </ul>
    </div>
  </div>
</template>
