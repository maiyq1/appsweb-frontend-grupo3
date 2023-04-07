<template>

  <header class="header">
    <section>
      <div class="container">
        <a  href="menu">{{menu}}</a>
        <img src="src/img/menu.png" />
        <button @click = " handleClick(numberA,2)">click me!</button>
      </div>

      <div class="container">
        <a  href="title">{{ title }}</a>
      </div>

      <div class="container">
        <a  href="profile">{{ profile }}</a>
        <img src="src/img/logoUpc.png" />
        <button @click = " handleClick(numberB,2)">click me!</button>
      </div>
    </section>
  </header>

</template>

<script>
export default {
  name:"header",
  props: {
    menu: String,
    title: String,
    profile: String,
  },
  data(){
    return{
      menu:'menu',
      profile:'profile'}
  },

  mounted() {
    console.log('...montando componente')
  },
  updated() {
    console.log('----actualizando componente')
  },
  methods:{
    handleClick(numberA,numberB){
      console.log('-----haciendo click',numberA, numberB)
      this.menu = 'more options'
      this.profile='login'
    },
    /*
    <input type="text"@input="handleChange">
      handleChange(){
            console.log('tipeando')
      }*/
  }
}
</script>
<style scoped>
header{
  font-size: 1.5rem;
  font-family: Sathu;
  background-color: black;
  padding: 2.7rem;
}
header section{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

}

.container img{
  float: left;
  margin-top: -10px;
  margin-right: 10px;
  border-radius: 50%;

}
header a{
  transition: color 0.3s ease;
  color: #0a0a0a;
  text-decoration: none;

}
img{
  width: 60px;
  height: 60px;
  float: left;
}
</style>