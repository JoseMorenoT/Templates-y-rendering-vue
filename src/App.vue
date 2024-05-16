<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div id="colorfondo" class="container-cambios col-6 container py-5 text-white">
          <form class="d-flex flex-column text-start">
<!--MOD 1-->
            <div>
              <label for="">Color de fondo: </label><br>
              <input type="texto" id="colorFondo" v-model="colorFondo">
            </div>
<!--MOD 2-->
            <div>
              <label for="">Color de texto: </label><br>
              <input type="texto" id="colorTexto" v-model="colorTexto">
            </div>
<!--MOD 3-->
            <div>
              <label for="">Mostrar texto:</label><br>
              <input type="checkbox" id="mostrarTexto" v-model="mostrarTexto">
            </div>
<!--MOD 4-->
            <div>
              <label for="">borde</label><br>
              <input type="range" id="rangeborde" name="rangeborde" min="30" max="100" step="1" v-model="borde">
            </div>
<!--MOD 5-->
            <div>
              <label for="rangeHeight">Contenido texto: </label><br>
              <textarea name="text" id="contenidoTextual" cols="60" rows="3" v-model="contenidoTextual"></textarea>
            </div>
<!--MOD 6-->
            <div>
              <label for="tipografias">Tipografías</label><br>
              <select name="tipografias" id="tipografias" v-model="tipografias">
                <option :value="tipografia" v-for="(tipografia, index) in tipografiaArray" :key="index">{{ tipografia }}</option>
              </select>
            </div>
<!--MOD 7-->
            <div class="py-3">
              <label for="">Opaco:</label><br>
              <input type="checkbox" id="opaco" v-model="opaco">
            </div>
<!--MOD 8-->
            <div id="tamanoLetra">
              <label for="">Tamaño Letra</label>
              <div class="row">
                <div class="col-4"> 
                  <input type="radio" id="pequeño" name="fav_language" value="pequeño" v-model="tamanoLetra">
                  <label for="pequeño">Pequeño</label><br>
                </div>
                <div class="col-4"> 
                  <input type="radio" id="mediano" name="fav_language" value="mediano" v-model="tamanoLetra">
                  <label for="mediano">Mediano</label><br>
                </div>
                <div class="col-4"> 
                  <input type="radio" id="grande" name="fav_language" value="grande" v-model="tamanoLetra">
                  <label for="grande">Grande</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- OBJETO -->
        <div class="container-resultado col-6 container py-5 d-flex align-items-center justify-content-center">
          <div id="" class="h-75 w-75 d-flex align-items-center justify-content-center"
            :style="{
              borderRadius: borde + '%',
              backgroundColor: colorFondo,
            }">
            <p :style="{
              color: colorTexto,
              fontStyle: tipografias
            }" :class="[tamanoLetra == 'grande' ? largeClass : tamanoLetra == 'pequeño' ? smallClass : mediumClass, opaco ? opacoClass :'']" v-show="mostrarTexto">{{ contenidoTextual }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      colorFondo: "",
      colorTexto: "",
      mostrarTexto: true,
      borde: 0,
      contenidoTextual: "",
      tipografias: "normal",
      opaco: false,
      opacoClass: "opaco",
      tamanoLetra: "",
      tipografiaArray: [
        "italic", "normal", "oblique"
      ],
      smallClass: "smalltext",
      mediumClass: "mediumtext",
      largeClass: "largetext",
    }
  },
}
</script>

<style>
p {
  font-style: italic;
}
.smalltext {
  font-size: 16px;
}
.mediumtext {
  font-size: 24px;
}
.largetext {
  font-size: 32px;
}
.opaco {
  opacity: 0.5;
}
#colorfondo {
  background-color: rgb(2, 61, 58);
}

#cuadrado {
  max-height: 300px;
  max-width: 300px;
  height: 75vh;
  width: 75vw;
}
</style>
