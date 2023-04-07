<template>

  <div class="tutorial">{{name}}<hr/>
    <img src="src/img/imgVideo.png" >
    <p>{{ description }}</p>

  </div>

</template>
<script>
export default{
  props:['name', 'image','description'],
  name:"Tutorial"
}

</script>
<style scoped>
.tutorial{
  font-size:20px;
  padding: 1%;
  border-width: 2px;
  border-style: solid;
  justify-content: space-evenly;
  border-color: #0a0a0a;
  background-color: rgba(255, 255, 255, 0.75);
  color: #0a0a0a;
}
p{
  font-size: 20px;
}


img{
  width: 300px;
  height: 300px;
}
</style>
