<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-if="!hide">{{ text }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/date">Go to date</router-link>
    <router-link to="/info/bar">Go to Bar</router-link>
    <router-link to="/indexbutton">Go to indexbutton</router-link>
    <router-link to="/">Go to hello</router-link>
    <router-link to="/hello">Go to scroll</router-link>
    <router-link to="/game">打开小游戏</router-link>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import child from '@/components/bar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'cc',
      msg1: '这是第一个数据',
      msg2: '这是第二个数据'
    }
  },
  props: ['hide'],
  methods:{
   handler1:function(){
   		console.log(1);
   },
   handler2:function(){
   		console.log(2);
   }
  },
  components: {
  	child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
