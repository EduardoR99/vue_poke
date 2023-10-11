<template>
  <div>
    <navbar/>
    <loginForm/>
    <Footer/> 
  </div> 
</template>

<script>
import Footer from '../../components/footer/index.vue'
import navbar from '../../components/navbar/index.vue'
import loginForm from '../../components/loginForm/index.vue'
export default {
  components:{
    Footer,
    loginForm,
    navbar
  },
    name: "login",
};
</script>

<style>

</style>