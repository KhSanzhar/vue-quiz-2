<template>
  <div class="grid grid-cols-4 gap-5">
    <a-card
      v-for="post in posts"
      :key="post.userId"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>
<script setup lang="ts">
import UserPage from "@/views/UserPage.vue";
import {onMounted, ref} from "vue";
import ACard from "@/components/ACard.vue";

const posts = ref([])

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await response.json()

  posts.value = json
}

onMounted(() => {
  fetchUsers()
})
</script>