<template>
  <div>
    <!-- home -->
    <section id="home" class="home section--bg" data-bg="../static/img/home/slide.jpg">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- home content -->
            <div
              class="home__content-wrap animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.5s"
            >
              <div class="home__content" align="center">
                <div align="center">
                  <div id="signin" style="width: 50%;">
                    <h6 class="home__title">Sign In</h6>

                    <form class="form" @submit.prevent="signin">
                      <input v-model="login" type="text" class="form__input" placeholder="Login">
                      <input
                        v-model="password"
                        type="password"
                        class="form__input"
                        placeholder="Password"
                      >
                      <div style="float: left;">
                        <router-link class="form__btn" style="left: 50%" to="/signup">Sign Up</router-link>
                      </div>
                      <div style="float: right;">
                        <button class="form__btn" style="left: 50%" type="submit">Sign In</button>
                      </div>
                    </form>

                    <br>
                    <br>
                    <p v-if="error" class="home__text" style="color: red;">{{error}}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end home content -->
          </div>
        </div>
      </div>
    </section>
    <!-- end home -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      // login: "Dmitry",
      // password: "Dmitry",
      error: null
    };
  },
  created() {
    this.$store.state.startAnimate();
  },
  methods: {
    signin() {
      const login = this.login;
      const password = this.password;

      this.$store.state.sendRequest({
        method: "authorization",
        data: {
          login,
          password
        },
        callback: response => {
          if (response.ok) {
            this.$store.state.User = response.ok.user;
            localStorage.token = response.ok.token;
            this.$router.replace("/personal_page");
          } else {
            this.error = response.error.message;
            setTimeout(() => (this.error = null), 3000);
          }
        }
      });
    }
  }
};
</script>
