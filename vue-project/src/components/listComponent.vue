<template>

  <div v-for="category in categories ">
    <Article :name=category.name  />
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