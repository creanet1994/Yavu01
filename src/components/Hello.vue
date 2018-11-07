<template>
    <div id="hello">

    <button v-on:click="logout">Logout</button>
    <button v-on:click="articles">Articulos</router-link></button>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'hello',
    data () {
      return {
        ip: "",
        input: {
          firstname: "",
          lastname: ""
        },
        response: ""
      }
    },
    mounted() {
      this.$http.get("https://httpbin.org/ip").then(result => {
          this.ip = result.body.origin;
      }, error => {
          console.error(error);
      });
        },
    methods: {
      sendData() {
        this.$http.post("https://httpbin.org/post", this.input, { headers: { "content-type": "application/json" } }).then(result => {
            this.response = result.data;
        }, error => {
            console.error(error);
        });
      },
      logout: function(){
        firebase.auth().signOut().then(()=> {
          this.$router.replace('login')
        })
      },
      articles: function(){
          this.$router.replace('articles')
      },
      volver: function(){
          this.$router.replace('hello')
      }
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
  button{
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: normal;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
  }
</style>
