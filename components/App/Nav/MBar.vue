<template>
  <div class="w-full z-10 absolute bg-white px-4 sm:px-8 md:px-12 lg:px-28 py-4 text-neutral-800 flex flex-col items-center justify-between">
    <div class="w-full items-center flex justify-between">
      <div class="w-fit">
        <NuxtLink class="flex items-center !no-underline" to="/#">
          <img class="w-20 pr-4" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1681085600/mayworks/mayworks-logo_yl8hzn.png" alt="Mayworks Logo">
          <span class="text-2xl text-blue-900 font-semibold">Mayworks</span>
        </NuxtLink>
      </div>
      <div v-if="!isOpen" @click="toggleMenu" class="menu">
        <Icon name="material-symbols:segment-rounded" size="2.25em" />
      </div>
      <div v-else @click="toggleMenu" class="menu">
        <Icon name="material-symbols:close" size="2.25em" />
      </div>
    </div>
    <div v-if="isOpen" class="text-base flex flex-col items-center justify-between">
      <NuxtLink class="py-4 no-underline font-medium hover:text-blue-900 hover:ease hover:duration-100 hover:delay-75" to="/">Home</NuxtLink>
      <NuxtLink class="py-4 no-underline font-medium hover:text-blue-900 hover:ease hover:duration-100 hover:delay-75" to="/#about">About</NuxtLink>
      <NuxtLink class="py-4 no-underline font-medium hover:text-blue-900 hover:ease hover:duration-100 hover:delay-75" to="/#services">Services</NuxtLink>
      <NuxtLink class="py-4 no-underline font-medium hover:text-blue-900 hover:ease hover:duration-100 hover:delay-75" to="/#contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
let isOpen = ref(false);

watch(() => route.name, () => {
  isOpen.value = false
});

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>