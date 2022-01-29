import React from 'react';

const  formReducer = (state, action) =>{
    console.log(action.field);

    switch (action.type) {
        case 'handle input text':
             return {...state,[action.field]: action.payload}
        case 'addDog':
            return state.dog ?
                {...state, dogs: state.dogs.concat({id:Date.now(),name:state.dog}),dog:''} : state
        case 'addCat':
            return state.cat ?
                {...state, cats: state.cats.concat({id:Date.now(),name:state.cat}),cat:''} : state
        case 'delDog':
           // console.log(action.id)
            return {...state,dogs:state.dogs.filter(dog => {
                if (dog.id !== action.id){
                    return true
                }
                })}
        case 'delCat':
            return {...state,cats:state.cats.filter(cat => {
                if (cat.id !== action.id){
                    return true
                }
                })}
    }
    return state
}
export default formReducer;