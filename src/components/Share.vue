<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useShareStore } from "../stores/useShareStore.js";

const store = useShareStore()
const { showModal } = storeToRefs(store)

const state = reactive({
  url: window.location
})

const copy = async () => {
  store.copied = true

  setTimeout(() => {
    store.copied = false
  }, 1500);

  await navigator.clipboard.writeText(state.url)
}

</script>

<template>
  <div class="flex h-screen w-screen justify-center items-center fixed left-0 top-0">
    <div class="flex justify-between flex-col px-3 p-7 m-2 w-full sm:w-2/3 md:w-auto border rounded-lg bg-white">
      <div class="flex items-start justify-end">
        <button @click="showModal = false">
          <img src="../assets/x-symbol.svg" width="25" height="25">
        </button>
      </div>
      <div class="flex flex-col md:flex-row md:justify-evenly justify-center items-center">
        <h1 class="text-lg">share:</h1>
        <p class="flex items-center justify-between flex-col border border-solid rounded-md border-zinc-300 w-full sm:min-w-3/4 p-2 m-2 font-Prompt"> {{ state.url }}
        </p>
        <button class="border border-zinc-300 px-4 py-2 rounded-md text-black" @click="copy()">copy</button>
      </div>
      <Transition>
        <div v-if="store.copied" class="flex items-center justify-center">
          <p class="font-Prompt">Copied to clipboard!</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
