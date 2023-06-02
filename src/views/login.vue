<template>
  <form @submit.prevent="handleSubmit" >
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
                        <div class="text-center">
                          <material-button
                            class="mt-4"
                            variant="gradient"
                            color="success"
                            fullWidth
                            size="lg"
                            @click="handleSubmit()"
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
  </form>
  </template>
  
  <script>
  import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import { mapMutations } from "vuex";

  const body = document.getElementsByTagName("body")[0];
  

  export default {
    name: "login",
    components: {
      MaterialInput,
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
        segundos: 300,
        contador: 0,
      };
    },
    methods: {
      ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
      
      tiempo() {
      if (this.segundos == 0) {
        this.segundos = 300;
      } else {
        this.segundos--;
        setTimeout(this.tiempo, 1000);
      }
    },
    bloquear() {
      var usuario = document.getElementById("usuario");
      var contraseña = document.getElementById("contraseña");

      usuario.disabled = true;
      contraseña.disabled = true;

      setTimeout(() => {
        usuario.disabled = false;
        contraseña.disabled = false;
      }, 300000);
    },
    mostrar() {
      var tipo = document.getElementById("contraseña");

      if (tipo.type == "password") {
        tipo.type = "text";
      } else {
        tipo.type = "password";
      }
    },

    handleSubmit() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (email == "laura@gmail.com" && password == "niño-2023.") {
        this.$router.push("SingUp");
        console.log("hola");
        alert("datos incorrectos");
      } else {
        this.contador += 1;
        console.log("error");
      }
      if (this.contador == 3) {
        alert("Ultimo intento para ingresar los datos correctamente");
      }

      if (this.contador == 4) {
        alert("Bloqueado");
        this.contador = 0;
        this.bloquear();
        this.tiempo();
      }
    },
    },
  };
  </script>