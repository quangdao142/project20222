<script>
import Header2 from './Header2.vue'
import axios from "axios"

export default{
    name:'Add',
    components:{
        Header2
    },
    data(){
        return{
            blog:{
                name:'',
                description:'',
                content:''
            }
        }
    },
    methods:{
        async addBlog(){
            console.warn(this.blog)
            const result = await axios.post("http://localhost:3000/blogs",{
                name: this.blog.name,
                description: this.blog.description,
                content: this.blog.content
            })
            if(result.status == 201){
                this.$router.push({name:'Home'})
            }
            console.warn("result", result)
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>

<template>
    <Header2 />
    <h1>This is Add Blog Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="blog.name">
        <input type="text" name="description" placeholder="Enter description" v-model="blog.description">
        <textarea name="content" placeholder="Enter content" cols="30" rows="10" v-model="blog.content"></textarea>
        <button type="button" v-on:click="addBlog">Add new blog</button>
    </form>
</template>

<style></style>