<template>
  <div class="container_register">
    <navbar/>
    <registerForm/>
    <Footer/> 
  </div> 
</template>

<script>
import Footer from '../../components/footer/index.vue'
import navbar from '../../components/navbar/index.vue'
import registerForm from '../../components/registerForm/index.vue'
export default {
  components:{
    Footer,
    registerForm,
    navbar
  },
    name: "login",
};
</script>

<style>
.container_register{
  background: url(../../assets/images/bg_login.png) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90%;
}
</style>