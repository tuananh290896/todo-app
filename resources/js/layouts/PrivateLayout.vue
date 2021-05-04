<template>
  <Loading v-if="isLoading" />
  <div v-else class="page">
    <slot />
  </div>
</template>

<script>
import "./privateLayout.scss";
import { mapActions, mapState } from "vuex";
import { USER_INFO, USER_LOADING } from "@constants/actionTypes";
import Header from "@components/includes/Header"
import Loading from "@components/commons/Loading"
import { AuthRepository } from "@repositories";
const authRepository = new AuthRepository();

export default {
  name: "private-layout",
  components: {
    Header,
    Loading
  },
  created() {
    this[USER_LOADING](true);

    authRepository
      .getInfo()
      .then((res) => {
        this[USER_INFO](res.data);
        setTimeout(() => this[USER_LOADING](false), 1500);
      })
      .catch((err) => {
        this[USER_LOADING](false);
      });
  },
  methods: {
    ...mapActions("auth", [USER_INFO, USER_LOADING]),
  },
  computed: {
    ...mapState("auth", ["isLoading", "payload"]),
  },
};
</script>

<style>
</style>