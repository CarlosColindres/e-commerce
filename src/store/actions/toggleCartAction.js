export const toggleCart = () => {
    return {type: "TOGGLE_CART_HIDDEN"}
}

export const addItem = item => {
    return {
        type:'ADD_ITEM',
        payload: item
    }
}