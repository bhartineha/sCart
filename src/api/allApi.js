import { handleResponse, handleerror} from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL;

export const getAllProduct = (queryStr) => {
    let urlCon = queryStr ? baseUrl + "/products?title=" + queryStr : baseUrl + "/products"
    return fetch(urlCon).then(handleResponse).catch(handleerror);
}

export const getAllFilter = (queryStr) => {
    let urlCon = baseUrl + "/filters";
    return fetch(urlCon).then(handleResponse).catch(handleerror);
}

export const login = (queryStr) => {
    let urlCon = queryStr ? baseUrl + "/users?username=" + queryStr : baseUrl + "/users"
    return fetch(urlCon).then(handleResponse).catch(handleerror);
}


