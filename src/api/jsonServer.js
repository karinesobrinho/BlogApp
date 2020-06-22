import axios from 'axios'

export default axios.create({
    baseURL: 'http://98c98014986a.ngrok.io'  
})
//o URL muda cada vez que o ngrok é renderizado ou a cada 8 hrs entao precisa ser trocado