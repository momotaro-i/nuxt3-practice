
<template>
  <div>
    <NuxtLayout name="custom">
      <h1>Company Page</h1>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>