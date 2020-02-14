import {http} from './config'

export default {

    listar:() =>{
        return http.get('/product')
    },
    
    salvar:(produto) =>{
		return http.post('/product',produto);
    }
}