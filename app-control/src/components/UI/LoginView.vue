<template>
<div class="app">
    <div class="login">
  <form>
    <h3>Login To MEG Control Security</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 
  <button type="submit" class="btn btn-info">
  <router-link class="link" to="/Dashboard">Login</router-link>
  </button>
</form>
</div>
</div>
</template>

<script>
export default {

}
</script>
<style scoped>

.app {
  text-align: center;
  padding: 5rem;
  width: 100%;
  height: 100%;
  background-image: url(../../images/pexels-jos---luis-photographer.jpg);

}
      ul,
      .link,
      .dropdown-item {
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
      }


.login {
  margin: 1rem auto;
  max-width: 50rem;
  text-align: left;
  padding: 5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
   background-color: #92A9BD;
}



</style>