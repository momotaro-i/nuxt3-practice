<script setup lang='ts'>
type TPost = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const { data: posts, error, refresh, pending } = await useLazyFetch<Array<TPost>>('https://jsonplaceholder.typicode.com/posts/')
console.log("error", error.value);
// const { data: posts, error, refresh } = await useAsyncData("posts", () => {
//   return $fetch<Array<TPost>>('https://jsonplaceholder.typicode.com/posts/')
// })
// console.log(useNuxtApp().payload.data);
</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading･･･</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>