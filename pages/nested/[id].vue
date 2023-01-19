<script setup lang='ts'>
interface Props {}
const props = defineProps<Props>()

const route = useRoute()
const id = route.params.id

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div class="h-screen flex justify-center items-center text-3xl">
    {{ id }}
  </div>
</template>

<style>

</style>
