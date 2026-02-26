<template>
  <input type="text" v-model="usuario" placeholder="usuario">
  <input type="text" v-model="pass" placeholder="contraseña">
  <button @click="ingresar()">Login</button>
</template>

<script setup>
import { ref } from 'vue';
import { postData } from './services/apiCliente.js';
import { useAuthStore } from './stores/Auth';

let usuario = ref("")
let pass = ref("")
const useAuth = useAuthStore()

async function ingresar(){
  try {
    let res = await postData("login",{
      email: usuario.value,
      password: pass.value
    })
    console.log(res);
    useAuth.token = res.token
    
  } catch (error) {
    console.log(error.response);
    
  }
}

</script>