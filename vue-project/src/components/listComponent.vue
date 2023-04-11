<template>

<<<<<<< HEAD
  <div v-for="category in categories">
    <Sidebar :name=category.name :description=category.description   />
=======
  <div v-for="category in categories ">
    <Article :name=category.name  />
>>>>>>> 943bf7ac672f1eb466a35b35e4682e556e2a9b02
  </div>

</template>

<script>
import Article from "@/components/Sidebar.vue";
export default {
  name: "listArticle",
  components:{Article},
  data(){
    return{
      categories:[]
    }},
  beforeMount(){
    //invoco API
    this.categories =[{ name:'Category 1',description:'This section has description of'},
      { name:'Category 2',description:'This section has description of'},
      { name:'Category 3',description:'This section has description of'},
      { name:'Category 4',description:'This section has description of'}]
  }
}
</script>
<style scoped>
</style>