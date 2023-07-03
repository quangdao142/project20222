<script>
import router from './routers';


export default{
    name: "App",
    components: { router }
}
</script>

<template>
  <RouterView />
</template>

<style>
body{
  padding: 0px;
  margin: 0px;
}
.signup input, .login input, .add input{
    margin: 10px;
    padding: 5px;
    display: block;
    width: 400px;
    height: 30px;
}
.add textarea{
    margin: 10px;
    padding: 5px;
    display: block;
    width: 400px;
    height: 100px;
}
.signup button, .login button, .add button{
    margin: 10px;
    cursor: pointer;
}
</style>
