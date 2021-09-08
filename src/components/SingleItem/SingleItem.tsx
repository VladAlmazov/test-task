import React from 'react';
import './../../App.css';
import {ProductType} from '../../store/products-reducer';
import {
    CommentType,
    deleteIphoneCommentAC,
    deleteNokiaCommentAC,
    deleteSamsungCommentAC
} from '../../store/comment-reducer';
import {useDispatch} from 'react-redux';

export type SingleItemPropsType = {
    item: ProductType
    comments: Array<CommentType>
}

export const SingleItem = (props: SingleItemPropsType) => {
    const dispatch = useDispatch()

    const deleteComment = (id: number, productId: number) => {
        if (productId === 1) {
            dispatch(deleteIphoneCommentAC(id))
        } else if (productId === 2) {
            dispatch(deleteSamsungCommentAC(id))
        } else {
            dispatch(deleteNokiaCommentAC(id))
        }
    }

    const newComment = React.createRef<HTMLInputElement>()

    // const addNewComment = () => {
    //     debugger
    //     if (newComment.current) {
    //         dispatch(addNewCommentAC(newComment.current.value))
    //     }
    // }

    return <div>
        <div>
            <img src={props.item.imageUrl} alt=""/>
        </div>
        <div>
            Опис товару: <br/>
            {props.item.description}
        </div>
        <div>
            В наявності: {props.item.count} шт.
        </div>
        <div>
            Кольори, які є в наявності: {props.item.color}
        </div>
        <div>
            <ul>
                <li>{props.item.size.height}</li>
                <li>{props.item.size.width}</li>
                <li>{props.item.size.weight}</li>
            </ul>
        </div>
        <div>
            <div>
                Коментарі<br/>
                Залиште свій відгук: <br/>
            </div>
            <div>
                <input ref={newComment} type="text"/>
                <button onClick={() => {}}>Відправити</button>
            </div>
            <div>
                <ol>
                    {props.comments.map(c => <li key={c.id}>
                        {c.userName}<br/>
                        {c.description}<br/>
                        <button onClick={() => deleteComment(c.id, c.productId)}>Видалити коментар</button>
                    </li>)}
                </ol>

            </div>
        </div>
    </div>
}