<script setup lang='ts'>

type Props = {
  label: string;
  isLink?: boolean;
  linkTo?: string
  onClick?: () => void
}

const props = defineProps<Props>()
</script>
<template>
  <NuxtLink class="button" v-if="isLink" :to="linkTo">{{ label }}</NuxtLink>
  <button class="button" v-else @click="onClick">{{ label }}</button>
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