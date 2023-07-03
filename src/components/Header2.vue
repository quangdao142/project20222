<!-- Day la Header moi -->
<script>
export default{
    name:'Header2',
    methods:{
        
    }
}
</script>

<template>
<nav>
    <div class="nav-left">
        <img src="../assets/resto-logo.png" alt="" class="logo">
        <div class="search-box">
            <img src="../assets/search.png" alt="">
            <input type="text" placeholder="Search...">
        </div>
    </div>
    
    <div class="nav-right">
        <ul>
            <li><img src="../assets/notification.png" style="width: 25px; margin: 0 15px;" alt=""></li>
            <li><img src="../assets/inbox.png" style="width: 40px; margin: 0 15px;" alt=""></li>
        </ul>
        <div class="nav-user-icon">
            <img src="../assets/user.png" alt="">
        </div>
    </div>
</nav>
</template>

<style>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1876f2;
    padding: 5px 5%;
    position: sticky;
    z-index: 100;
    top: 0;
}
.logo{
    width: 60px;
    margin-right: 45px;
}
.nav-left, .nav-right{
    display: flex;
    align-items: center;
}
.nav-right ul li{
    list-style: none;
    display: inline-block;
}
.nav-user-icon img{
    width: 30px;
    margin: 0 15px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 3px #fafafa;
    padding: 3px;
}
.search-box{
    background: #fafafa;
    width: 350px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.search-box img{
    width: 25px;
}
.search-box input{
    width: 100%;
    background: transparent;
    padding: 10px;
    outline: none;
    border: 0;
}
</style>