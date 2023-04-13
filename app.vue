<template>
  <div class="app">
    <AppNavStrip />
    <AppNavBar v-show="!isMobile" />
    <AppNavMBar v-show="isMobile" />
    <NuxtLayout>
      <NuxtPage class="mt-24 md:mt-0" />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth();

let isMobile = ref(device.getDevice);

useSeoMeta({
  title: 'Welcome to the official website for Mayworks Limited',
  meta: [
    { name: 'description', content: 'Mayworks is a trusted exporter of minerals from Nigeria to several countries in the west, with an outstanding track record in the industry. Additionally, the company assists both small and large businesses in problem-solving, offering fast and reliable solutions to help organizations achieve their goals. Mayworks is dedicated to maintaining its reputation as a trustworthy and reliable partner to all its clients.' }
  ]
});
</script>