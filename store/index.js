export const state = () => ({
    products: [],
    cart: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    //updates global state
    updateProducts: (state, data) => {
        state.products = data
    },
    updateCart: (state, data) => {
        state.cart.push(data)
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
                // console.log(data)
                commit('updateProducts', data)
            })
        }catch(err){
            console.log(err)
        }
    
    }
}