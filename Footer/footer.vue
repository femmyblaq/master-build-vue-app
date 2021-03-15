<template>
  <div id="footer" class="container-fluid">
    <div class="row mx-0 mt-5" id="footer-header">
      <div class="d-flex flex-row justify-content-between mt-4">
        <div class="col-lg-9">
          <h1 class="text-white mb-0">MasterBuild</h1>
          <p
            class="w-25 text-white mt-0 font-monospace"
            style="font-size:0.5em; font-weight:bolder;"
          >
            LOVE THE HUSTLE.
          </p>
        </div>

        <div class="right col-lg-3">
          <button class="top-btn">
            <a href="" class="text-decoration-none text-white">Sign Up</a>
          </button>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="row mx-0">
      <div class="col-lg-4 col-md-6">
        <div class="footer-div"></div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="brand-name text-center">
          <h1 class="mb-0">Master</h1>
          <p>Build</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="footer-div"></div>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-lg-4 col-md-6 d-flex justify-content-center">
        <div class="footer-agree ">
          <p class="mb-0">
            <i class="far fa-hand-point-right me-3"></i>Privacy Policy
          </p>
          <p class="mb-0">
            <i class="far fa-hand-point-right me-3"></i>Term & Conditions
          </p>
          <p class="mb-0"><i class="far fa-hand-point-right me-3"></i>About</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="footer-links d-flex flex-row justify-content-center">
          <div class="link-item me-5"><i class="fab fa-whatsapp"></i></div>
          <div class="link-item me-5"><i class="fab fa-facebook-f "></i></div>
          <div class="link-item"><i class="fab fa-github"></i></div>
        </div>
        <div class="linediv"></div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex justify-content-center">
        <div class="footer-contact text-right">
          <p class="mb-0"><i class="far fa-hand-point-right me-3"></i>FAQs</p>
          <p class="mb-0">
            <i class="far fa-hand-point-right me-3"></i>Phone: +23490162901
          </p>
          <p class="mb-0">
            <i class="far fa-hand-point-right me-3"></i>Contact
          </p>
        </div>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-lg-6 m-auto">
        <h3 class="news mb-4 ">WEEKLY NEWS LETTER</h3>
        <div class="d-flex justify-content-center">
          <div>
            <div class="box-email w-100">
              <p>Masterbuild@gmail.com</p>
            </div>
            <button class="main-btn"><a href="">Subscribe</a></button>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <p class="text-center text-muted my-3">
          <small>© 2021 by dev Yusuph. All Right Reserved.</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  background: #013220;
  font-family: "Arvo";
  /* padding: 0 80px !important; */
}
.brand-name h1 {
  color: #fff;
  font-weight: 500;
  font-size: 2.1em;
  letter-spacing: 15px;
}
.brand-name p {
  color: #fff;
  font-weight: lighter;
  font-size: 1.3em;
  margin-top: -5px;
  letter-spacing: 10px;
}

.footer-div {
  height: 1px;
  width: 300px;
  background-color: #fff;
  margin: 50px auto 0;
}
.footer-contact,
.footer-agree {
  color: #fff;
  font-size: 0.8em;
}
.link-item {
  background-color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  text-align: center;
}
.linediv {
  height: 80px;
  width: 1px;
  background-color: #fff;
  margin: 50px auto;
}
.footer-links i {
  font-size: 1.7rem;
  margin-top: 13px;
  margin-right: 1px;
}
.news {
  font-size: 1em;
  color: #fff;
  text-align: center;
}
.box-email p {
  text-align: center;
  color: #000;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0;
}
.top-btn {
  padding: 20px 116px;
  width: 100%;
  text-align: center;
  background-color: #000;
  font-size: 0.8em;
  box-shadow: none;
  border: 1px solid #000;
  font-weight: 600;
}
.main-btn {
  padding: 20px 116px;
  width: 100%;
  text-align: center;
  background-color: #000;
  font-size: 0.8em;
  box-shadow: none;
  border: 1px solid #000;
  font-weight: 600;
}
.main-btn:hover {
  color: #fff;
}
.main-btn a {
  color: #fff;
  text-decoration: none;
  z-index: 1;
  position: relative;
}
.main-btn::after {
  position: absolute;
  content: "";
  left: 0;
  height: 100%;
  top: 0;
  width: 0;
  background-color: #000;
  transition: all 0.35s;
  border-radius: 0;
}
.main-btn:hover::after {
  width: 100%;
  color: #000;
  background-color: #fff;
}
.box-email {
  border: 1px solid #000;
  padding: 20px 0;
  background-color: #fff;
}
#footer .footer-contat p:hover {
  color: orange;
  cursor: pointer;
}

@media (max-width: 768px) {
  #footer {
    padding: 0 10px !important;
    width: 100%;
  }
  .brand-name h1 {
    font-size: 1.1em;
    letter-spacing: 15px;
    margin-top: 20px;
  }
  .brand-name p {
    color: #fff;
    font-weight: lighter;
    font-size: 1em;
    margin-top: -5px;
    letter-spacing: 10px;
  }

  .footer-div {
    height: 1px;
    width: 300px;
    background-color: #fff;
    margin: 0 auto 0;
  }
  #footer-header .flex-row {
    flex-direction: column !important;
  }
  .footer-contact,
  .footer-agree {
    color: #fff;
    font-size: 0.8em;
    margin: 50px 10px;
  }
  .link-item {
    background-color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    text-align: center;
  }
  .linediv {
    height: 80px;
    width: 1px;
    background-color: #fff;
    margin: 50px auto;
  }
  .footer-links i {
    font-size: 1.7rem;
    margin-top: 13px;
    margin-right: 1px;
  }
  .news {
    font-size: 1em;
    color: #fff;
    text-align: center;
  }
  .box-email p {
    text-align: center;
    color: #000;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0;
  }
  .main-btn {
    padding: 15px 116px;
    text-align: center;
    background-color: #000;
    font-size: 0.8em;
    box-shadow: none;
    border: 1px solid #000;
    font-weight: 600;
    width: 100%;
  }
  .right .main-btn {
    display: block i !important;
  }
  .main-btn:hover {
    color: #fff;
  }
  .main-btn a {
    color: #fff;
    text-decoration: none;
    z-index: 1;
    position: relative;
  }
  .main-btn::after {
    position: absolute;
    content: "";
    left: 0;
    height: 100%;
    top: 0;
    width: 0;
    background-color: #000;
    transition: all 0.35s;
    border-radius: 0;
  }
  .main-btn:hover::after {
    width: 100%;
  }
  .box-email {
    border: 1px solid #000;
    padding: 20px 0;
    background-color: #fff;
  }
}
</style>
// #d4fa04
