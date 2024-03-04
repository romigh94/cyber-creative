<template>
  <div>
 
    <NavBar />
        <router-view></router-view>
    <FooTr />
  
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooTr from './components/FooterEl.vue'

  export default {
    components: {
      NavBar, FooTr
    }
  }
</script>