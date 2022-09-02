
import { ADD,DELETE,CHANGE_FILTER } from "./types";




const contactsReducer = (state = [],{type,payload}) =>{

  switch (type) {
    case ADD:
      const isDublicate = state.find(el => el.name === payload.name)
      if(isDublicate){
        alert (`${payload.name} is already in contacts`)
        return state
      }
      return [...state,payload];

    case DELETE:
      return state.filter(el => el.id !== payload)

    default:
      return state;
  };
};
const filterReducer = (state = '',{type,payload}) =>{

  switch (type) {
    case CHANGE_FILTER:
      return payload;



    default:
      return state;
  };
};

export {contactsReducer,filterReducer}
