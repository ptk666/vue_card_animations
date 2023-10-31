<template>
    <div 
        class="p-5 hover:bg-slate-800 hover:text-slate-50 transition-all ease-in-out duration-200"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="300"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <div 
            v-if="hovered == false"
            v-motion
            :initial="{ opacity: 0, y: 5 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
        >
            <p class="text-2xl font-bold uppercase tracking-tight">Bruce</p>
            <p class="text-2xl font-bold uppercase tracking-tight">Web Developer</p>
            <p class="font-thin text-md">天</p>
        </div>
        <div 
            v-else
            v-motion
            :initial="{ opacity: 0, y: 5 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
        >
            <p class="font-bold">Demonstrating vueuse/motion & vueuse/gesture.</p>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'

const hovered = ref(false);
</script>

<style>

</style>