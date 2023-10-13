<template>
  <div class="home_container">
    <div class="search_input">
      <form action="">
        <label
          for="dark_field"
          class="nes-text is-warning"
          style="font-weight: 600; font-size: 17px"
        >
          Search your favorite pocket monster...</label
        >
        <input type="text" id="dark_field" class="nes-input is-dark" />
      </form>
    </div>
    <div class="poke_cards">
      <pokeCard />
      <pokeCard />
      <pokeCard />
      <pokeCard />
      <pokeCard />
    </div>
  </div>
</template>

<script>
import pokeCard from "../../components/pokeCard/index.vue";
export default {
  name: "home",
  components: {
    pokeCard,
  },
};
</script>

<style>
.home_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: auto;
}
.search_input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  
}
</style>