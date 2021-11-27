import axios from "axios";

const api = axios.create({
    // https://defensoria.ac.def.br/apiapp/api_doc_uteis.php/
    baseURL: 'https://defensoria.ac.def.br/'
});
export default api;