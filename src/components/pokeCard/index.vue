<template>
  <div class="pokeCard_container">
    <img src="../../assets//images/test_images/bulba.svg" alt="">

  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.pokeCard_container{
  background-color: #3f3f3f;
  padding: .4em 1.7em 6em 1.7em;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: all ease .4s;
  }
  .pokeCard_container:hover{
    padding: .6em 2em 7em 2em;;
  }
  .pokeCard_container img{
    padding-top: -4em;
  }
</style>