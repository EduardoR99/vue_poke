<template>
  <div>
    <div class="login_container">
      <div class="form_container">
        <form class="" action="">
          <div
            
            class="nes-field  input_dark"
          >
            <label for="dark_field" class="nes-text is-warning" style="font-weight: 600; font-size: 17px;">E-Mail</label>
            <input
              type="text"
              id="dark_field"
              class="nes-input is-dark"
            />
          </div>
          <div
            class="nes-field  input_dark"
          >
            <label for="dark_field" class="nes-text is-warning" style="font-weight: 600; font-size: 17px;">Password</label>
            <input
              type="text"
              id="dark_field"
              class="nes-input is-dark "
              
            />
          </div>
          <div class="reg_link">
            <a href="">Register</a>
          </div>
          <div class="log_button">
            <button type="button" class="nes-btn is-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "login",
};
</script>
  
  <style scoped>
body {
  background: url(../../assets/images/bg_login.png) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  height: 75vh;
}
.login_container {
  display: flex;
  margin: auto;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
  height: 100vh;
}
.login_container .form_container {
  width: 60%;
  background: rgba(60, 60, 60, 0.9);
  padding: 3em;
  height: 25em;
  border-radius: 12px;
}
.input_dark{
    padding: .6em 0;
}
.log_button{
  display: flex;
  align-items: center;
  justify-content: center;
}
.log_button button{
  margin: 2rem;
}
.reg_link{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.reg_link a{
  text-decoration: none;
}
</style>