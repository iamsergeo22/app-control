<template>
  <div class="overview">
    <section class="contact">
      <h1>Contactez Nous</h1>
      <div>

        <p><i class="Qicon fas fa-solid fa-location"></i> Rue 275, Lomé - Togo</p>
        <p><i class="Qicon fas fa-solid fa-at"></i>Lome@datacentre.com</p>
      </div>

      <div class="mapouter">
        <div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
            src="https://maps.google.com/maps?q=Rue%20275,%20Lom%C3%A9%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        </div>

        <div class="form">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .contact {
    width: 100%;
    padding: 10rem;
    color: #fff;
    background-color: #6633996b;
    background-image: url(./pexels-manuel-geissinger-325229.jpg);
  }


  .mapouter {
    position: relative;
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    text-align: left;
    height: 100%;
    width: 100%;
  }

  .overview {
    background-color: #fff;
    width: 100%;
  }
</style>