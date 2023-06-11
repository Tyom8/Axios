import axios from "axios"

const API = axios.create({
    baseURL:"https://gov.annaniks.com"
});

const setOutToken = (token) => {
    API.defaults.headers.common["Authorization"] = "Bearer "+ token
}

export default API;
export {setOutToken};