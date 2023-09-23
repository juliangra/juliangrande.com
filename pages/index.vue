<script setup lang="ts">
const aboutMeActive = ref(false);
const contactMeActive = ref(false);

const handleClose = () => {
  aboutMeActive.value = false
  contactMeActive.value = false
}

const title = computed(() => aboutMeActive.value ? 'Experience' : 'Contact')
const contentPath = computed(() => aboutMeActive.value ? '/projects' : '/contacts')

onMounted(() => {

  window.addEventListener('keyup', (e) => {
    if (e.key !== 'Escape') return

    handleClose()
  });

})

</script>
<template>
  <div>
    <div>
      <Transition name="fade-items">
        <div v-if="aboutMeActive || contactMeActive">
          <div
            class="absolute translate-x-[-50%] left-1/2 h-screen flex flex-col h-1/2 lg:h-screen lg:w-1/2 w-full items-center justify-center bg-white text-muted p-5 sm:p-0">
            <div class="flex items-center justify-between w-full max-w-lg relative">
              <h1 class="font-bold text-3xl text-title">{{ title }}</h1>

              <CloseButton @click="handleClose" />
            </div>

            <ContentDoc :path="contentPath" />
          </div>
        </div>
      </Transition>
    </div>

    <Transition name="slide-main">
      <div v-if="!aboutMeActive && !contactMeActive"
        class="flex flex-col lg:flex-row items-center justify-center h-screen">
        <div class="left lg:w-1/3 flex flex-col items-center justify-center md:block">
          <h1 class="title font-bold text-5xl text-title max-w-[250px]">
            Hello, I'm <span class="text-main">Julian!</span>👋
          </h1>
          <div class="text-sm max-w-md text-muted">
            <p class="max-sm:p-2 max-sm:text-center lg:pr-10">
              I am a full-time student at NTNU and a freelance full stack
              developer. Most of my work is web-related, specializing in web
              applications with React and Vue.
            </p>
          </div>
          <div class="mt-4">
            <MainButton @click="aboutMeActive = true">My experience</MainButton>
            <InfoButton @click="contactMeActive = true">Contact</InfoButton>
          </div>
        </div>
        <div class="relative right flex items-center justify-center mt-2">
          <video class="absolute rounded-2xl h-64 w-96 md:w-[500px] bg-[#1e1c21] shadow-xl" muted autoplay loop>
            <source src="/vid/animoji.mp4" type="video/mp4" />
          </video>
          <BackgroundBlob class="max-w-full" />
        </div>
      </div>
    </Transition>
  </div>
</template>
<style lang="scss">
@import url('~/assets/main.css')
</style>
