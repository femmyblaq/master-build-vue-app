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
          <h3 class="card-text text-center">
            Sign Up
          </h3>
          <div class="card-body pt-0 px-lg-5">
            <p class=" text-center">
              have an account?
              <span class="text-decoration-underline text-danger"
                ><a href="/signin">sign in.</a></span
              >
            </p>
            <form @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="name">First Name *</label>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Name"
                    v-model="firstName"
                  />
                </div>
                <div class="col-md-6 form-group">
                  <label for="email">Last Name *</label>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Last Name"
                    v-model="lastName"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label for="email">UserName *</label>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="userName"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label for="email">phone Number *</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Your Number"
                    v-model="phoneNumber"
                  />
                </div>
                <div class="col-md-12 form-group mt-2">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="email"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label>Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label>Comfirm Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                  />
                </div>
              </div>

              <!-- <div class="form-group mt-2">
                <label>Age *</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  v-model="age"
                />
              </div> -->
              <button
                type="submit"
                class="btn btn-success btn-block w-100 mt-4"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: null,
      email: "femmyhy@gmail.com",
      password: "",
      confirmPassword: "",
      showAlert: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
          first_name: this.firstName,
          last_name: this.lastName,
          username: this.userName,
          phone_no: this.phoneNumber,
          email: this.email,
          password: this.password,
          comfirmPassword: this.confirmPassword,
        };
        console.log(formData);
        const response = await this.$store.dispatch("signUp", formData);
        console.log("HHHH", response);

        this.$notify({
          group: "foo",
          title: "Sucessful",
          type: "sucess",
          text: response.message,
        });
        this.$swal({
          icon: "success",
          text:
            "Your Registration was successful, kindly activate your account via email!!",
          showConfirmButton: false,
        });
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
