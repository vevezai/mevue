<template>
  <div class="hello">
    <h1>我是一段标题文本</h1>
    <div class="set">
      我是黄的<span class="pp">我是绿的</span>
    </div>
    <div><router-link to='/Login'>我要跳到login页面</router-link> </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
   .h1{
     color:red;
   }
   .set{
     color:yellow;
     .pp{
       color:green;
     }
   }
</style>
