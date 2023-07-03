<script>
import Header2 from './Header2.vue'
import axios from 'axios'

export default{
    name:'Update',
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
        async updateBlog(){
            console.warn(this.blog)
            const result = await axios.put("http://localhost:3000/blogs/" + this.$route.params.id,{
                name: this.blog.name,
                description: this.blog.description,
                content: this.blog.content
            })
            if(result.status == 200){
                this.$router.push({name:'Home'})
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:'SignUp'})
        }

        const result = await axios.get('http://localhost:3000/blogs/' + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.blog = result.data
    }
}
</script>

<template>
    <Header2 />
    <h1>This is Update Blog Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="blog.name">
        <input type="text" name="description" placeholder="Enter description" v-model="blog.description">
        <textarea name="content" placeholder="Enter content" cols="30" rows="10" v-model="blog.content"></textarea>
        <button type="button" v-on:click="updateBlog">Update blog</button>
    </form>
</template>

<style></style>