<template>
  <div class="nav">
    <NuxtLink to="/">TOP</NuxtLink>
    <NuxtLink to="/articles">記事一覧</NuxtLink>
    <NuxtLink to="/users">ユーザー一覧</NuxtLink>
  </div>
</template>

<style lang='scss' scoped>
.nav {
  display: flex;
  gap: 20px;
}
</style>