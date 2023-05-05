
<script setup lang="ts">
import useMezcal from '@/module/useMezcal';
const { stats } = useMezcal()

const addsEmoji = [
 "👑", "🥈", "🥉", "🫠", "🤡", "☠️"
]

const addPoss = ["1st", "2nd", "3rd", "4th", "5th", "6th"]

</script>

<template>
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Tabla de posiciones</div>
    </div>
    <ul class="list-none p-0 m-0">
        <li v-for="(stat,index) in stats" :key="stat.member"
         class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img :src="stat.picture" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">{{  stat.member }}</span>
                    <div class="text-700 mb-2">🟢 {{ stat.wins }} wins 🔴 {{ stat.total - stat.wins }} loses</div>
                    <!-- <a class="text-primary cursor-pointer">
                        <i class="pi pi-github text-sm mr-2"></i>
                        <span>Issue #1185</span>
                    </a> -->
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">{{ addPoss[index] }} {{ addsEmoji[index] }}</span>
        </li>
    </ul>
</div>
</template>

<style scoped>

</style>