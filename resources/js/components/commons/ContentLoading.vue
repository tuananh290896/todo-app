<template>
  <div class="content-loading">
     <a-skeleton active v-for="item, index in arrs" :key="index" :paragraph="true" :title="false" avatar :loading="true"/>
  </div>
</template>

<script>
export default {
  name: 'content-loading-comp',
  props: {
    count: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      arrs: new Array(this.$props.count)
    }
  }
}
</script>