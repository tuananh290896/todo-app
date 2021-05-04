<template>
  <div id="main">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>