<script>
import Header2 from './Header2.vue'
import axios from 'axios'

export default{
    name:'Home',
    data(){
        return{
            name: '',
            blog:[]
        }
    },
    components:{
        Header2
    },
    methods:{
        async deleteBlog(id){
            let result = await axios.delete("http://localhost:3000/blogs/" + id)
            console.warn(result)
            if(result.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get("http://localhost:3000/blogs")
            console.warn(result)
            this.blog = result.data
        }
    },
    async mounted(){
        this.loadData()
    }
}
</script>

<template>
    <Header2 />
    <h1>Hello {{name}}, This is Home Page</h1>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Description</td>
            <td>Content</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in blog" :key="item.id">
            <td> {{ item.id }} </td>
            <td> {{ item.name }} </td>
            <td> {{ item.description }} </td>
            <td> {{ item.content }} </td>
            <td>
                <RouterLink :to="'/update/' + item.id">Update</RouterLink>
                <button v-on:click="deleteBlog(item.id, event)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<style>
table, tr, td {
  border: 1px solid;
  padding: 5px;
  margin: 5px;
  border-collapse: collapse;
}
</style>