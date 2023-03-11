<template>
  <div>
    <h1>Main Page</h1>
    <TestText page-title="タイトルです！" />
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
    <div>
      <img src="~/assets/image/usagi.jpg" alt="うさぎのアイコン">
      <img src="/usagi.jpg" alt="うさぎのアイコン">
    </div>
    <p>Count : {{ count }}</p>
    <div>
      <button @click="() => increment()">増やす</button>
      <button @click="() => decrement()">減らす</button>
    </div>
  </div>
</template>
<script setup>
const show = ref(false)
const handleClick = () => {
  show.value = true;
}

const { count, increment, decrement } = useCounter(100)
</script>