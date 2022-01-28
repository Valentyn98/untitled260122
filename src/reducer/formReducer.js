import React from 'react';

const  formReducer = (state, action) =>{
    console.log(action.field);

    switch (action.type) {
        case 'handle input text':
             return {...state,[action.field]: action.payload}
        case 'addDog':
            return state.dog ? {...state, dogs: state.dogs.concat({id:Date.now(),name:state.dog}),dog:''} : state
        case 'addCat':
            return state.cat ? {...state, cats: state.cats.concat(state.cat),cat:''} : state
        case 'delDog':
           console.log(action.id)
            return {...state,dogs:state.dogs.filter(dog => dog.id !== action.id)}
    }
    return state
}

export default formReducer;