<template>
  <form @submit.prevent="onSubmit($event)">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'form-comp',
  props: {
    form: Object,
    onFinish: Function
  },
  methods: {
    onSubmit: function(event){
      let formData = new FormData(event.target);
      this.$props.onFinish(formData);
    }
  }
}
</script>