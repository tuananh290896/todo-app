<template>
  <a-form :form="form" @submit="handleSubmit" layout="inline">
    <a-form-item>
      <a-input
        v-decorator="['title']"
        placeholder="✍️ Add note..."
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
import { transformErrors } from "@utils/helper";
import { NoteRepository } from '@repositories';
const noteRepository = new NoteRepository();

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
      noteRepository.create(values)
      .then((res) => {
        this.form.resetFields();
        this.$props.onSuccess();
        this.isLoading = false;
      })
      .catch((err) => {
          if(err.code == 422) {
            const errors = transformErrors(err.message, values);
            this.form.setFields(errors);
          }
          this.isLoading = false;
      });
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