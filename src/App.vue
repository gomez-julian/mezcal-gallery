<script setup lang="ts">
import CountDown from './components/CountDown.vue';
import MatchGestor from './components/MatchGestor.vue';
import MatchHistory from './components/MatchHistory.vue';
import PageHeading from './components/PageHeading.vue';
import TeamMembers from './components/TeamMembers.vue';
import TournamentTable from './components/TournamentTable.vue';


</script>

<template>
<CountDown/>
<PageHeading/>
<TournamentTable/> 
<MatchHistory/>
<TeamMembers/>
<MatchGestor/>
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
