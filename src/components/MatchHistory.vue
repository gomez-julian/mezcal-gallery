<script setup lang="ts">
import useMezcal from '@/module/useMezcal';


const { matches } = useMezcal()
</script>

<template>
    <section class="surface-section px-4 py-4 md:px-6 lg:px-8">
        <h2 class="text-center text-blue-500 font-semibold text-2xl line-height-1">Historial de partidas</h2>
        <h3 class="text-center text-900 font-semibold text-5xl line-height-1">Se les acabó la mentira</h3>
        <div class="grid grid-nogutter align-items-center">
            <div class="col-12">
                <div class="grid mt-4">
                    <article class="col-12 mb-1 lg:mb-1" v-for="match in matches" :key="match.ts">
                        <div class="mb-3 relative h-12rem border-round bg-cover bg-no-repeat"
                            :style="`background-image: url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${match.name_1 === match.winner ? match.champ_1 : match.champ_2 }_0.jpg')`">
                            <div class="border-round p-3 absolute text-white inline-flex flex-column justify-content-center font-semibold"
                                style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem); background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.4) 100%); backdrop-filter: blur(6px);">
                                <h3 class="font-light text-xl xl:text-2xl mb-2 mt-0">Ganador: 👑 {{ match.winner }}</h3>
                                <p class="font-normal text-sm xl:text-base mb-0 mt-0 text-white-alpha-70">{{ match.name_1 }} ({{ match.champ_1 }})
                                    VS {{ match.name_2 }} ({{ match.champ_2 }})</p>
                                <div class="flex gap-4 w-full mt-3">
                                    <img :src="match.picture_1" class="mr-1" style="width: 45px; height: 45px" />
                                    <img :src="match.picture_2" class="mr-1" style="width: 45px; height: 45px" />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>