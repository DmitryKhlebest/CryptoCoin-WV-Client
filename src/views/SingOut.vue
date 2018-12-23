<template>
  <div></div>
</template>

<script>
export default {
  created() {
    // request = {
    // 	method: 'logout',
    // 	data: {}
    // };

    // response = {
    // 	method: 'logout',
    // 	data: {
    // 		ok: {}
    // 	}
    // };

    this.$store.state.sendRequest({
      method: "logout",
      data: {},
      callback: response => {
        if (response.ok) {
          this.$store.state.User = null;
          delete localStorage.token;
          this.$router.replace("/");
        }
      }
    });
  }
};
</script>
