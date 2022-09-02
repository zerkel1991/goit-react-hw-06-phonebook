import { legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import { contactsReducer,filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts : contactsReducer,
  filter : filterReducer
})
const persistedState = localStorage.getItem('reduxState')
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : []

const store = createStore(
  rootReducer,persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})



export default store;
