<template>
  <ul>
      <li><a href="#Menu">Menu</a></li>
      <li><a href="Title">Library UPC</a></li>
      <li><a href="MyProfile">My Profile</a></li>
  </ul>
</template>

<script>
export default {
    props: ['section'],
    name: "navbar"
}
</script>

<style scoped>
ul li a{
    border: 1px solid deepskyblue;
}
ul{
    display: flex;
    list-style-type: none;
    border: 1px solid red;
    justify-content: space-between;
}
</style>