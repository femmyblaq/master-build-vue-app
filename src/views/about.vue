<template>
  <div class="container-fluid">
    <div id="about" class="overlay-container">
      <figure>
        <div class="fixed-wrap">
          <div id="fixed"></div>
        </div>
      </figure>
      <div class="overlay"></div>
      <div class="text">
        <h1 class="text-center">Love The Hustle</h1>
      </div>
    </div>
    <div class="construction mt-5">
      <h1 class="text-center fw-bolder">Page Underconstruction</h1>
      <div class="row me-0 p-lg-5">
        <div class="col-lg-6">
          <h3>About Us</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptate asperiores aperiam dolore maxime, libero quia, dolores,
            temporibus debitis quam officiis labore? Odit ab quia optio officiis
            hic praesentium, quidem voluptate porro nihil? Deserunt ad illo
            nesciunt voluptatem, blanditiis, fugiat ipsum cumque recusandae
            fugit esse ab nulla placeat quo expedita, dignissimos officiis
            ratione aperiam quam ut quaerat iusto temporibus? Provident est
            ipsa, libero delectus nobis praesentium saepe dolorem id debitis qui
            maiores distinctio nihil eos asperiores sapiente nesciunt. Accusamus
            at, veritatis quam quaerat quae doloribus error officiis nisi, minus
            quia, itaque rem saepe nam quis pariatur beatae ex est eius.
          </p>
        </div>
        <div class="col-lg-6">
          <img
            src="../../public/assets/undraw_Content_structure_re_ebkv.png"
            alt=""
            class="w-100 h-75"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#fixed {
  background-image: url("../../public//assets/keyboard.jpg");
  height: 70vh;
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
  top: 20%;
  left: 0%;
  text-align: left;
  width: 100%;
  z-index: 99;
}
.text h1 {
  font-size: 8em;
  font-weight: 900;
}
</style>
