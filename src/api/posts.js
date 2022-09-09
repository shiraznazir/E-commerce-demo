import axios from 'axios';

export const getProducts = ()=> {
    return axios.get('http://localhost:3500/products')
}

export const insertCart = (data)=> {
    //console.log(data)
    return axios.post(`http://localhost:3500/cart/`,data)
}

export const getCartProducts = ()=> {
    return axios.get('http://localhost:3500/cart')
}

export const getCardProductById = (id)=> {
    return axios.get(`http://localhost:3500/cart/${id}`)
}

export const deleteCartProducts = (id)=> {
    return axios.delete(`http://localhost:3500/cart/${id}`)
}

export const updateCartProducts = (data)=> {
    return axios.put(`http://localhost:3500/cart/${data.id}`, data);
}