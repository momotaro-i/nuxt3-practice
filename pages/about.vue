<template>
  <div>
    <button @click="enableCustomLayout">クリックするとレイアウトが変わります。</button>
    <h1>About Page</h1>
    <p>Count : {{ counter }}</p>
    <div><button @click="counter++">+</button></div>
  </div>
</template>

<script setup lang='ts'>
// const enableCustomLayout = () => {
//   setPageLayout('custom')
// }
const route = useRoute()
const enableCustomLayout = () => {
  route.meta.layout = "custom"
}

const title = ref('Aboutページ');
const description = ref('Aboutページ');
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
});

// const counter = ref(0)
const counter = useCounter()
</script>