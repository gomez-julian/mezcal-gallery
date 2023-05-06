<template>
<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8 text-2xl">Prepárense 🔥</div>
    <div class="align-items-center lg:flex">
        <span class="line-height-3 text-2xl">{{ countDown  }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const countDown = ref<string>('');

// Set the date we're counting down to
var countDownDate = new Date('2023-05-06T22:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  countDown.value = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    countDown.value = "SE ESTÁ REALIZANDO EL TORNEO AHORA MISMO!"
  }
}, 1000);

</script>

<style scoped>

</style>