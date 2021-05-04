<template>
    <div class="bg-gray content pt-5 px-2">
      <div class="list">

        <div class="list-logo">
          <img src="/images/logo.svg" alt="logo list"/>
          <p>Hello "{{payload && payload.name}}" 😜</p>
        </div>

        <div class="list-form">
          <Form :onSuccess="onAddSuccess"/>
        </div>

      </div>
    </div>
</template>

<script>
import './home.scss';
import { mapState } from "vuex";
import Form from './Form';

export default {
  name: 'home-cmp',
  components: {
    Form
  },
  methods: {
    onAddSuccess: function(){

    }
  },
  computed: {
    ...mapState("auth", ["isLoading", "payload"]),
  },
}
</script>