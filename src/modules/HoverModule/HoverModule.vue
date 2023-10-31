<template>
    <div
        class="p-5 bg-slate-800 flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="1200"
    >
        <div class="absolute left-2 top-2 text-xs text-slate-50">
            —— hover
        </div>

        <div 
            ref="diamond" 
            class="text-slate-800 text-xs bg-amber-300 rounded rotate-45 h-16 w-16 flex justify-center items-center hover:bg-amber-400 hover:scale-150 transition-all"
        >
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'
const diamond = ref();

// const { motionProperties } = useMotionProperties(diamond);

// const { set } = useSpring(motionProperties);

// const hoverHandler = ({ hovering, ...state }) => {
//     // if(hovering) {
//     //     set({ backgroundColor: '#f59f0b', scale: 1.5 });
//     // } else {
//     //     set({ backgroundColor: '#fcd34d', scale: 1 });
//     // }
//     console.log(state);
// }

// useHover(hoverHandler, { domTarget: diamond })

</script>

<style>

</style>