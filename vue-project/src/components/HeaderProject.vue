<template>
  <div class ="container">
      <div class="my-class">My component {{name}}</div>
        <div>
            <div class="my-class"></div>
        </div>
  </div>
</template>

<script>
export default {
    props: ['name'],
    name: "header"
}
</script>

<style scoped>
.my-class{
    background-color: red;
    margin-top: 10px
}

.container{
    display: flex;
}
</style>