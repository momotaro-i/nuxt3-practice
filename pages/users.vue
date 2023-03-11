<template>
  <h1>Usersページ</h1>
  <NuxtErrorBoundary>
    <NuxtPage />
    <template #error="{ error }">
      <p>{{ error }}</p>
      <button @click="resetError(error)">Clear Error</button>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang='ts'>
const resetError = (error: string | Partial<NuxtError>) => {
  error.value = null
}
</script>