<template>
  <div id="articles">
    <div class="container">
      <div class="page -header">
        <h1>Firebase and Vue</h1>
      </div>





    <div class="card">
      <div class="card-header">Añadir libro</div>
      <div class="card-body">
        <form id="form"
              class="form-inline"
              @submit.prevent="addArticle">
          <div class="form-group mb-2">
            <label for="title" class="sr-only">Title</label>
            <input id="title"
                   type="text"
                   class="form-control"
                   placeholder="Title"
                   v-model="newArticle.title" />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="author" class="sr-only">Author</label>
            <input id="author"
                   type="text"
                   class="form-control"
                   placeholder="Author"
                   v-model="newArticle.author" />
          </div>
          <div class="form-group mb-2">
            <label for="url" class="sr-only">Url</label>
            <input id="url"
                   type="text"
                   class="form-control"
                   placeholder="http://"
                   v-model="newArticle.url" />
          </div>
          <button class="btn btn-primary mx-sm-3 mb-2">Add</button>
        </form>
      </div>
    </div>






      <div class="card">
        <div class="card-header">
          <h3>Lista de articulos</h3>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in articles" :key="article.id">
                <td>
                  <a :href="article.url">{{ article.title }}</a>
                </td>
                <td>{{ article.author }}</td>
                <td>
                  <span class="pointer"
                        @click="removeArticle(article)">
                    <i class="fas fa-trash"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container">
      <button v-on:click="volver">Volver</router-link></button>
    </div>
  </div>
</template>

<script>

  import articlesRef from '../main';

  export default {
    name: 'articulos',
      firebase: {
        articles: articlesRef
      },
    data(){
      return {
        newArticle: {
          title: '',
          author: '',
          url: ''
        }
      }
    },
    methods: {
      addArticle() {
        articlesRef.push(this.newArticle);
          this.newArticle.title = '';
          this.newArticle.author = '';
          this.newArticle.url = '';
      },
      removeArticle(article){
        articlesRef.child(article['.key']).remove();
      },
      volver: function(){
          this.$router.replace('hello')
      },
    }
  }
</script>

<style>
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