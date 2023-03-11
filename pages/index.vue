<script setup>
const show = ref(false)
const handleClick = () => {
  show.value = true;
}
const { data: hello } = useFetch("/api/hello")

</script>


<template>
  <div>
    <h1>Main Page</h1>
    <p>{{ hello }}</p>

    <TestText page-title="タイトルです！" />
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
    <div>
      <img src="~/assets/image/usagi.jpg" alt="うさぎのアイコン">
      <img src="/usagi.jpg" alt="うさぎのアイコン">
    </div>
  </div>
</template>
