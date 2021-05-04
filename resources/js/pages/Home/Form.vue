<template>
  <a-form :form="form" @submit="handleSubmit" layout="inline">
    <a-form-item>
      <a-input
        v-decorator="['name']"
        placeholder="✍️ Add item..."
      />
    </a-form-item>
    <a-button
        class="btn-submit"
        type="primary"
        html-type="submit"
        :loading="isLoading"
      >
        <b-icon icon="plus-circle" class="plus-icon"></b-icon>
    </a-button>
  </a-form>
</template>

<script>
export default {
  name: "home-form-comp",
  props: {
    onSuccess: Function,
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.isLoading = true;
      let values = this.form.getFieldsValue();
      console.log(values);
    },
  },
  data() {
    return {
      isLoading: false,
      errors: {},
      form: this.$form.createForm(this, {}),
    };
  },
};
</script>