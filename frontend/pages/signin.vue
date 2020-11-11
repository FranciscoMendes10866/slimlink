<template>
  <div>
    <vs-button size="xl" class="back-btn" to="/" icon dark shadow circle>
      <i class="bx bx-arrow-back"></i>
    </vs-button>
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered has-text-centered">
            <div class="column is-4 reset">
              <h1 class="has-text-weight-semibold is-size-4">Sign in.</h1>
              <vs-input
                v-model="localEmail"
                class="mt-6 reset"
                border
                placeholder="Username"
                @input="handleLoginEmail"
              >
                <template #icon>
                  <i class="bx bx-user"></i>
                </template>
              </vs-input>
              <vs-input
                v-model="localPassword"
                class="mt-6 reset"
                placeholder="Password"
                border
                type="password"
                @input="handleLoginPassword"
              >
                <template #icon>
                  <i class="bx bx-lock-open-alt"></i>
                </template>
              </vs-input>
              <vs-button size="large" class="mt-6 reset" @click="SignIn"
                >Sign in.</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.reset {
  margin: auto;
}
.back-btn {
  top: 100px;
  left: 100px;
}
</style>
