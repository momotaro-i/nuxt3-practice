<script setup lang='ts'>
import type { TPost } from '~/types'

const route = useRoute()

//データの取得
const { data } = await useFetch<Array<TPost>>("https://jsonplaceholder.typicode.com/posts")
useState("posts", () => data)
//ランダムにする関数
const shuffledPosts: Array<TPost> = shuffleArray(data.value)
//5件に絞る
const filterPosts: Array<TPost> = shuffledPosts.slice(0, 5)

const posts: TPost[] = data.value && route.path === "/articles" ? data.value : filterPosts



</script>

<template>
  <OrganismsCard>
    <li v-for="post in posts" :key="post.id" class="card">
      <p>userId :{{ post.userId }}</p>
      <p>articleId :{{ post.id }}</p>
      <p class="title">title :<br>{{ post.title }}</p>
    </li>
  </OrganismsCard>
</template>

<style lang='scss' scoped>
.card {
  background-color: $white;
  padding: 20px;
  width: 200px;
}
</style>