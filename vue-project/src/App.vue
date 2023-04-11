<script setup>
import Header from "@/components/Header.vue";
import Article from "@/components/Article.vue";
import Footer from "@/components/Footer.vue";
import ListComponent from "@/components/listComponent.vue";
import FormData from "@/components/form-data.vue";


</script>

<template>
  <main>
    <Header menu="Menu" title="Library UPC" profile="Edit Profile"/>

    <div class="sideber">
      <list-component/>

    </div>

    <div class="Article">
      <form-data/>
      <!--
      <Article class="tutorial " name ="Tutorial 1" image=" "  description="Full description Category"/>
      <Article class="tutorial " name ="Tutorial 2" image=" "  description="Full description Category"/>
      <Article class="tutorial " name ="Tutorial 3" image=" "  description="Full description Category"/>
      <Article class="tutorial " name ="Tutorial 4" image=" "  description="Full description Category"/>
      -->
    </div>



    <Footer class= "footer"/>
  </main>

</template>



<style scoped>
@media (min-width: 1024px) {
  main {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 2fr 15fr 1fr;
  }

  header {
    grid-column: span 3;
    background-color: rgba(255, 255, 255, 0.75);
    border-color: #0a0a0a;
    border-width: 2px;
    border-style: solid;
  }

  .footer {
    background-color: rgba(255, 255, 255, 0.75);
    grid-column: span 3;
    border-color: #0a0a0a;
    border-width: 2px;
    border-style: solid;
  }

  .sideber {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid rgba(255, 255, 255, 0.75);
    padding: 10px;
    border-color: #0a0a0a;
    border-width: 2px;
    border-style: solid;
  }


  .Article {
    display: grid;
    grid-template-columns: repeat(2,2fr);
    grid-template-rows: 1fr  1fr;
    background-color: rgba(255, 255, 255, 0.75);
    grid-gap: 10px 12px;
    padding: 15px;

    border-color: rgb(19, 19, 19);
    border-width: 1px;
    border-style: solid;

  }

  header {
    grid-column: span 3;
    background-color: rgba(255, 255, 255, 0.75);
    border-color: #0a0a0a;
    border-width: 2px;
    border-style: solid;
  }
}

</style>
