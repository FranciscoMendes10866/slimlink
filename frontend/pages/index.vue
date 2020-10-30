<template>
  <div>
    <Navbar />
    <!-- Hero Landing -->
    <section class="hero mt-6">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered py-6">
            <div class="column is-12-mobile is-12-tablet is-8-desktop">
              <h1
                class="is-size-1 has-text-left-mobile has-text-weight-semibold has-text-black"
              >
                SlimLink URL Shortener is better than chocolate.
              </h1>
              <p class="is-size-5 mt-5 has-text-left-mobile has-text-grey">
                I know it's a bold statement but with
                <strong class="has-text-grey-dark">SlimLink</strong> you can
                create as many links as you want and you can use the same
                account on several devices simultaneously without any problems.
              </p>
              <vs-button class="mt-6 ab" size="large" floating>
                Get Started for Free
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Level Component -->
    <section class="py-6">
      <div class="container has-text-centered">
        <h3 class="is-size-5 has-text-grey mb-6">
          Ideal for use on the following platforms:
        </h3>
        <nav class="level">
          <div class="level-item">
            <div>
              <figure class="image is-32x32">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F96%2FInstagram.svg%2F1200px-Instagram.svg.png&f=1&nofb=1"
                />
              </figure>
            </div>
          </div>
          <div class="level-item">
            <div>
              <figure class="image is-32x32">
                <img
                  src="https://www.freelogoservices.com/blog/wp-content/uploads/new-facebook-logo.png"
                />
              </figure>
            </div>
          </div>
          <div class="level-item">
            <div>
              <figure class="image is-32x32">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FCKMemzqNplY37Jwi0Yk3AHaGl%26pid%3DApi&f=1"
                />
              </figure>
            </div>
          </div>
          <div class="level-item">
            <div>
              <figure class="image is-32x32">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Frq36kl1xjxr01.png&f=1&nofb=1"
                />
              </figure>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <!-- Tiles Component -->
    <section class="py-6 mt-6">
      <div class="container">
        <!-- Header -->
        <div class="has-text-centered">
          <h1
            class="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark"
          >
            Complete link management
          </h1>
          <p class="is-size-5 mt-5 has-text-left-mobile has-text-grey">
            Everything you need to create and manage powerful links at scale.
          </p>
        </div>
        <!-- Tiles -->
        <div class="tile is-ancestor mt-6">
          <div class="tile is-4 is-parent">
            <div
              class="tile is-child box remove-shadow has-background-white-bis"
            >
              <h4
                class="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
              >
                👋&nbsp;Easily redirect any link
              </h4>
              <small class="has-text-grey">
                Change the destination URL for any short link, including QR
                Codes. Bitly makes it easy to assign a new URL to any of your
                links, whether you want to correct a destination error, update a
                destination or manually expire old links.
              </small>
            </div>
          </div>
          <div class="tile is-4 is-vertical is-parent">
            <div
              class="tile is-child box remove-shadow has-background-white-bis"
            >
              <h4
                class="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
              >
                🔑&nbsp;Create secure & reliable links
              </h4>
              <small class="has-text-grey">
                Rest assured knowing your links are secure. Every link is
                encrypted with HTTPS to guard against eavesdropping or
                third-party tampering—because you have more important things to
                worry about.
              </small>
            </div>
            <div
              class="tile is-child box remove-shadow has-background-white-bis"
            >
              <h4
                class="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
              >
                🐧&nbsp;Seamless integrations
              </h4>
              <small class="has-text-grey">
                Integrate Bitly with your preferred social media management
                tools to easily share branded links in all of your social
                content.
              </small>
            </div>
          </div>
          <div class="tile is-4 is-vertical is-parent">
            <div
              class="tile is-child box remove-shadow has-background-white-bis"
            >
              <h4
                class="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
              >
                🌱&nbsp;Turn your links into brand assets
              </h4>
              <small class="has-text-grey">
                With trust comes action. Businesses that share custom links see
                up to a 34% boost in click-throughs. It’s simple: If your
                audience trusts your links and knows where they lead, they’re
                more likely to click on them.
              </small>
            </div>
            <div
              class="tile is-child box remove-shadow has-background-white-bis"
            >
              <h4
                class="is-size-5 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
              >
                🍬&nbsp;Create recognizable links
              </h4>
              <small class="has-text-grey">
                Take custom links a step further with custom back-halves. When
                you edit the back-half of a link you give people a preview of
                where you’re sending them, building trust and boosting
                click-throughs.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Creators -->
    <section class="py-6 mt-6">
      <div class="columns is-justify-content-space-between">
        <div class="column is-3 left-img is-hidden-mobile"></div>
        <div class="column is-4 is-12-mobile">
          <h5
            class="is-size-3 mb-3 has-text-centered has-text-weight-semibold has-text-grey-dark"
          >
            I built SlimLink for content creators like you.
          </h5>
          <p class="is-size-6 mt-5 has-text-grey">
            A URL Shortener that integrates with your favourite platforms and
            transforms your passive audience into passionate superfans for life.
          </p>
          <p class="is-size-6 mt-5 has-text-grey">
            In addition to all this, you have access to all your links in a
            fast, secure and private way.
          </p>
          <p class="is-size-6 mt-5 has-text-grey">
            Once you think you should delete the specific link, you can do that
            task as soon as you understand. The link will not be deleted
            organically.
          </p>
          <vs-button class="mt-6 ab" size="large" floating>
            Let's Begin
          </vs-button>
        </div>
        <div class="column is-3 right-img is-hidden-mobile"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>

<style scoped>
.remove-shadow {
  box-shadow: none !important;
}
.left-img {
  background-image: url('https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2acb14fffe41871fc0833b_creators-left%402x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  position: relative;
}
.right-img {
  background-image: url('https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2acb2cbba8032240f4d5dd_creators-right%402x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
}
</style>
