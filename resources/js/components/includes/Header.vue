<template>
  <b-navbar class="header" toggleable="lg" fixed="top">
    
    <b-navbar-brand to="/">
      <img src="/images/logo/logo3.png" alt="logo"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Plan</b-nav-item>
          <b-nav-item href="#">Enviroment</b-nav-item>
          <b-nav-item-dropdown right v-if="user">
            <template #button-content>
              <b>Welcome, {{user.name}}</b>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: Object
  }
};
</script>

<style lang="scss" module>
  @import "./Header.module.scss";
</style>