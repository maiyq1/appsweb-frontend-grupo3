<template>
  <footer>
    <p>{{ mail }}</p>
    <p>{{ telefono }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  background-color: white;
  display: inline;
  justify-content: space-between;
  align-items: center;
}

</style>