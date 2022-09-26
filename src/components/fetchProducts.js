import { mockProductos } from "../mockProductos";

export const fetchApi = () =>{
    return new Promise ( (resolve) =>{
        setTimeout( () =>{
            resolve(mockProductos)
        } , 500);
    })
};

export const getProduct = (id) =>{
    return new Promise ( resolve =>{
        setTimeout( () =>{
            resolve(mockProductos.find(item => item.id === id))
        }, 500)
    })
}