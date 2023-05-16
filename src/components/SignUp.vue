<script>
import axios from 'axios'
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
                alert("Sign up done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
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
    </div>
</template>

<style scoped>
.signup input{
    margin: 5px;
    padding: 5px;
    display: block;
}
.signup button{
    margin: 5px;
    cursor: pointer;
}
</style>