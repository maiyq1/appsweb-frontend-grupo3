<template>
  <div class="container">
    <div class="my-class">My component Sidebar {{name}}</div>

  </div>


  <ul>
    <li> <a href="Menu" >Category 1</a></li>
    <li> <a href="Menu" >Category 2</a></li>
    <li> <a href="Menu" >Category 3</a></li>
    <li> <a href="Menu" >Category 4</a></li>

  </ul>
  v
</template>

<script>
export default {

  props : ['name'],
  name: "Sidebar"

}
</script>




<style scoped>

ul li a{border: 1px solid deepskyblue}

ul{
  display: flex;
  list-style-type: none;
  border: 1px solid #0099ff;
  justify-content: space-between;
}

</style>