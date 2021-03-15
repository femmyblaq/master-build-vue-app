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
          <p class="card-text text-center">
            Sign In
          </p>
          <div class="card-body px-lg-5">
            <form action="">
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" class="form-control" />
              </div>

              <div class="form-group">
                <label for="email">Password *</label>
                <input type="password" class="form-control" />
              </div>
              <div class="btn btn-success btn-block w-100 mt-4">Sign in</div>
            </form>
            <p class="mt-3">
              Don't have an account?
              <span class="text-decoration-underline text-danger"
                ><a href="/signup">sign up.</a></span
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
