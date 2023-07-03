<script>
import Header2 from './Header2.vue'
import axios from 'axios'

export default{
    name:'Chat',
    components:{
        Header2
    },
    methods:{
        async hello(){
            let hello = await axios.get("http://localhost:3000/api/hello")
            console.log(hello)
        }
    },
    async mounted(){
        this.hello()
    }
}
</script>

<template>
    <Header2 />
    <h1>This is Chat Page</h1>
    <ul id="messages"></ul>
    <form  class="chat-form" action="" id="chat-form">
        <input type="text" id="chat-mes">
        <button id="send-chat">Send</button>
    </form>
</template>

<style scoped>
.chat-form input, .chat-form button{
    margin: 10px;
    padding: 5px;
}
</style>