<template>
  <div>
    <!-- Navbar -->
    <section class="pb-6">
      <div class="container">
        <Navbar />
      </div>
    </section>
    <!-- Hero Landing -->
    <section class="hero">
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
              <vs-button class="mt-6 reset" size="large" floating>
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
          <div class="level-item">
            <div>
              <figure class="image is-32x32">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1"
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
              <small class="has-text-grey mb-3">
                Change the destination URL for any short link, including QR
                Codes. Bitly makes it easy to assign a new URL to any of your
                links, whether you want to correct a destination error, update a
                destination or manually expire old links.
              </small>
              <br /><br />
              <small class="has-text-grey">Including examples ...</small>
              <ul class="mt-5 has-text-grey">
                <li class="bunny">
                  <small>Youtube Descriptions</small>
                </li>
                <li class="bunny">
                  <small>Instagram Bio</small>
                </li>
                <li class="bunny">
                  <small>Link on Facebook post</small>
                </li>
                <li class="bunny">
                  <small>Affiliate link</small>
                </li>
                <li class="bunny">
                  <small>Place in newsletters</small>
                </li>
                <li class="bunny">
                  <small>And much more</small>
                </li>
              </ul>
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
          <vs-button class="mt-6 reset" size="large" floating>
            Let's Begin
          </vs-button>
        </div>
        <div class="column is-3 right-img is-hidden-mobile"></div>
      </div>
    </section>
    <!-- Quote Component -->
    <section class="py-6 mt-6 mb-6">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="is-size-3 has-text-left-mobile has-text-grey">
              "Truth is ever to be found in simplicity, and not in the
              multiplicity and confusion of things."
            </p>
            <p class="is-size-5 has-text-grey mt-5">Isaac Newton</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Products you already use -->
    <section class="py-6 mt-6 mb-6">
      <div class="container">
        <div class="columns is-variable is-8">
          <div class="column is-6">
            <h5
              class="is-size-3 mb-3 has-text-left has-text-weight-semibold has-text-grey-dark"
            >
              Easily connects with the tools you already use.
            </h5>
            <p class="is-size-6 mt-5 has-text-grey">
              Integrate your community directly with your website, with your
              blog, with another social network or simply into a giveaway pool.
            </p>
            <p class="is-size-6 mt-5 has-text-grey">
              However, you can also use SlimLink if you want to minimize the
              size of a link from a partnership you have made or an advertising
              campaign that you are part of.
            </p>
            <p class="is-size-6 mt-5 has-text-grey">
              You can rest assured that you can use this same platform, whether
              for non-monetary projects or as another tool in your marketing or
              advertising arsenal.
            </p>
          </div>
          <div class="column is-6">
            <img
              src="https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f33de84363a686042550ff3_feature-integrations%402x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing -->
    <section class="py-6 mt-6 mb-6">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1
              class="is-size-3 has-text-left-mobile has-text-weight-semibold has-text-dark"
            >
              Pricing
            </h1>
            <p class="is-size-5 mt-5 mb-6 has-text-left-mobile has-text-grey">
              The platform is completely free. Start enjoying it right now.
            </p>
            <div class="card remove-shadow has-background-white-bis">
              <div class="card-content">
                <div class="content">
                  <div class="columns is-align-items-center">
                    <div class="column">
                      <ul class="has-text-grey has-text-left reset">
                        <li class="ok-hand">
                          <small>Unlimited links</small>
                        </li>
                        <li class="ok-hand">
                          <small>Unlimited seats</small>
                        </li>
                        <li class="ok-hand">
                          <small>Redirect unlimited links</small>
                        </li>
                        <li class="ok-hand">
                          <small>Custom Slug</small>
                        </li>
                        <li class="ok-hand">
                          <small>Number of clicks allowed</small>
                        </li>
                        <li class="ok-hand">
                          <small>SSL protection</small>
                        </li>
                      </ul>
                    </div>
                    <div class="column has-text-centered">
                      <div>
                        <h1
                          class="is-size-2 has-text-grey has-text-weight-light"
                        >
                          <span
                            class="is-size-2 has-text-dark has-text-weight-semibold"
                            >€ 0</span
                          >/mo
                        </h1>
                        <vs-button class="reset mb-4" flat>
                          Get Started for Free
                        </vs-button>
                        <small class="has-text-grey-light sm-txt"
                          >No credit card required.</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  components: {
    Navbar,
    Footer,
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
.bunny {
  list-style: none;
}
.bunny:not(:last-child) {
  margin-bottom: 10px;
}
.bunny::before {
  content: '\1F430';
  margin-right: 10px;
}
.ok-hand {
  list-style: none;
}
.ok-hand:not(:last-child) {
  margin-bottom: 10px;
}
.ok-hand::before {
  content: '\1F44c';
  margin-right: 10px;
}
.sm-txt {
  font-size: 13px;
}
.reset {
  margin: auto;
}
</style>
