<template>
  <div class="app">
    <!-- Leave contract execution to us! Our legal experts handle it all, from drafting and negotiating to managing and executing contracts. One-time or ongoing, we've got you covered across all industries. -->
    <AppNavStrip />
    <AppNavBar v-show="!isMobile" />
    <AppNavMBar v-show="isMobile" />
    <NuxtLayout>
      <NuxtPage class="mt-24 md:mt-0" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth();

let isMobile = ref(device.getDevice);
</script>