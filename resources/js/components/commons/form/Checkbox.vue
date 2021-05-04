<template>
  <div class="form-group">
    <b-form-checkbox
      v-bind:id = "'input-'+name"
      v-bind:name = "name"
      v-bind:class = "className"
      value="1"
    >
      <slot />
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: 'checkbox-comp',
  props: {
    name: String,
    errors: Object,
    className: String
  }
}
</script>