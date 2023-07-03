<!-- Day la Trang chu moi -->

<script>
import Header2 from './Header2.vue'
import LeftSidebar from './LeftSidebar.vue'
import RightSidebar from './RightSidebar.vue'
import MainContent from './MainContent.vue'
import axios from 'axios'

export default{
    name:'Test',
    components:{
        Header2,
        LeftSidebar,
        RightSidebar,
        MainContent
    }
}
</script>

<template>
    <Header2 />
    
    <div class="container">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
    </div>
</template>

<style>
.container{
    display: flex;
    justify-content: space-between;
    padding: 15px 5%;
}
body{
    background: #efefef;
}
</style>