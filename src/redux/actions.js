
import { ADD,DELETE,CHANGE_FILTER} from "./types"

import { nanoid } from "nanoid";


const addContact = (name,number) => ({

  type: ADD,
  payload : {
    id:nanoid(),
    name:name,
    number:number,
  }
}
)

const deleteContact =  id => ({
  type: DELETE,
  payload : id
}
)
const changeFilter =  value => ({
  type: CHANGE_FILTER,
  payload : value
}
)

export {addContact, deleteContact,changeFilter};
