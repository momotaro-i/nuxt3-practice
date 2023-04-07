<script setup lang='ts'>
</script>
<template>
  <AtomsBasicButton label="絞り込む" @click="searchItem()" />
</template>

<style lang='scss' scoped>
.button {
  width: 200px;
  display: block;
  background-color: $pink2;
  color: $white;
  padding: 10px 20px;
  border-radius: 999px;
  margin: 40px auto 0;
  text-align: center;
}
</style>