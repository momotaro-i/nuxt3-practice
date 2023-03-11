<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/company">Company</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
  </nav>
</template>