<template>
  <div id="app">
    <button @click="handleClick" id="button">
      click me
    </button>
    <img src="/icons/apple.svg" alt="Apple Icon" width="28" height="28" />
    <v-img src="/icons/apple.svg" width="28" height="28"></v-img>
  </div>
</template>

<script setup lang="ts">
function handleClick() {
  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: 'test@example.com', password: 'password' }),
  });
}
</script>
