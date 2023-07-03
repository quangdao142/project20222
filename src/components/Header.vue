<!-- Day la Header cu -->
<script>
export default{
    name:'Header',
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<template>
<div class="nav">
    <RouterLink to = "/">Home</RouterLink>
    <RouterLink to = "/add">Add Blog</RouterLink>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>