<template lang="es">
    <div>
        <h1>{{ msg }}</h1>
        <p>This is the login page</p>

        
    </div>
</template>
<script>
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  }
}
</script>