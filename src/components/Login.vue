<template>
  <div id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <input v-model="nick" type="text" placeholder="Ingrese su nick" required />
        <input v-model="password" type="password" placeholder="Ingrese su password" required />
        <button value="Submit" type="submit" style="background-color: black; color: white">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      nick: "",
      password: "",
      jugadores: [
        { nick: "mburkhardt", password: 123 },
        { nick: "edditrana", password: 123 },
        { nick: "mkraitman", password: 123 }
      ]
    };
  },

  methods: {
    onSubmit() {
      console.log("nick: ", this.nick, " - password: ", this.password);
      this.$store.dispatch("loguearse", {
        nick: this.nick,
        password: this.password
      });
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped>
#login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  text-align: center;
  margin-top: 1%;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Avenir", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Avenir", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: rgb(34, 60, 179);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: rgb(10, 188, 219);
}
</style>
