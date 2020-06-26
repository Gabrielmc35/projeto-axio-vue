<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-4">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

         
          <label>NoOme</label>
          <input type="text" placeholder="NOME" v-model="produto.name">
           <label>Descricao </label>
           <input type="text" placeholder="descricao" v-model="produto.description">
          <label>Valor</label>
        
        
          <input type="number" placeholder="Valor " v-model="produto.price">
          
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>VALOR</th>
            <th>DESCRIÇÃO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos " :key="produto.id">

            <td>{{produto.name}}</td>
            <td>{{produto.priceHistoryList[0].price}} </td>
            <td>{{produto.description}}</td>

            <td>
              <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(produto)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
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
        description:"",
        name:"",
        price: 0

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
            console.log(resposta.data)

      }).catch(e => {
        console.log(e)
      })
    },
    salvar(){
        
      if(!this.produto.id){
        Produto.salvar(this.produto).then(resposta => {
          resposta
          this.produto = {}
          alert('Cadastrado com sucesso!')
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }else{
        Produto.atualizar(this.produto).then(resposta => {
          resposta
          this.produto = {}
          //this.produto.priceHistoryList[0].price={}

          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listar()
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
      
    },
    editar(produto){
      this.produto = produto
    },
    remover(produto){
      if(confirm('Deseja excluir o produto?')){
        Produto.apagar(produto).then(resposta => {
          resposta
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
          console.log(e)
        })
      }
    }
  }
}
</script>

<style>
</style>