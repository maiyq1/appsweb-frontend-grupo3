<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import Categories from "@/components/Categories.vue";
</script>

<template>
    <navbar/>
    <div class="card"><main>
      <sidebar/>
      <sidebar/>
      <sidebar/>
      <sidebar/>
  </main>
    </div>

    <div class="categories-grid">
    <categories/>
    <categories/>
    <categories/>
    <categories/>
    </div>
    <Footer/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.card {
    grid-template-columns: repeat(2, 1fr);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
