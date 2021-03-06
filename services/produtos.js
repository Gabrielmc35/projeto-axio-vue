import {http} from './config'

export default {

    listar:() =>{
        return http.get('/product')
    },
    
    salvar:(produto) =>{
		return http.post('/product',produto);
    },
    atualizar:(produto)=>{
      return http.put('/product',produto);
    },
    apagar:(produto)=>{
      return http.delete('/product', { data: produto })
    }
}
