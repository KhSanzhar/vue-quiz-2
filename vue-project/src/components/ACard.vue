<template>
  <div class="border rounded-md">
    <div class="flex flex-col gap-2">
      <span class="font-bold">{{ props.title }}</span>
      <span>{{ props.body }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  title: String,
  body: String
})

</script>