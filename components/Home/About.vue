<template>
  <div class="py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-32 lg:flex justify-between items-center bg-blue-100">
    <img class="w-fit lg:w-1/2 h-[480px] object-contain lg:h-[640px]" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" alt="people working - about us">
    <div class="lg:w-1/2 lg:pl-8">
      <h2 id="about" class="py-4 font-medium text-blue-900 ">ABOUT US</h2>
      <h2 class="text-4xl leading-snug font-semibold ">Your trusted partner for business solutions and <span class="bg-gradient-to-l from-blue-700 to-blue-900 text-transparent bg-clip-text"> mineral exports</span></h2>
      <p class="py-8 leading-7 text-gray-600">Leave contract execution to us! Our legal experts handle it all, from drafting and negotiating to managing and executing contracts. One-time or ongoing, we've got you covered across all industries.</p>
      <div class="md:flex text-white">
        <NuxtLink to="/#services" class=" inline-flex items-center no-underline mb-4 md:mb-0 md:mr-4 px-8 py-4 bg-gradient-to-l hover:bg-gradient-to-r from-blue-700 to-blue-900">Discover More</NuxtLink>
        <a href="tel:08088985577" class="no-underline inline-flex justify-center items-center px-8 py-4 bg-white text-black border border-blue-900">
          <span class="text-white inline-flex items-center p-1 bg-blue-700 rounded-full">
            <Icon name="material-symbols:call" size="1.25em"/> 
          </span>
          <span class="pl-2">(234) 808 898 5577</span>
        </a>
      </div>
    </div>
  </div>
</template>