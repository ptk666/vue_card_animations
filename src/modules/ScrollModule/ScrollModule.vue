<template> 
    <div
        id="scroll_parent"
        class="p-5 pb-0 mb-5 bg-red-500 h-full max-h-screen overflow-y-auto flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="1500"

    >
        <div class="absolute top-10 left-2 md:top-2 text-xs text-slate-50">
            —— scroll
        </div>
        
        <div
            class=""
        >
            <div
                id="scroll"
                ref="scroll"
                class="w-10"
                v-scroll="scrollHandler"
            >
                
            </div>
        </div>

    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useSpring, useMotions, useMotionProperties } from '@vueuse/motion'
import { useScroll } from '@vueuse/gesture'

const scroll = ref();

const { motionProperties } = useMotionProperties(scroll, {
    cursor: 'pointer',
    x: 0,
    y: 0
});

const { set } = useSpring(motionProperties);

const scrollHandler = ({ xy: [x, y] }) => {
    set({ backgroundColor: `#000000` });
}

const scroll_parent = document.getElementById("scroll_parent");

const item = useScroll(scrollHandler, {
  domTarget: scroll_parent,
})

</script>

<style>
    #scroll {
        height: 200vh;
    }
</style>