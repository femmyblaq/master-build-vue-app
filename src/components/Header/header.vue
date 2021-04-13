<template>
  <div class="container-fluid">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top main-navigation"
    >
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="#"
          ><img src="../../../image/masterbuid.png" class="w-70 h-70" alt=""
        /></a>

        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <--overlay backgroind-->
        -->
        <div class="overlay d-lg-none"></div>
        <div
          class="order-lg-2 bg-dark d-lg-flex w-100  pb-3 pb-lg-0 sidebar"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link px3 px-lg-2 active"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-2 px-lg-2" href="#">How To Pay</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-2 px-lg-2" href="#">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-2 px-lg-2" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- <div class="container-fluid">
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
            class="navbar-menu list-inline text-center  fw-bold my-lg-auto pe-5"
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
            <li class="navbar-item h-5 list-inline-item me-4">
              <router-link
                to="/signup"
                class="navbar-link h-100 text-decoration-none text-white"
                >Signup</router-link
              >
            </li>
            <li class=" list-inline-item">
              <a href="/signin" class="text-decoration-none"
                ><button class="btn btn-sm btn-outline-light py-2 px-3">
                  Sign In
                </button></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar,
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
}

.sidebar {
  left: -100%;
  max-width: 300px;
  transition: all ease 0.25s;
}
.overlay {
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: hidden;
}
.main-navigation.active .sidebar {
  left: 0;
}
.main-navigation.active .overlay {
  visibility: visible;
}
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
