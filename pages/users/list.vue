<template>
  <h1>User Listページ</h1>
  <p>Count:{{ counter }}</p>
  <div><button @click="inc">+</button></div>
</template>

<script setup lang='ts'>
const counter = useCounter();

const inc = () => {
  throw createError('エラー発生');
  counter.value++
}
</script>