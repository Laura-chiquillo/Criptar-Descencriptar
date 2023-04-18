<template>
  <div class="bg-white">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
      </div>
    </div>
    <main  id="layout" class="position-relative px-2 border-radius-lg d-flex flex-column justify-content-center">
      <section>  
        <div class="cuadro1" >
          <div  >
            <h3>Cifrado Afín</h3>
            <div>
              <label for="originalMessage">Mensaje Original:</label>
              
            </div>
            <div>
              <textarea id="originalMessage" type="text" style="width: 450px; height: 150px; padding: .2em .5em;" v-model="originalMessage" />
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
              <textarea id="cipheredMessage" size="50" style="width: 450px; height: 150px; padding: .2em .5em;" type="text" :value="cipheredMessage" />
            </div>
          </div>
          <div  >
            <h3>Descifrado Afín</h3>

            <div>
              <label for="cipheredMessage">Mensaje a descifrar:</label>
            </div>
            <div>
              <textarea id="cipheredMessage" size="50" style="width: 450px; height: 150px; padding: .2em .5em;" type="text" v-model="desMenssage" />
            </div>
            <button @click="decipherMessage()">Descifrar</button>
            <div v-show="masRepetida1">
              <label style="margin: 0.1em 0;" for="">Análisis de frecuecia</label>
              <input disabled style="width: 100%; margin: .3em 0;" name="" id="" :value="`Letra mas repetida: ${masRepetida1}. Segunda mas repedida ${masRepetida2}.`">
              <input disabled style="width: 100%; margin: .3em 0;" name="" id="" :value="`A: ${resA} y B: ${resB}`">
            </div>
            <div>
              <label for="originalMessage">Mensaje Descifrado:</label>
            </div>
            <div>
              <textarea id="originalMessage" size="50" style="width: 450px; height: 150px; padding: .2em .5em;" type="text" :value="desMosMenssage" />
            </div>
            <button @click="invertirAYB()">Invertir a y b</button>
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
      masComunes: "EOSNRILUT",
      n1: 0,
      originalMessage: "",
      a: "",
      b: "",
      aBruto: "",
      bBruto: "",
      cipheredMessage: "",
      desMenssage: "",
      desMosMenssage: "",
      desMosMenssageBruto: "",
      masRepetida1: "",
      masRepetida2: "",
      resA: "",
      resB: "",
      resABruto: "",
      resBBruto: "",

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
      let cadena = this.originalMessage.toLowerCase().replace(/[^a-zA-Zñ]/g, ""); 
      let cadenas = cadena.toUpperCase();
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
      const dicccionarioPalabras = {} // Diccionario con frecuencias de las palabras
      let message = this.desMenssage.toLowerCase();
      let cadena = message.toUpperCase();
      let decipheredMessage = "";
      
      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        // va sumando cada letra que va encontrando
        dicccionarioPalabras[char] = dicccionarioPalabras[char] ? dicccionarioPalabras[char] + 1 : 1;
        
      }
      // Itermaos las letras con sus frecuencias para encontrar las dos mayores
      let mayor1 = 0;
      let letraMayor1 = 0
      let letraMayor2 = 0
      let mayor2 = 0;
      for (let a in dicccionarioPalabras ) {
        if (mayor1 < dicccionarioPalabras[a]) {
          mayor1 = dicccionarioPalabras[a]
          letraMayor1 = a
        }
      }
      for (let a in dicccionarioPalabras ) {
        if (mayor2 < dicccionarioPalabras[a] && a !== letraMayor1) {
          mayor2 = dicccionarioPalabras[a]
          letraMayor2 = a
        }
      }
      this.masRepetida1 = letraMayor1
      this.masRepetida2 = letraMayor2
      // Encontrar los valor de a y b par descrifrar con la formula
      this.resB = alphabet.indexOf(this.masRepetida2)
      this.resA = this.modulus(((alphabet.indexOf(this.masRepetida1) - alphabet.indexOf(this.masRepetida2)) * 7), mod)

      /// Cuando ya tenemos en valor de a y b se procede a usar la formula de descifrado
      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        const index = alphabet.indexOf(char);
        
        if (index !== -1) {
          const newIndex = this.modulus((index - this.resB)* this.modInverse(this.resA,mod), mod);         
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
    },
    invertirAYB() {
      const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      const mod = 27;
      let message = this.desMenssage.toLowerCase();
      let cadena = message.toUpperCase();
      let decipheredMessage = ""
      let b = this.resB
      this.resB = this.resA
      this.resA = b
      
      /// Cuando ya tenemos en valor de a y b se procede a usar la formula de descifrado
      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        const index = alphabet.indexOf(char);
        
        if (index !== -1) {
          const newIndex = this.modulus((index - this.resB)* this.modInverse(this.resA,mod), mod);         
          const newChar = alphabet[newIndex];
          decipheredMessage += newChar;
        } else {
          decipheredMessage += char;
        }
      }
      this.desMosMenssage = decipheredMessage;
    },
    siguienteCombinacion() {
      const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      const mod = 27;
      const dicccionarioPalabras = {} // Diccionario con frecuencias de las palabras
      let message = this.desMenssage.toLowerCase();
      let cadena = message.toUpperCase();
      let decipheredMessage = "";
      
      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        // va sumando cada letra que va encontrando
        dicccionarioPalabras[char] = dicccionarioPalabras[char] ? dicccionarioPalabras[char] + 1 : 1;
        
      }

      const letraB = alphabet.indexOf(this.masComunes[this.n1]);

      /// Cuando ya tenemos en valor de a y b se procede a usar la formula de descifrado
      // Itermaos las letras con sus frecuencias para encontrar las dos mayores
      let mayor1 = 0;
      let letraMayor1 = 0
      let letraMayor2 = 0
      let mayor2 = 0;
      for (let a in dicccionarioPalabras ) {
        if (mayor1 < dicccionarioPalabras[a]) {
          mayor1 = dicccionarioPalabras[a]
          letraMayor1 = a
        }
      }
      for (let a in dicccionarioPalabras ) {
        if (mayor2 < dicccionarioPalabras[a] && a !== letraMayor1) {
          mayor2 = dicccionarioPalabras[a]
          letraMayor2 = a
        }
      }

      const b = alphabet.indexOf(letraMayor1);
      console.log(alphabet.indexOf(letraMayor2));
      console.log(this.modulus((alphabet.indexOf(letraMayor2) - b)));
      console.log(this.modInverse(letraB,27));
      const a = this.modulus((alphabet.indexOf(letraMayor2) - b) * this.modInverse(letraB,27), 27)


      for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        const index = alphabet.indexOf(char);
        
        if (index !== -1) {
          const newIndex = this.modulus((index - b)* this.modInverse(a,mod), mod);         
          const newChar = alphabet[newIndex];
          decipheredMessage += newChar;
        } else {
          decipheredMessage += char;
        }
      }
      this.aBruto = a;
      this.bBruto = b;
      this.desMosMenssageBruto = decipheredMessage;
      this.n1 = this.modulus(this.n1 + 1, this.masComunes.length);
      
    },
  },
};
</script>
<style scoped>
input { margin: 0 2em;}

.cuadro1 {
  display:flex;
  flex-direction:row;
  height:100vh;
  align-items:center;
  gap:3em;
}

@media only screen and (max-width: 700px) {
  .cuadro1 {
    display:flex;
    flex-direction:column;
    height:100vh;
    align-items:center;
    gap:3em;
  }

  
}

</style>
