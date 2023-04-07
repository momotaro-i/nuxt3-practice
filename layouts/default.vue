<template>
  <div>
    <OrganismsHeader />
    <div class="main">
      <slot />
    </div>
  </div>
</template>
<style lang='scss' scoped>
.main {
  min-height: 100vh;
  display: flex;
  background-color: #ccc;
  justify-content: center;
  padding: 50px 20px;
  align-items: start;
}
</style>