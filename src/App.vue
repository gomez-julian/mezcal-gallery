<script setup lang="ts">
import CountDown from './components/CountDown.vue';
import TeamMembers from './components/TeamMembers.vue';
import TournamentTable from './components/TournamentTable.vue';


</script>

<template>
<CountDown/>
<TeamMembers/>
<TournamentTable/>
</template>

<style>
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 0;
  margin-top: 0;
}
</style>
