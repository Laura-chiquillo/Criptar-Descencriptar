<template>
    <div class="bg-white">
      <div class="container top-0 position-sticky z-index-sticky">
        <div class="row">
        </div>
      </div>
      <main class="mt-0 main-content" @submit.prevent="handleSubmit">
        <section>
          <div class="page-header min-vh-100">
            <div class="container">
              <div class="row">
                <div
                  class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
                >
                  <div
                    class="position-relative h-100 m-0 px-100 border-radius-lg d-flex flex-column justify-content-center"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('@/assets/img/illustrations/whatis_encryption.png') +
                        ')',
                    }"
                  ></div>
                </div>
                <div
                  class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
                >
                  <div class="card card-plain">
                    <div class="pb-0 card-header bg-transparent mb-4">
                      <h4 class="font-weight-bolder">Sign In</h4>
                    </div>
                    <div class="card-body">
                      <form >
                        <div class="mb-3">
                          <material-input 
                            id="email"
                            type="email"
                            label="Email"
                            v-model="email"
                            name="email"
                            size="lg"
                          />
                        </div>
                        <div class="mb-3">
                          <material-input 
                            id="password"
                            type="password"
                            label="Password"
                            v-model="password"
                            name="password"
                            size="lg"
                          />
                        </div>
                        <material-checkbox
                          id="flexCheckDefault"
                          class="font-weight-light"
                          checked
                        >
                          I agree the
                          <a
                            href="../../../pages/privacy.html"
                            class="text-dark font-weight-bolder"
                            >Terms and Conditions</a
                          >
                        </material-checkbox>
                        <div class="text-center">
                          <material-button
                            class="mt-4"
                            variant="gradient"
                            color="success"
                            fullWidth
                            size="lg"
                            >Sign Up</material-button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import MaterialInput from "@/components/MaterialInput.vue";
  import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
  import MaterialButton from "@/components/MaterialButton.vue";

  const body = document.getElementsByTagName("body")[0];
  import { mapMutations } from "vuex";
  

  export default {
    name: "login",
    components: {
      MaterialInput,
      MaterialCheckbox,
      MaterialButton,
 
    },
    beforeMount() {
      this.toggleEveryDisplay();
      this.toggleHideConfig();
      body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
      this.toggleEveryDisplay();
      this.toggleHideConfig();
      body.classList.add("bg-gray-100");
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
      handleSubmit(e) {
        e.preventDefault();
        this.$router.push("SingUp");
      },
    },
  };
  </script>