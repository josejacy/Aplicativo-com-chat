import axios from "axios";

const api = axios.create({
    // https://defensoria.ac.def.br/apiapp/api_diario_eletronico.php/
    baseURL: 'https://defensoria.ac.def.br/'
});
export default api;