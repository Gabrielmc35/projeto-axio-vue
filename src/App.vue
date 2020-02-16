<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-4">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

       
           <input type="text" placeholder="descricao" v-model="produto.description">
          <label>Valor</label>
          <label>Nome</label>
          <input type="text" placeholder="NOME" v-model="produto.name">
          <label>Descricao</label>
        
        
          <input type="text" placeholder="Valor " v-model="produto.price">
          
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos " :key="produto.id">

            <td>{{produto.name}}</td>
            <td>{{produto.description}}</td>
            <td>{{produto.price}} </td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Produto from '../services/produtos'
export default {

  data(){
    return {
      produto: {
        description:"string",
        //id:1,
        name:"string",
        price:10

      },
      produtos:[]
    }
  },
  mounted(){
  this.listar()
    
    

  },
  methods:{
   listar(){
      Produto.listar().then(resposta => {
        this.produtos = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },
    salvar(){
       alert(this.produto.id)
    

      Produto.salvar(this.produto).then(resposta =>{
       
       resposta

      })  .catch(e => {
        console.log(e)
        })
    }
  }
}
</script>