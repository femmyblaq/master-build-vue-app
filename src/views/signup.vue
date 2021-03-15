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
                >sign in.</span
              >
            </p>
            <form @submit.prevent="onSubmit">
              <div class="form-group mt-2">
                <label for="email">Email *</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                  v-model="email"
                />
              </div>
              <div class="form-group mt-2">
                <label>Age *</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  v-model="age"
                />
              </div>
              <div class="form-group mt-2">
                <label>Password *</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                  v-model="password"
                />
              </div>
              <div class="form-group mt-2">
                <label>Comfirm Password *</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  v-model="confirmPassword"
                />
              </div>

              <div class="form-group mt-2">
                <label for="Country">Country</label>

                <select
                  id="country"
                  v-model="country"
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm"
                >
                  <option selected>USA</option>
                  <option value="india">India</option>
                  <option value="uk">UK</option>
                  <option value="germany">Germany</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                </select>
              </div>
              <div class="hobbies mt-2">
                <h6>Add some Hobbies</h6>
                <button
                  class="br-0 btn btn-success"
                  @click="onAddHobby"
                  type="button"
                >
                  Add Hobby
                </button>
                <div class="hobby-list my-3">
                  <div
                    class="input"
                    v-for="(hobbyInput, index) in hobbyInputs"
                    :key="hobbyInput.id"
                  >
                    <label :for="hobbyInput.id">Hobby #{{ index + 1 }}</label>
                    <input
                      type="text"
                      class="m-2"
                      :id="hobbyInput.id"
                      v-model="hobbyInput.value"
                    />
                    <button
                      class="btn btn-danger btn-small px-1 py-0 ms-2"
                      @click="onDeleteHobby(hobbyInput.id)"
                      type="button"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  class=" me-2"
                  v-model="terms"
                />
                <label for="terms">Accept Terms of Use</label>
              </div>
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
export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      hobbyInputs: [],
      country: "",
      terms: false,
    };
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: "",
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter((hobby) => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        comfirmPassword: this.confirmPassword,
        country: this.country,
        hobbyInputs: this.hobbyInputs.map((hobby) => hobby.value),
        terms: this.terms,
      };
      console.log(formData);
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
