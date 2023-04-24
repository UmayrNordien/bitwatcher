<template>
  <div>
    <!-- Footer -->
    <footer class="bg-dark text-center text-white">
      <!-- Grid container -->
      <div class="container p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>

          <!-- Twitter -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>

          <!-- Google -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-google"></i></a>

          <!-- Instagram -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-instagram"></i></a>

          <!-- Linkedin -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-linkedin"></i></a>

          <!-- Github -->
          <a class="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><i class="bi bi-github"></i></a>
        </section>
        <!-- Section: Social media -->

        <!-- Section: Form -->
        <section class="">
          <form action="">
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
              <!--Grid column-->
              <div class="col-auto">
                <p class="pt-2">
                  Stay Notified <i class="bi bi-envelope"></i>
                  <!-- <strong>Sign up for our newsletter</strong> -->
                </p>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" placeholder="Email" class="form-control" />
                  <!-- <label class="form-label" for="form5Example21">Email address</label> -->
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-auto">
                <!-- Submit button -->
                <button type="submit" class="btn btn-outline-warning mb-4">
                  Subscribe <i class="bi bi-bell"></i>
                </button>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </form>
        </section>
        <!-- Section: Form -->

        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            With a focus on Bitcoin and other cryptocurrencies, Bit Watcher is your go-to source for the latest news, insights, and analysis on the world of digital currencies. Our team of reporters and analysts cover everything from the latest price movements and market trends, to regulatory developments and industry announcements.
          </p>
        </section>
        <!-- Section: Text -->

        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Address <i class="bi bi-geo-alt"></i></h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">LC Studio: 314 Iman Haron Rd Cape Town 7780</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Donate <i class="bi bi-coin"></i></h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a class="btn btn-sm btn-outline-warning me-2" href="https://github.com/example"><i class="bi bi-currency-bitcoin"></i></a>                
                  <a class="btn btn-sm btn-outline-primary" href="https://github.com/example"><i class="bi bi-paypal"></i></a>                
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Repository <i class="bi bi-memory"></i></h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a class="btn btn-sm btn-outline-success" href="https://github.com/example">Github <i class="bi bi-github"></i></a>                
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>API <i class="bi bi-cloud"></i></h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a class="btn btn-outline-danger me-2" href="https://example.com">Live <i class="bi bi-play-fill"></i></a>
                  <a class="btn btn-sm btn-outline-success" href="https://github.com/example">Github <i class="bi bi-github"></i></a>                </li>
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div id="copyright" class="text-center p-3" style="background-color: #FFC107; color: #252525">
        © 2023 Copyright | Umayr Nordien
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background-color: #1f1f1f !important;
}

.form-outline.form-white input[type="email"] {
  background-color: transparent;
  border: 2px solid #f9c317;
  color: #f9c317;
}
.form-outline.form-white input[type="email"]::placeholder {
  color: #f9c317;
}

#copyright{
  color: #f9c317 !important;
  opacity: 1;
  background-image: radial-gradient(#141414 1.4500000000000002px, #252525 1.4500000000000002px);
  background-size: 29px 29px;
}
</style>