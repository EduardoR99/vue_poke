<template>
  <div class="nav_container">
    <div class="nav_left">
        <div class="icon_img">
            <section class="icon-list">
        <!-- Copyright Nintendo -->
        <i class="nes-pokeball" style="width: 20px;"></i>
        </section>
        </div>
    </div>
    <div class="nav_right">
        <a href="">Favorites</a>
        <a href="">Perfil</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon_img{
    padding: 1em;
    cursor: pointer;
}
.icon_img i{
   cursor: pointer;
}
.nav_right a{
    padding: 1em;
}
</style>