<template>
  <div class="app">
    <!-- Leave contract execution to us! Our legal experts handle it all, from drafting and negotiating to managing and executing contracts. One-time or ongoing, we've got you covered across all industries. -->
    <NuxtLayout>
      <NuxtPage />
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