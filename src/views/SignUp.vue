<template>
  <div class="bg-white">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
      </div>
    </div>
    <main class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
      <section>  
        <div class=" flex-direction :column" style="display:flex;flex-direction:row;height:100vh; align-items:center;gap:3em">
          <div  >
            <h3>Cifrado Afín</h3>
            <div>
              <label for="originalMessage">Mensaje Original:</label>
              
            </div>
            <div>
              <textarea id="originalMessage" type="text" style="width:100%;padding:4px 2px;" v-model="originalMessage" />
            </div>
            <div>
              <label for="aValue">Valor de a:</label>
              <input id="aValue" type="number" v-model="a" />
            </div>
            <div>
              <label for="bValue">Valor de b:</label>
              <input id="bValue" type="number" v-model="b" />
            </div>
            <button @click="cipherMessage()">Cifrar</button>
            <div>
              <label for="cipheredMessage">Mensaje Cifrado:</label>
            </div>          
            <div>
              <textarea id="cipheredMessage" size="50" style="padding:50px 180px" type="text" :value="cipheredMessage" />
            </div>
          </div>
          <div  >
            <h3>Descifrado Afín</h3>
            <div>
              <label for="cipheredMessage">Mensaje a descifrar:</label>
            </div>
            <div>
              <textarea id="cipheredMessage" size="50" style="padding:50px 180px" type="text" v-model="desMenssage" />
            </div>
            <button @click="decipherMessage()">Descifrar</button>
            <div>
              <label for="originalMessage">Mensaje Descifrado:</label>
            </div>
            <div>
              <textarea id="originalMessage" size="50" style="padding:50px 180px" type="text" :value="desMosMenssage" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalMessage: "",
      a: 0,
      b: 0,
      cipheredMessage: "",
      desMenssage: "",
      desMosMenssage: "",
    };
  },
  methods: {
    cipherMessage() {
      const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      const mod = 27;
      const a = parseInt(this.a);
      const b = parseInt(this.b);
      if(!this.coprimos(a,mod)){
        alert("a y mod no son coprimos");
        return;
      }
      let cadena = this.originalMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/gi, "").replace(/[^\w\s]/gi, ''); 
      let cadenas = cadena.toUpperCase();
      console.log(cadenas);
      let cipheredMessage = "";
      for (let i = 0; i < cadenas.length; i++) {
        const char = cadenas[i];
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          const newIndex = (a * index + b) % mod;
          const newChar = alphabet[newIndex];
          cipheredMessage += newChar;
        } else {
          cipheredMessage += char;
        }
      }
      this.cipheredMessage = cipheredMessage;
    },
    coprimos(a, b) {
      const smaller = a > b ? a : b;
      for(let ind = 2; ind < smaller; ind++){
          const condition1 = a % ind === 0;
          const condition2 = b % ind === 0;
          if(condition1 && condition2){
            return false;
          };
      };
      return true;
    },
    decipherMessage() {
      const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      const mod = 27;
      const a = parseInt(this.a);
      const b = parseInt(this.b);
      let message = this.desMenssage.toLowerCase();
      let cadena = message.toUpperCase();
      let decipheredMessage = "";
      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          const newIndex = this.modulus((index - b)* this.modInverse(a,mod), mod);         
           console.log(this.modInverse(a,mod));
          const newChar = alphabet[newIndex];
          decipheredMessage += newChar;
        } else {
          decipheredMessage += char;
        }
      }
      this.desMosMenssage = decipheredMessage;
    },
    modInverse(a, mod) {
    for(let x = 1; x < mod; x++)
        if (((a % mod) * (x % mod)) % mod == 1)
            return x;
    return 1;
    },
    modulus(a, mod) {
      return ((a % mod) + mod) % mod;
    }
  },
};
</script>
<style scoped>
input { margin: 0 2em;}
</style>
