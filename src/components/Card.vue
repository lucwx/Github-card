<script setup>
import Button from "./Button.vue";
import { useCardStore } from "../stores/useCardStore.js";
import html2canvas from "html2canvas"
import { useShareStore } from '../stores/useShareStore';

const shareStore = useShareStore()
const store = useCardStore()

const capture = () => {
  const element = document.querySelector('#conteudo');

   html2canvas(element, {
    useCORS: true
  }).then((canvas) => {
    let capturedImage = canvas.toDataURL();
    let link = document.createElement('a')
    link.href = capturedImage
    link.download = "your_github_card"

    link.click()
  });
}

</script>

<template>
  <div id="conteudo"
    class="flex flex-col justify-center items-center p-3 rounded-3xl border border-zinc-300 w-4/5 m-2 lg:w-1/4 max-w-sm transition-all" :class="shareStore.showModal ? 'blur-lg' : ''">
    <img id='img' class="rounded-3xl mb-3" :src="store.pic" alt="foto de perfil do github" />
    <a class="hover:underline text-2xl md:text-3xl font-Prompt" :href="store.url" target="_blank">@{{ store.login }}</a>
    <div class="flex">
      <p class="text-lg mt-2 font-Prompt">followers: {{ store.followers }}</p>
      <p class="text-lg mt-2 mx-2">&#x2022</p>
      <p class="text-lg mt-2 font-Prompt">following: {{ store.following }}</p>
    </div>
    <p class="text-lg font-Prompt">repos: {{ store.repos }}</p>
    <a class="text-lg font-Prompt underline" :href="store.blog" target="_blank">{{ store.blog }}</a>
    <p class="text-base my-2 font-Prompt self-center">{{ store.bio }}</p>
  </div>
  <div class="flex justify-between w-4/5 max-w-sm lg:w-1/4">
    <Button />
    <button class="border border-zinc-300 rounded-xl font-Prompt p-3 w-[49%]"
      @click="capture">
      Download
    </button>
  </div>
</template>
