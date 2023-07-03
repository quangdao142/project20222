<script>
export default{
    name:'RightSidebar',
    methods:{
        
    }
}
</script>

<template>
    <div class="right-sidebar">
        <div class="sidebar-title">
            <h4>Chat</h4>
            <a href="">Hide chat</a>
        </div>
        <div class="online-list">
            <div class="online">
                <img src="../assets/member1.png" alt="">
            </div>
            <p>Mina</p>
        </div>
        <div class="online-list">
            <div class="online">
                <img src="../assets/member2.png" alt="">
            </div>
            <p>Jackson</p>
        </div>
        <div class="online-list">
            <div class="online">
                <img src="../assets/member3.png" alt="">
            </div>
            <p>Alison</p>
        </div>
    </div>
</template>

<style>
.right-sidebar{
    flex-basis: 20%;
    position: sticky;
    top: 70px;
    align-self: flex-start;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    color: #626262;
}
.sidebar-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
}
.sidebar-title h4{
    font-weight: 600;
    font-size: 17px;
}
.sidebar-title a{
    text-decoration: none;
    color: #1876f2;
    font-size: 15px;
}
.online-list{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.online-list .online img{
    width: 40px;
    border-radius: 50%;
}
.online-list .online{
    margin-right: 15px;
}
</style>