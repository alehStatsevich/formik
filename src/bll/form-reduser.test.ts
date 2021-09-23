import {addToCartAC, formReducer, initialStateType} from "./form-reducer";

let startState: initialStateType = {
    form: {
        firstName: '',
        lastName: '',
        email: '',
        data: ''
    },
};

test('form reducer should change data', () => {

    const newData = {
        firstName: "firstName",
        lastName: "lastName",
        email: "vfv@gmail.com",
        data: "12.03.2021"
    }
    const action = addToCartAC(newData)

    const endState = formReducer(startState, action)

    expect(endState.form.firstName).toBe("firstName")
    expect(endState.form.lastName).toBe("lastName")
    expect(endState.form.email).toBe("vfv@gmail.com")
    expect(endState.form.data).toBe("12.03.2021")

});
