export type dataType = {
    firstName: string,
    lastName: string,
    email: string,
    data: string
}
export type initialStateType = {
    form: dataType

}
export const addToCartAC = (form: dataType) => ({type: 'ADD_TO_CART', form} as const)
export  type AddCartType = ReturnType<typeof addToCartAC>
export type ActionsType = AddCartType
const initialState: initialStateType = {
    form: {
        firstName: '',
        lastName: '',
        email: '',
        data: ''
    },

}

export const formReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                form: {
                    firstName: action.form.firstName,
                    lastName: action.form.lastName,
                    email: action.form.email,
                    data: action.form.data
                }
            }
        }
        default:
            return state;
    }
}