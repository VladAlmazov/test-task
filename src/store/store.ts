import {combineReducers, createStore} from 'redux';
import { commentReducer } from './comment-reducer';
import {productsReducer} from './products-reducer';


const rootReducer = combineReducers({
    products: productsReducer,
    comments: commentReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;