<template>
    <div 
        class="p-5 hover:bg-slate-800 hover:text-slate-50 transition-all ease-in-out duration-200 flex justify-center items-center"
        v-motion
        :initial="{ opacity: 0, y: 5 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :hovered="{ scale: 1 }"
        :delay="2100"
    >
        <ul class="grid grid-cols-2 gap-2 text-center">
            <li class="hover:border border-t-transparent border-x-transparent cursor-pointer transition-all ease-in-out duration-100"><a href="https://github.com/ptk666" target="_blank">Github</a></li>
            <li class="hover:border border-t-transparent border-x-transparent cursor-pointer transition-all ease-in-out duration-100"><a href="https://linkedin.com/in/brucejamesdelacruz" target="_blank">Linkedin</a></li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style>

</style>