<template>

  <footer>
    <p>{{ emailText }}</p>
    <p>{{ numberText }}</p>
    <p>{{ addressText }}</p>
  </footer>


</template>

<script>

export default{
  data(){
    return{
      emailText:"ventas@library.com",
      numberText:"986838440",
      addressText:"Los Manzanos 398"

    }
  }
}

</script>

<style scoped>
footer{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #131313;

}

</style>