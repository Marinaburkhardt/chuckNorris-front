<template>
  <div>
    <div class="speech-bubble">
      Gil, perdiste!
    </div>

    <img src="../assets/background/finalizadoPerdedor.png" alt="backgound" class="bg" />
  </div>
</template>

<script>

export default {
    name: 'JuegoFinalizadoPerdedor',

}
</script>

<style scoped>

img.bg {
  min-height: 30%;
  max-width: 30%;
  height: auto;
  position: relative;
  top: 0;
  left: 10%;
  float: left ;
}

.speech-bubble {
  position: relative;
  background: #ca7a12;
  border-radius: .4em;
  padding: 15px;
  text-align: center;
  max-width: 30%;
  margin-left: auto;
  margin-right: auto;
}
.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: auto;
  height: auto;
  border: 51px solid transparent;
  border-top-color: #ca7a12;
  border-bottom: 0;
  border-left: 0;
  margin-left: -25.5px;
  margin-bottom: -51px;
}

</style>