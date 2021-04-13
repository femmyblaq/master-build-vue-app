<template>
  <div class="container-fluid">
    <div id="home">
      <div class="overlay-container">
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
          <div class="container-overlay">
            <img
              src="../../public/assets/pexels-thisisengineering.jpg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay-two"></div>
            <div class="text-two text-right pe-lg-4">
              <i class="fas fa-laptop-code mb-3"></i>
              <h5 class="fw-bolder">Mobile App Development</h5>
              <p>
                Build a mobile application for your business and idea with less
                incovinience.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="container-overlay">
            <img
              src="../../public/assets/pexels-kevin.jpg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay-two"></div>
            <div class="text-two text-right pe-lg-4">
              <i class="far fa-window-maximize mb-3"></i>
              <h5 class="fw-bolder">Web Development</h5>
              <p>
                Build a web application for your business and idea with less
                incovinience.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="container-overlay">
            <img
              src="../../public/assets/kelly-sikkema.jpg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay-two"></div>
            <div class="text-two text-right pe-lg-4">
              <i class="far fa-edit mb-3"></i>
              <h5 class="fw-bolder">UI/UX Designs</h5>
              <p>
                Build a mobile application for your business and idea with less
                incovinience.
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

#home #fixed {
  background-image: url("../../public/assets/computer.jpg");
  height: 150vh;
  width: 100%;
  display: block;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#home .overlay-container {
  position: relative;
  width: 100%;
}
.overlay-container .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 10%;
  background-color: #141414;
}
.container-fluid .overlay-container .overlay {
  opacity: 50%;
}
#home .text {
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
.btn {
  background-color: #f8f9fa;
  color: #000000;
  border-radius: 0 !important;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
}
.btn-danger {
  background-color: orangered !important;
  color: #f8f9fa;
  transition: all 0.5s ease-in-out;
}
.btn-danger:hover {
  background-color: rgb(175, 54, 10) !important;
  transition: all 0.5s ease;
}
/* what we do styling */
#what-we-do .container-overlay {
  position: relative;
  width: 100%;
  height: 400px;
  border: 2px solid #ddd;
  cursor: context-menu;
}
#what-we-do .container-overlay img {
  width: 100%;
  height: 100%;
  cursor: zoom-out;
}
#what-we-do .text-two {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 40%;
  left: 10%;
}
#what-we-do .text-two p {
  font-size: 0.9em;
}
#what-we-do .text-two i {
  font-size: 3em;
}
#what-we-do .overlay-two {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 70%;
  transition: 0.5s ease;
  background-color: #141414;
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
  background-attachment: fixed;
  border-radius: 5%;
}
.jobs .content {
  padding: 120px 100px;
}
</style>

// The world is depending on Technology.
