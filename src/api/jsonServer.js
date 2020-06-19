import axios from 'axios'

export default axios.create({
    baseURL: 'http://e5b05bfdf6cc.ngrok.io'  
})
//o URL muda cada vez que o ngrok é renderizado ou a cada 8 hrs entao precisa ser trocado