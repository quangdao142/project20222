<script>
import axios from 'axios'
import { onMounted } from 'vue'
export default{
    name: 'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users",{
                email: this.email,
                name: this.name,
                password: this.password
            })

            console.warn(result)
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<template>
    <h1>Sign Up</h1>
    <div class="signup">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <RouterLink to = "/login">Login</RouterLink>
        </p>
    </div>
</template>

<style>

</style>