<template>
    <div
        id="wheel_container"
        class="p-5 bg-violet-500 flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="1500"
    >
        <div class="absolute left-2 top-2 text-xs text-slate-50">
            —— wheel
        </div>
        <div ref="wheel" class="w-0 h-0 border-l-[50px] border-l-transparent rounded border-b-[75px] border-b-slate-50 border-r-[50px] border-r-transparent" v-wheel="wheelHandler">
</div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'

const wheel = ref();

const { motionProperties } = useMotionProperties(wheel, {
    cursor: 'grab',
    x: 0,
    y: 0
});

const { set } = useSpring(motionProperties);

const wheelHandler = ({ movement: [x, y], wheeling }) => {
    if(!wheeling) {
        set({ x: 0, y: 0 });
        return;
    }

    set({ x, y });
}
</script>

<style>

</style>