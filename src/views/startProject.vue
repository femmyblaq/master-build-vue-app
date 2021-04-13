<template>
  <div class="container-fluid">
    <div class="top-qoute p-lg-5">
      <p class="my-display-4 text-light">Quality upon Quality</p>
      <h3 class="w-50 text-white">
        Start a project with masterbuild today at convenient price.
      </h3>
    </div>
    <div class="project-info my-4 px-lg-5">
      <div class="row mx-0 px-0">
        <div class="col-lg-4 px-2">
          <span class="linediv"></span>
          <div class="d-flex pb-3">
            <span class="num">1</span>
            <div class="steps ps-lg-5">
              <h5 class="fw-bold">Project Introduction</h5>
              <p>
                Complete the application form below to tell us about your
                project. Ensure you signed the NDA and upload necessary
                documents
              </p>
            </div>
          </div>
          <div class="d-flex py-4">
            <span class="num">2</span>
            <div class="steps ps-lg-5">
              <h5 class="fw-bold">Meeting Schedule</h5>
              <p>
                You will receive an email with details on how you can schedule a
                virtual meeting with our team to discuss your project
                requirement.
              </p>
            </div>
          </div>
          <div class="d-flex pt-3">
            <span class="num">3</span>

            <div class="steps ps-lg-5">
              <h5 class="fw-bold">Receive a Quotation</h5>
              <p>
                After the meeting, we will send you your project development
                quotation. You need to approve our quotation for us to proceed.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 px-lg-5">
          <div class="card shadow">
            <div class="card-body p-4">
              <form>
                <div class="names row">
                  <div class="form-group mt-3 col-md-6">
                    <strong
                      ><label for="Name"
                        >Name <span class="text-danger">*</span></label
                      ></strong
                    >
                    <input type="text" class="form-control w-100" />
                    <label>First </label>
                  </div>
                  <div class="form-group col-md-6 mt-4 pt-3">
                    <input type="text" class="form-control w-100" />
                    <label>Last </label>
                  </div>
                </div>

                <div class="row">
                  <div class="form-group mt-3 col-md-6">
                    <strong
                      ><label for=""
                        >Phone <span class="text-danger">*</span></label
                      ></strong
                    >
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group mt-3 col-md-6">
                    <strong
                      ><label for=""
                        >Email <span class="text-danger">*</span></label
                      ></strong
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row">
                  <div class="form-group mt-3 col-md-6">
                    <strong
                      ><label for=""
                        >Service <span class="text-danger">*</span></label
                      ></strong
                    >
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group mt-3 col-md-6">
                    <strong
                      ><label for=""
                        >Budget <span class="text-danger">*</span></label
                      ></strong
                    >
                    <select
                      id="budjet"
                      class="form-select myDropDown form-select-sm fw-bold"
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
                </div>
                <div class="form-group mt-3">
                  <strong
                    ><label for=""
                      >Elaborate on your Request
                      <span class="text-danger">*</span></label
                    ></strong
                  >
                  <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="5"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="btn btn-danger" type="submit">Submit</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-fluid .top-qoute {
  background-color: #141414;
}
.container-fluid .top-qoute p {
  color: #ccc;
  font-size: 1.5em;
  font-weight: lighter;
}
.container-fluid .top-qoute h3 {
  font-weight: 700;
  font-size: 2.5em;
}
.project-info .col-lg-4 .num {
  background-color: rgb(248, 208, 134);
  border: 3px solid rgb(245, 138, 99);
  height: 35px;
  width: 50px;
  padding: 0 10px;
  border-radius: 100%;
  /* text-align: center; */
  font-weight: 600;
  font-size: 0.8em;
  padding-top: 2px !important;
}
.project-info .col-lg-4 .linediv {
  position: absolute;
  height: 600px;
  width: 1px;
  background-color: #ccc;
  z-index: -1;
  left: 6.4%;
}
.project-info .col-lg-4 .d-flex p {
  color: #ccc;
  font-size: 0.9em;
}
.project-info .card .form-group input,
.project-info .card .form-group textarea {
  border: none;
  background-color: #ddd;
  border-radius: 0;
  padding: 3px;
}
.project-info .card .form-group .myDropDown {
  height: 40px;
  overflow: auto;
}
</style>
