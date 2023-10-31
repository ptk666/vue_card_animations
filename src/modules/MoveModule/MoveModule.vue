<template>
    <div 
        id="circle_container"
        class="p-5 bg-emerald-500 flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="900"
    >
        <div class="absolute left-2 top-2 text-xs text-slate-50">
            —— move
        </div>
        <div ref="circle" class="text-slate-800 text-xs bg-slate-50 rounded-full h-20 w-20 flex justify-center items-center" v-move="moveHandler">
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'

const circle = ref();

const { motionProperties } = useMotionProperties(circle, {
    cursor: 'pointer',
    x: 0,
    y: 0
});

const { set } = useSpring(motionProperties);

const moveHandler = ({ event, moving, ...state }) => {
    const cirCon = document.getElementById('circle_container');
    const cirRect = cirCon.getBoundingClientRect();

    if(!moving) {
        set({ x: 0, y: 0, cursor: 'pointer' });
        return;
    }

    const x = event.pageX - cirRect.left - cirRect.width / 2;
    const y = event.pageY - cirRect.top - cirRect.height / 2;

    set({ x, y });
}
</script>

<style>

</style>