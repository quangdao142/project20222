<script>
export default{
    name:'LeftSidebar',
    methods:{
        
    }
}
</script>

<template>
    <div class="left-sidebar">
        <div class="imp-links">
            <a href=""><img src="../assets/news.png" alt="">Lastest News</a>
            <a href=""><img src="../assets/friends.png" alt="">Friends</a>
            <a href=""><img src="../assets/groups.png" alt="">Groups</a>
        </div>
    </div>
</template>

<style>
.left-sidebar{
    flex-basis: 20%;
    position: sticky;
    top: 70px;
    align-self: flex-start;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    color: #626262;
}
.imp-links a{
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    color: #626262;
    width: fit-content;
}
.imp-links img{
    width: 30px;
    margin-right: 15px;
}
</style>