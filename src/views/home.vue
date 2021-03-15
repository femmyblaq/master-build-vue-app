<template>
  <div class="container-fluid">
    <div id="home" class="overlay-container">
      <figure>
        <div class="fixed-wrap">
          <div id="fixed"></div>
        </div>
      </figure>
      <div class="overlay"></div>

      <div class="text w-70">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="500"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h1>
                Master Build we collaborate with ambitious brands and people;
                Let build something great together.
              </h1>
            </div>
            <div class="carousel-item">
              <h1>If it's not online it is nothing.</h1>
            </div>
            <div class="carousel-item">
              <h1>Why not ask me to make your business explore.</h1>
            </div>
          </div>
        </div>
        <div class="btn btn-danger btn-lg mt-4 px-4">Start A Project</div>
      </div>
    </div>
    <!-- What can we do section  -->
    <div id="what-we-do">
      <div class="row me-0">
        <div class="col-12">
          <h2 class="text-center text-warning fw-bolder">
            WHAT CAN WE DO FOR YOUR BUSINESS.
          </h2>
        </div>
      </div>
      <div class="row p-lg-5 me-0">
        <div class="col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img
              src="../../public/assets/Online_learning.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img
              src="../../public/assets/construction.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 w-25">
          <div class="card" style="width: 18rem;">
            <img
              src="../../public/assets/Online_learning.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jobs m-0">
      <div class="content m-0">
        <p class="mb-0 font-5">What we do.</p>
        <h4 class="text-white fw-bolder">
          What Can We Do To Explore Your Business?
        </h4>
        <div class="row mx-0 text-center mt-3">
          <div class="col-lg-3 my-5">
            <img
              class="shadow"
              src="../../public/assets/christopher.jpg"
              alt=""
            />
            <p class="text-white mt-2">
              Create a Professional Website for you.
            </p>
          </div>
          <div class="col-lg-3 my-4">
            <img class="shadow" src="../../public/assets/carlos.jpg" alt="" />
            <p class="text-white mt-2">Manage your App.</p>
          </div>
          <div class="col-lg-3 my-4">
            <img
              class="shadow"
              src="../../public/assets/pexels-artem.jpg"
              alt=""
            />
            <p class="text-white mt-2">Advertise you Product.</p>
          </div>
          <div class="col-lg-3 my-4">
            <img class="shadow" src="../../public/assets/nordwood.jpg" alt="" />
            <p class="text-white mt-2">Graphic designs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 315px) and (max-width: 480px) {
  #fixed {
    background-image: url("/image/lapcode.jpg");
    height: 150vh;
  }
  .overlay-container {
    position: relative;
    width: 100%;
  }
  .container-fluid .overlay-container .overlay {
    opacity: 50%;
  }
  .text {
    top: 10%;
    left: 5% !important;
    text-align: left;
    width: 70% !important;
  }
  .carousel .carousel-inner .carousel-item h1 {
    font-size: 1.5em !important;
  }
  .jobs {
    background-color: orange;
  }
  .jobs .content img {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;
  }
  .jobs .content {
    padding: 60px 30px !important;
  }
}

#fixed {
  background-image: url("../../public/assets/computer.jpg");
  height: 150vh;
  width: 100%;
  display: block;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.overlay-container {
  position: relative;
  width: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 10%;
  background-color: #006400;
}
.container-fluid .overlay-container .overlay {
  opacity: 50%;
}
.text {
  color: white;
  position: absolute;
  top: 5%;
  left: 10%;
  text-align: left;
  width: 70%;
  z-index: 99;
}
.carousel .carousel-inner .carousel-item h1 {
  font-size: 3em;
  font-weight: 800;
  z-index: 2;
  font-family: "Ubuntu";
}

.jobs {
  background-color: orange;
}
.jobs .content img {
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5%;
}
.jobs .content {
  padding: 120px 100px;
}
</style>

// The world is depending on Technology.
