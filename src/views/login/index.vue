<template>
  <div>
    <div class="container_login">
      <navbar/>
      <loginForm/>
      <Footer/> 
    </div>
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
.container_login{
  background: url(../../assets/images/bg_login.png) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90%;
}
</style>