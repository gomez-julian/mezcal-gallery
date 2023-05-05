<script setup lang="ts">
import type { Form } from '@/module/mezcalInterfaces';
import { ref } from 'vue'
import useMezcal from '@/module/useMezcal';
import type { Match } from '@/module/mezcalInterfaces';

const { teamMembers, champions, mutation, remove, matches } = useMezcal()
const dialog = ref<boolean>(false);
const deleteDialog = ref<boolean>(false);

const root = ref<string>('')
const ROOT = 'pipipi'

const form = ref<Form>({})

function getPictureByName(name: string): string {
    const member = teamMembers.find(member => member.value === name);
    return member!.picture;
}

const upsert = () => {
    form.value.picture_1 = getPictureByName(form.value.name_1!)
    form.value.picture_2 = getPictureByName(form.value.name_2!)
    form.value.ts = new Date().toISOString()
    form.value.extra = 'xd';

    // console.log(JSON.stringify(form.value))
    mutation.mutate(form.value)
    dialog.value = false;
    form.value = {};
}

const del = (match:Match) => {
    remove(match)
}
</script>

<template>
    <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
        <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
            <li>
                <a class="text-500 no-underline line-height-3 cursor-pointer">Mezcal</a>
            </li>
            <li class="px-2">
                <i class="pi pi-angle-right text-500 line-height-3"></i>
            </li>
            <li>
                <a class="text-500 no-underline line-height-3 cursor-pointer">Matches</a>
            </li>
            <li class="px-2">
                <i class="pi pi-angle-right text-500 line-height-3"></i>
            </li>
            <li>
                <span class="text-900 line-height-3">Gestor</span>
            </li>
        </ul>
        <div class="flex flex-column md:flex-row md:justify-content-between">
            <span class="text-3xl font-medium text-900">MEZCAL LLORERIA</span>
            <div class="flex align-items-center mt-3 md:mt-0">
                <span class="p-input-icon-left">
                    <i class="pi pi-lock"></i>
                    <InputText type="text" v-model="root" placeholder="..." class="mr-3" />
                </span>
                <Button v-if="root === ROOT" icon="pi pi-plus" class="p-button-outlined p-button-rounded mr-3"
                    @click="dialog = true"></Button>
                <Button v-if="root === ROOT" icon="pi pi-list" class="p-button-outlined p-button-rounded"
                @click="deleteDialog = true"></Button>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="dialog" :style="{ width: '450px' }" header="Crear match" :modal="true" class="p-fluid">


        <div class="formgrid grid">
            <div class="field col">
                <label for="name_1" class="mb-3">Contrincante 1</label>
                <Dropdown id="name_1" v-model="form.name_1" :options="teamMembers" optionLabel="name" optionValue="value"
                    placeholder="Contrincante" />
            </div>
            <div class="field col">
                <label for="champ_1" class="mb-3">Campeón de {{ form.name_1 }}</label>
                <Dropdown id="champ_1" v-model="form.champ_1" :options="champions" placeholder="Selecciona un campeón"
                    filter />
            </div>
        </div>

        <div class="formgrid grid">
            <div class="field col">
                <label for="name_2" class="mb-3">Contrincante 2</label>
                <Dropdown id="name_2" v-model="form.name_2" :options="teamMembers" optionLabel="name" optionValue="value"
                    placeholder="Contrincante" />
            </div>
            <div class="field col">
                <label for="champ_2" class="mb-3">Campeón de {{ form.name_2 }}</label>
                <Dropdown id="champ_2" v-model="form.champ_2" :options="champions" placeholder="Selecciona un campeón"
                    filter />
            </div>
        </div>

        <div class="field">
            <label for="winner" class="mb-3">Ganador</label>
            <Dropdown id="winner" v-model="form.winner" :options="teamMembers" optionLabel="name" optionValue="value"
                placeholder="Ganador" />
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="() => (dialog = false)" />
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="upsert" />
        </template>
    </Dialog>



    <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Historial" :modal="true" class="p-fluid">
        <ul class="list-none p-0 m-0">
            <li v-for="match in matches" :key="match.ts"
             class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                <div class="flex">
                    <img :src="match.picture_1" class="mr-0" style="width: 45px; height: 45px" />
                    <img :src="match.picture_2" class="mr-3" style="width: 45px; height: 45px" />
                    <div class="mr-0 md:mr-8">
                        <span class="block text-900 font-medium mb-1">👑 {{ match.winner }}</span>
                        <div class="text-600">{{ match.name_1 }} ({{ match.champ_1 }})
                                    VS {{ match.name_2 }} ({{ match.champ_2 }})</div>
                    </div>
                </div>
                <div class="mt-2 md:mt-0 flex flex-nowrap">
                    <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-trash" @click="del(match)"></Button>
                </div>
            </li>
        </ul>


        <template #footer>
            <Button label="Cerrar" icon="pi pi-times" class="p-button-text" @click="() => (deleteDialog = false)" />
        </template>
    </Dialog>
</template>

<style scoped></style>