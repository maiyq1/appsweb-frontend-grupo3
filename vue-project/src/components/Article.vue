<template>

  <div class="container">
    <div class="my-class">My component Header {{name}}</div>

  </div>

  <ul>
    <li> <a href="Menu" >Tutorial 1</a></li>
    <li> <a href="Menu" >Tutorial 2</a></li>
    <li> <a href="Menu" >Tutorial 3</a></li>
    <li> <a href="Menu" >Tutorial 4</a></li>
  </ul>



</template>

<script>
export default {
  props : ['name'],
  name: "Header"

}
</script>

<style scoped>
ul li a{border: 1px solid deepskyblue}

ul{
  display: flex;
  list-style-type: none;
  border: 1px solid red;
  justify-content: space-between;
}
</style>