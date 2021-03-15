<template>
  <!-- <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="#"
          ><img src="../../../image/masterbuid.png" class="w-70 h-70" alt=""
        /></a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">How To Pay</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div> -->
  <div class="container-fluid">
    <div class="navbar">
      <div class="navbar d-flex align-items-center">
        <div
          class="navbar-container d-flex align-items-center justify-content-between w-100 "
        >
          <a
            href=""
            id="navbar-logo"
            class="text-decoration-none d-flex align-items-center ms-lg-5"
          >
            <img src="../../public/assets/masterbuid2.png" alt=""
          /></a>

          <div class="navbar-toggle d-lg-none" id="mobile-menu">
            <span class="bar" style="width: 35px;"></span>
            <span class="bar mx-0" style="width: 30px;"></span>
            <span class="bar mx-0" style="width: 35px;"></span>
          </div>

          <ul
            class="navbar-menu list-inline text-center  fw-bold my-lg-auto pe-2"
          >
            <li class="navbar-item h-5 list-inline-item me-4">
              <router-link
                class="navbar-link h-100 text-decoration-none text-white"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="navbar-item h-5 list-inline-item me-4 ">
              <router-link
                to="/about"
                class="navbar-link h-100 text-decoration-none text-white"
                >About Us</router-link
              >
            </li>
            <li class="navbar-item h-5 list-inline-item me-4">
              <router-link
                to="/contact"
                class="navbar-link h-100 text-decoration-none text-white"
                >Contact</router-link
              >
            </li>
            <li class="navbar-item h-5 list-inline-item">
              <router-link
                to="/start"
                tag="button"
                class="btn btn-sm btn-danger px-4"
                >Start A Project</router-link
              >
            </li>
            <li class=" list-inline-item">
              <router-link
                to="/signin"
                tag="button"
                class="btn btn-sm btn-outline-light px-4"
                >Sign In</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr;
  background: #141414;
  width: 100%;
  height: 80px;
  z-index: 1;
  padding-top: 0;
}
.navbar-menu a:hover {
  border-bottom: 3px solid orangered;
  transition: 0.5s all;
}
.navbar-toggle {
  display: none;
}
.btn-sm {
  border-radius: 0 !important;
}
.btn {
  background-color: #f8f9fa;
  color: #000000;
  border-radius: 0 !important;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
}
.btn-outline-light:hover {
  padding: 10px;
  transition: all 0.5s ease-in-out;
}
.btn-danger {
  background-color: orangered !important;
  color: #f8f9fa;
  transition: all 0.5s ease-in-out;
}
.btn-danger:hover {
  padding: 10px;
  transition: all 0.5s ease-in-out;
}
@media (max-width: 991px) {
  .navbar {
    height: 80px;
  }
  .navbar img {
    width: 50% !important;
    margin-left: 0;
  }
  .navbar-toggle {
    display: block;
  }
  .navbar-menu {
    display: none;
    background-color: #141414;
    width: 100% i !important;
    height: 100vh !important;
    transition: all 500s ease;
    position: fixed;
    right: 0%;
    top: 0% !important;
    text-align: center;
    padding: 0 50px;
    z-index: 2;
    backdrop-filter: blur(2rem);
  }

  .navbar-menu.active {
    right: 0%;
    display: grid;
    transition: all 500s ease;
    z-index: 2;
    height: 100vh;
  }
  .navbar-toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: #00aff0;
    transition: all 0.3s ease-in-out;
  }
  .navbar-item {
    width: 100%;
  }
  .navbar-link {
    width: 100%;
    padding: 2rem;
    text-align: center;
    display: table;
  }

  #mobile-menu {
    position: absolute;
    top: 10%;
    right: 5%;
    transform: translate(5%, 20%);
    z-index: 99;
  }
  .navbar-toggle .bar {
    display: block;
    cursor: pointer;
  }
  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
