<template>
  <div class="center examplex">
    <vs-navbar center-collapsed>
      <template #left>
        <h3>SlimLink</h3>
      </template>
      <template #right>
        <vs-button flat to="/signin">Sign in</vs-button>
        <vs-button to="/signup">Sign up</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
