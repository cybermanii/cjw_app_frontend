<template lang="es">
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is the login page</h1>
        <LoginComponent msg="Welcome to the Login page"/>
    </div>
</template>
<script>
import LoginComponent from '@/components/LoginComponent.vue'


export default {
  name: 'LoginView',
  components: {
    LoginComponent,
  },
  created() {
      
  },
}
</script>