import React from 'react';
import './App.css';
import CatalogPage from './components/CatalogPage/CatalogPage';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import {ProductType} from './store/products-reducer';
import {NavLink, Route} from 'react-router-dom';
import {SingleItem} from './components/SingleItem/SingleItem';
import {CommentType} from './store/comment-reducer';


export function App() {
    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products);
    const commentsForIphone = useSelector<AppRootStateType, Array<CommentType>>(
        state => state.comments.commentForIphone
    );
    const commentsForSamsung = useSelector<AppRootStateType, Array<CommentType>>(
        state => state.comments.commentForSamsung
    );
    const commentsForNokia = useSelector<AppRootStateType, Array<CommentType>>(
        state => state.comments.commentForNokia
    );

    return (
        <div>
            <NavLink to={'/catalog'}>Відкрити каталог</NavLink>
            <div>
                <Route path="/catalog"
                       render={() => <CatalogPage/>}/>

                <Route path="/Iphone"
                       render={() => <SingleItem item={products[0]} comments={commentsForIphone}/>}/>
                <Route path="/Samsung"
                       render={() => <SingleItem item={products[1]} comments={commentsForSamsung}/>}/>
                <Route path="/Nokia"
                       render={() => <SingleItem item={products[2]} comments={commentsForNokia}/>}/>
            </div>
        </div>
    );
}


