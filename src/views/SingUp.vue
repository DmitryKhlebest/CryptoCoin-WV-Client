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
                  <div id="signup" style="width: 50%;">
                    <h6 class="home__title">Sign Up</h6>

                    <form class="form" @submit.prevent="signup">
                      <input v-model="login" type="text" class="form__input" placeholder="Login">
                      <input v-model="email" type="text" class="form__input" placeholder="Email">
                      <input
                        v-model="password"
                        type="password"
                        class="form__input"
                        placeholder="Password"
                      >
                      <router-link class="form__btn" to="/signin">Sign In</router-link>
                      <button class="form__btn" type="submit">Sign Up</button>
                    </form>

                    <br>
                    <br>
                    <p
                      v-if="error"
                      class="home__text"
                      style="color: red;"
                    >Login is probably already taken</p>
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
      login: "some user",
      email: "some email",
      password: "some password",
      error: false
    };
  },
  methods: {
    signup() {
      const login = this.login;
      const email = this.email;
      const password = this.password;

      // request = {
      // 	method: 'registration',
      // 	data: {
      // 		login,
      // 		password,
      // 		email
      // 	}
      // };

      // response = {
      // 	method: 'registration',
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
        method: "registration",
        data: {
          login,
          email,
          password
        },
        callback: response => {
          if (response.ok) {
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
