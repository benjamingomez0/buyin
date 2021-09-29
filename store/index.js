import { v4 as uuid4 } from "uuid";
export const state = () => ({
    products: [],
    cart: []
})

export const getters = {
    getTotalPrice: state => {
        if(!state.cart.length) return 0

        let total = 0

        for( let i = 0; i < state.cart.length; i++)
        {
            total+= +state.cart[i].subtotal
        }
        return total
    },
    getTotalItems: state => {
        if(!state.cart.length) return 0

        let total = 0
        for( let i = 0; i < state.cart.length; i++)
        {
            total+= +state.cart[i].count
        }
        return total
    }
}

export const mutations = {
    //updates global state
    updateProducts: (state, data) => {
        state.products = data
    },
    updateCart: (state, data) => {
        data.id = uuid4()
        state.cart.push(data)
    },
    UpdateCartAmounts: (state, data) =>{
        if( data.count === 0){
            for(let i = 0; i < state.cart.length; i++){
                if(state.cart[i].id === data.id){
                    state.cart.splice(i,1)
                }
            }
        } else {
            const newCart = state.cart.map((el) =>{
                if(el.id === data.id ){
                    el = {...data}
                    return el
                }
                return el
            })
            state.cart = [...newCart]
        }
        

        
    }
}

export const actions = {
    //pulls in data from Fake Store API
    async getProductData({
        commit,
        state
    }) {
        if(state.products.length){
            return
        }
        try{
            await fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data)=> {
                commit('updateProducts', data)
            })
        }catch(err){
            console.log(err)
        }
    
    }
}