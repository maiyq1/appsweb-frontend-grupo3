<template>

  <div v-for="category in categories">
    <Sidebar :name=category.name :description=category.description   />
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "listComponent",
  components:{Sidebar},
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