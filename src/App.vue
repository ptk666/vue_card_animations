<template>
  <div class="p-5 text-slate-800 grid md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 w-screen h-screen gap-3">
    <Front class="border rounded-xl h-52 md:h-full pb-10 overflow-hidden" />
    <Drag class="border border-amber-500 rounded-xl h-52 md:h-full" />
    <Move class="border border-emerald-500 rounded-xl h-52 md:h-full" />
    <Hover class="border border-slate-800 rounded-xl h-52 md:h-full" />
    <!-- <Scroll class="border border-red-500 rounded-xl h-full" /> -->
    <Wheel class="border rounded-xl h-52 md:h-full" />
    <Pinch class="border rounded-xl h-52 md:h-full" />
    <Contact class="border rounded-xl h-full md:col-span-2" />
  </div>
</template>

<script setup>
import Front from './modules/FrontPage/FrontPageModule.vue'
import Drag from './modules/DragModule/DragModule.vue'
import Move from './modules/MoveModule/MoveModule.vue'
import Hover from './modules/HoverModule/HoverModule.vue'
// import Scroll from './modules/ScrollModule/ScrollModule.vue'
import Wheel from './modules/WheelModule/WheelModule.vue'
import Pinch from './modules/PinchModule/PinchModule.vue'
import Contact from './modules/ContactModule/ContactModule.vue'
</script>

<style>
  #app {
    /* font-family: 'Inter', sans-serif; */
  }
</style>
