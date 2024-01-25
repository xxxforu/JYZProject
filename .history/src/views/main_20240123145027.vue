<script setup>

</script>

<template>
  <ul>
    <li>
        <router-link to="/main/Violations">Violations</router-link>
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
        <router-link to="/main/ask">ask</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<style scoped>

</style>