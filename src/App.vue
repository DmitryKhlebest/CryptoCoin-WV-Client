<template>
  <div id="app">
    <div class="body" data-spy="scroll" data-target=".header" data-offset="60">
      <!-- header -->
      <header class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <!-- btn -->
              <button class="header__btn" type="button">
                <span class="lnr lnr-menu"></span>
                <span class="lnr lnr-cross"></span>
              </button>
              <!-- end btn -->
              <!-- logo -->
              <router-link data-scroll to="/" class="header__logo">
                <img class="header__logo-white" src="./static/img/logo.png" alt="Logo">
                <img class="header__logo-dark" src="./static/img/logo--dark.png" alt="Logo">
              </router-link>
              <!-- end logo -->
              <!-- tagline -->
              <span class="header__tagline">BuyCoin
                <br>Home Page
              </span>
              <!-- end tagline -->
              <!-- navigation -->
              <ul class="nav header__nav">
                <li>
                  <router-link data-scroll to="/">Home</router-link>
                </li>
                <li>
                  <router-link
                    v-if="this.$store.state.User"
                    data-scroll
                    to="/personal_page"
                  >Personal page</router-link>
                </li>
                <li>
                  <router-link v-if="this.$store.state.User" data-scroll to="/market_page">Market</router-link>
                </li>
                <li>
                  <router-link v-if="this.$store.state.User" data-scroll to="/history_page">History</router-link>
                </li>
              </ul>
              <!-- end navigation -->
              <div v-if="this.$store.state.User">
                <!-- logo -->
                <router-link
                  data-scroll
                  to="/personal_page"
                  class="header__logo"
                  style="margin-left: 20px"
                >
                  <img
                    style="width: 50px; height: 50px; margin-top: -5px"
                    :src="this.$store.state.User.avatar.image"
                    :title="this.$store.state.User.avatar.name"
                    alt="Without avatar"
                  >
                </router-link>
                <!-- end logo -->
                <!-- tagline -->
                <span class="header__tagline" style="color: green">
                  {{this.$store.state.User.login}}
                  <br>
                  {{this.$store.state.User.balance}}$
                </span>
                <!-- end tagline -->
              </div>
              <!-- sign in -->
              <router-link
                v-if="!this.$store.state.User"
                class="header__signin"
                to="/signin"
              >Sign In</router-link>
              <router-link
                v-if="this.$store.state.User"
                class="header__signin"
                to="/signout"
              >Sign Out</router-link>
              <!-- end sign in -->
            </div>
          </div>
        </div>
      </header>
      <!-- end header -->
      <!-- template -->
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
      <!-- end template -->
      <!-- footer -->
      <footer class="footer">
        <div class="container">
          <div class="row">
            <!-- section title -->
            <div
              class="col-xs-12 animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.2s"
            >
              <h2 class="section__title section__title--white">Stay with us</h2>
            </div>
            <!-- end section title -->
            <div
              class="col-xs-12 animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.8s"
            >
              <!-- copyright -->
              <small class="footer__copyright">
                © 2018
                <a href="#">BuyCoin</a>. Create by
                <a href="#">KDA-ZVO</a>
              </small>
              <!-- end copyright -->
            </div>
          </div>
        </div>
      </footer>
      <!-- end footer -->
      <!-- preloader -->
      <!-- <div class="preloader">
				<div class="preloader__logo">
					<img src="./static/img/logo--dark.png" alt>
				</div>
				<div class="preloader__spinner">
					<div class="preloader__bounce1"></div>
					<div class="preloader__bounce2"></div>
				</div>
      </div>-->
      <!-- end preloader -->
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const { token } = localStorage;

    if (token)
      this.$store.state.sendRequest({
        method: "authorization",
        data: {
          token
        },
        callback: response => {
          if (response.ok) {
            this.$store.state.User = response.ok.user;
            this.$router.replace("/personal_page");
          } else {
            this.$router.replace("/");
          }
        }
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
