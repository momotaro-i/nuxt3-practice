
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang='scss' scoped>
.container {
  max-width: (200px * 5 + 20px * 4);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: $white;
  padding: 20px;
  width: 200px;
}

.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
}
</style>