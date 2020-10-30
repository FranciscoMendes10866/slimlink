<template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active">
      <template #left>
        <h3>SlimLink</h3>
      </template>
      <vs-navbar-item :active="active == 'home'" id="home">
        <p>Home</p>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'about'" id="about">
        <p>About</p>
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Sign in</vs-button>
        <vs-button>Sign up</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    active: 'home',
  }),
})
</script>
