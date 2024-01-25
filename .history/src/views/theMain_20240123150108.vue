<script setup>

</script>

<template>
  <ul>
    <li>
        <router-link to="/main/checkViolations">checkViolations</router-link>
    </li>
    <li>
        <router-link to="/main/gasStation">gasStation</router-link>
    </li>
    <li>
        <router-link to="/main/checkSL">checkSL</router-link>
    </li>
    <li>
        <router-link to="/main/writeGSI">writeGSI</router-link>
    </li>
    <li>
        <router-link to="/main/writeSL">writeSL</router-link>
    </li>
    <li>
        <router-link to="/main/urgentAsk">urgentAsk</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<style scoped>

</style>