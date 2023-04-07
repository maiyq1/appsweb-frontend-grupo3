
<template>

  <div class="Category">{{ name}}<hr/>
    <p>{{ description }}</p>

  </div>


</template>
<script>
export default{
  props:['name','description'],
  name:"Category"

}

</script>

<style scoped>
.Category{
  font-size:22px;
  border-color: #0a0a0a;
  border-style: solid;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0.50rem;
  color: rgb(10, 10, 10);
}
p{
  font-size: 20px;
}
</style>
