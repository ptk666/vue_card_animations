<template>
    <div
        id="pinch_container"
        class="p-5 bg-red-500 flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="1800"
    >
        <div class="absolute left-2 top-2 text-xs text-slate-50">
            —— pinch
        </div>
        <div ref="pinch" class="relative w-[100px] h-[90px]
        before:content-[''] before:absolute before:top-0 before:left-[50px]
        before:h-[80px] before:w-[50px] before:rounded-t-[50px] 
        before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0 
        before:bg-slate-50 before:-rotate-45 before:origin-[0_100%]

        after:content-[''] after:absolute after:top-0 after:left-0 after:h-[80px]
        after:w-[50px] after:rounded-t-[50px] after:rounded-r-[50px] 
        after:rounded-b-0 after:rounded-l-0 after:bg-slate-50 after:rotate-45
        after:origin-[100%_100%]
        " v-pinch="pinchHandler">
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'
import { usePinch } from '@vueuse/gesture'

const pinch = ref();

const { motionProperties } = useMotionProperties(pinch, {
    cursor: 'grab',
    x: 0,
    y: 0,
});

const { set } = useSpring(motionProperties);

const pinchHandler = ({ offset: [d, a], pinching }) => {
    if(!pinching) {
        set({ x: 0, y: 0 });
    }

    set({ zoom: d, rotateZ: a });
}

const pinch_parent = document.getElementById("pinch_container");

usePinch(pinchHandler, {
    domTarget: pinch_parent,
    eventOptions: {
        passive: false
    }
})
</script> 

<style>

</style>