<template>
  <div class="container-fluid">
    <div class="row me-0">
      <div class="col-lg-3 text-center mx-auto">
        <img src="/assets/masterbuid.png" alt="" />
      </div>
    </div>
    <div class="row me-0">
      <div class="col-lg-6 mx-auto d-flex justify-content-center">
        <div class="card w-100 shadow">
          <p style="font-size: 2em;" class="card-text text-center">
            Sign In
          </p>
          <div class="card-body px-lg-5">
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" class="form-control" v-model="email" />
              </div>

              <div class="form-group">
                <label for="email">Password *</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-success btn-block w-100 mt-4"
              >
                Sign in
              </button>
            </form>
            <p class="mt-3">
              Don't have an account?
              <span class="text-decoration-underline text-danger"
                ><a href="/signup">sign up.</a></span
              >
            </p>
            <p>
              check out my dashboard page without signing in
              <span><router-link to="/dashboard">Dashboard</router-link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // email: "",
      //password: "",
      email: "femmyhy200@gmail.com",
      password: "555555",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
          email: this.email,
          password: this.password,
        };
        console.log(formData);
        const request = await this.$store.dispatch("login", formData);
        console.log("hhh", request);

        this.$notify({
          group: "foo",
          title: "Sucessful",
          type: "sucess",
          text: request.message,
        });
        // this.$router.replace("/dashboard");

        window.location = "/dashboard";
      } catch (error) {
        this.$notify({
          group: "foo",
          title: "Error",
          type: "error",
          text: error.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  font-family: "Arvo";
  font-size: 0.8em;
}
</style>
