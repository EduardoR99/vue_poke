<template>
  <div>
    <navbar/>
    <homePage/>
    <footer/>
  </div>
</template>

<script>
import navbar from '../../components/navbar/index.vue';
import footer from '../../components/footer/index.vue';
import homePage from '../../components/home/index.vue'
export default {
name: 'home',
components:{
  navbar,
  footer,
  homePage
}
}
</script>

<style>

</style>