<template>
  <div class="pageNotFound">
    <img src="../assets/img/logo.png">
    <div class="output">
      <h3>404 - три раза</h3>
      <div class="Ku" @click="kuShowTwo=true">
        <a>Ку</a>
      </div>

      <transition name="ku-animation">
          <div class="Ku" v-show="kuShowTwo" @click="kuShowLast=true">
            <a>Ку</a>
          </div>
      </transition>
      <transition name="ku-animation">
          <div class="Ku" v-show="kuShowLast">
             <router-link tag="a" to="/vuejs">Ку</router-link>
          </div>
      </transition>
      
      
     
    </div>    
  </div>
</template>

<script>
  export default{
    data(){
      return{
        kuShowTwo:false,
        kuShowLast:false
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../assets/style/404'
</style>