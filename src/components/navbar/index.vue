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
        <a class="is-warning" href="">Favorites</a>
        <a class="is-warning" href="">Perfil</a>
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
    /*background-color: #3c3c3c;*/
}
.icon_img{
    padding: .3em;
    cursor: pointer;
}
.icon_img i{
   cursor: pointer;
}
.nav_right a{
    padding: 1em;
    text-decoration: none;
    color: #e76e55;
    font-size: 18px;
    font-weight: 700;
}
</style>