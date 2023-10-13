<template>
  <div>
    <div class="login_container">
      <div class="form_container">
        <form class="" action="">
          <div class="nes-field input_dark">
            <label
              for="dark_field"
              class="nes-text is-warning"
              style="font-weight: 600; font-size: 17px"
              >E-Mail</label
            >
            <input type="text" id="dark_field" class="nes-input is-dark" />
          </div>
          <div class="nes-field input_dark">
            <label
              for="dark_field"
              class="nes-text is-warning"
              style="font-weight: 600; font-size: 17px"
              >Password</label
            >
            <input type="text" id="dark_field" class="nes-input is-dark" />
          </div>
          <div class="nes-field input_dark">
            <label
              for="dark_field"
              class="nes-text is-warning"
              style="font-weight: 600; font-size: 17px"
              >Confirm Password</label
            >
            <input type="text" id="dark_field" class="nes-input is-dark" />
          </div>
          <div class="chose">
            <div class="chose_card">
              <i class="nes-charmander"></i>
              <label>
                <input type="radio" class="nes-radio" name="answer" checked />

                <span>Charmander</span>
              </label>
            </div>
            <div class="chose_card">
              <i class="nes-bulbasaur"></i>
              <label>
                <input type="radio" class="nes-radio" name="answer" />

                <span>Bulbassauro</span>
              </label>
            </div>
            <div class="chose_card">
              <i class="nes-squirtle"></i>
              <label>
                <input type="radio" class="nes-radio" name="answer" />

                <span>Squirtle</span>
              </label>
            </div>
          </div>
          <div class="reg_button">
            <button type="button" class="nes-btn is-primary">Register</button>
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
  height: 37em;
  border-radius: 12px;
}
.input_dark {
  padding: 0.6em 0;
}
.chose {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
}
.chose_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3em 0.3em;
}
.reg_button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reg_button button{
    margin: 1rem;
}
</style>