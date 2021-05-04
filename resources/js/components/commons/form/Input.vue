<template>
  <div class="form-group">
    <label :for="'input-' + name" v-if="label">{{ this.label }}</label>
    <b-form-input
      v-bind:name="name"
      v-bind:type="type"
      v-bind:placeholder="placeholder"
      :state="!validation"
      v-bind:class="className"
    />

    <b-form-invalid-feedback v-if="validation">
      {{ validation }}
    </b-form-invalid-feedback>
  </div>
</template>

<script>
import { getError } from "@utils/helper";

export default {
  name: "input-comp",
  props: {
    label: String,
    name: String,
    type: String,
    placeholder: String,
    errors: Object,
    className: String,
  },
  computed: {
    validation: function () {
      return getError(this.$props.errors, this.$props.name);
    },
  },
};
</script>