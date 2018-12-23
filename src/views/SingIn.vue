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
                      <router-link class="form__btn" to="/signup">Sign Up</router-link>
                      <button class="form__btn" type="submit">Sign In</button>
                    </form>

                    <br>
                    <br>
                    <p
                      v-if="error"
                      class="home__text"
                      style="color: red;"
                    >Incorrect login or password</p>
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
      // login: "",
      // password: "",
      login: "user1",
      password: "password1",
      error: false
    };
  },
  created() {},
  methods: {
    signin() {
      const login = this.login;
      const password = this.password;

      // request = {
      // 	method: 'authorization',
      // 	data: {
      // 		login,
      // 		password
      // 	}
      // };

      // response = {
      // 	method: 'authorization',
      // 	data: {
      // 		ok: {
      // 			token,
      // 			user: {
      // 				id,
      // 				login,
      // 				imagePath,
      // 				balance
      // 			}
      // 		}
      // 	}
      // };

      this.$store.state.sendRequest({
        method: "authorization",
        data: {
          login,
          password
        },
        callback: response => {
          if (response.ok) {
            // response.ok.user.imagePath = "./static/img/author-page.jpg";
            this.$store.state.User = response.ok.user;
            localStorage.token = response.ok.token;
            this.$router.replace("/personal_page");
          } else {
            this.error = true;
          }
        }
      });
    }
  }
};
</script>
