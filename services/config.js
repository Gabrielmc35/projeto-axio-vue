import axios from 'axios'

export const http = axios.create( {
    baseURL: 'https://ipgc.findsolucoes.com.br/' //api
})

