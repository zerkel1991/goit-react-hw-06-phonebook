import { legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import { contactsReducer,filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts : contactsReducer,
  filter : filterReducer,
})


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );




export default store;
