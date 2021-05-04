<template>
  <div class="login">
    <div class="login-form">
      <h1 class="login-form-title">Login</h1>
      <a-alert type="error" :message="message" banner v-if="message" class="mb-2"/>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="['email']"
            class="login-input"
            placeholder="Email"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password']"
            class="login-input"
            type="password"
            placeholder="Password"
          />
        </a-form-item>
        <a-form-item class="mb-0">
          <a-checkbox v-decorator="['remember', { valuePropName: 'checked' }]">
            Remember me
          </a-checkbox>
          <router-link to="/register" class="login-link-register text-danger float-right"> You don't have an account?</router-link>
        </a-form-item>
        <a-form-item>
          <a-button
            class="btn-login"
            type="primary"
            html-type="submit"
            :loading="isLoading"
          >
            Login
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { transformErrors } from "@utils/helper";
import { LOGIN } from '@constants/actionTypes';
import { AuthRepository } from "@repositories";
const authRepository = new AuthRepository();

export default {
  name: "login-comp",
  methods: {
    ...mapActions('auth', [LOGIN]),
    handleSubmit: function (e) {
      e.preventDefault();
      this.isLoading = true;
      let values = this.form.getFieldsValue();

      authRepository
        .login(values)
        .then((res) => {
          this.mutation = true;
          this[LOGIN](res.data);
          this.$router.push(this.$route.query.next_url || '/')
        })
        .catch((err) => {
          this.isLoading = false;
          if(err.code != 422) {
            this.message = err.message;
            return;
          }
          
          const errors = transformErrors(err.message, values);
          this.form.setFields(errors);
        });
    },
  },
  data() {
    return {
      isLoading: false,
      errors: {},
      message: null,
      form: this.$form.createForm(this, {}),
    };
  },
  computed: {
    ...mapState('auth', ['token'])
  }
};
</script>