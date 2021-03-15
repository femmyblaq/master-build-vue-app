<template>
  <div class="container-fluid">
    <div class="row me-0">
      <div class="col-lg-3 text-center mx-auto"></div>
    </div>
    <div class="row me-0">
      <div class="col-lg-6 mx-auto d-flex justify-content-center">
        <div class="card w-100 shadow">
          <p class="card-text text-center">
            Sign In
          </p>
          <div class="card-body px-lg-5">
            <form action="">
              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Age *</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  v-model="age"
                />
              </div>
              <div class="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <label>Comfirm Password *</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  v-model="confirmPassword"
                />
              </div>
              <div class="form-group">
                <label for="Country">
                  <select id="country" v-model="country" class="form-control">
                    <option value="usa">USA</option>
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="germany">Germany</option>
                  </select>
                </label>
              </div>
              <div class="btn btn-success btn-block w-100 mt-4">Sign up</div>
            </form>
            <p class="mt-3">
              have an account?
              <span class="text-decoration-underline text-danger"
                >sign in.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
