<template>
    <div
        @mouseover="hovered = false"
        @mouseleave="hovered = true"
        class="p-5 bg-amber-500 flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="600"
    >
        <div class="absolute top-2 left-2 text-xs text-slate-50">
            —— drag
        </div>

        <div ref="square" class="bg-slate-50 text-slate-800 w-20 h-20 rounded flex justify-center items-center text-xs" v-drag="dragHandler">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'

const hovered = ref(true);
const square = ref();

const { motionProperties } = useMotionProperties(square, {
    cursor: 'grab',
    x: 0,
    y: 0
})

const { set } = useSpring(motionProperties);

const dragHandler = ({ dragging, movement: [x, y] }) => {
    if(!dragging) {
        set({ x: 0, y: 0, cursor: 'grab' });
        return;
    }

    set({
        cursor: 'grabbing',
        x,
        y
    });
}

</script>

<style>

</style>