<script setup lang="ts">

const router = useRouter()
const handleBack = () => router.push('/')

</script>
<template>
  <div class="wrapper">
    <div class="content">
      <h1 class="message">Page not found 🙁</h1>
      <InfoButton class="back" @click="handleBack">
        <Icon name="material-symbols:arrow-back-rounded" /> Back to home
      </InfoButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  @apply grid place-items-center h-screen;
}

.content {
  @apply text-center flex items-center flex-col gap-4;
}

.message {
  @apply font-medium text-gray-800 text-3xl;
}

.back svg {
  @apply transition duration-300 ease-in-out w-5 h-5;
}

.back:hover svg {
  @apply translate-x-[-2px];
}
</style>
