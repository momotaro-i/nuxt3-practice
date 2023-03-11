
<script setup lang='ts'>
useHead({
  htmlAttrs: {
    lang: "ja"
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  titleTemplate: title => title ? `${title} | nuxt practice` : "nuxt practice"
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>