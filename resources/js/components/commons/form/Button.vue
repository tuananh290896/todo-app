<template>
  <button :class="['btn-form ', className]" :disabled="loading">
      <b-icon v-if="loading" icon="circle-fill" animation="throb" font-scale="1.5" class="btn-icon"></b-icon>
      <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'button-cmp',
  props: {
    className: String,
    type: String,
    loading: Boolean
  }
}
</script>