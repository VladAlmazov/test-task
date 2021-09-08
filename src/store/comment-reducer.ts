export type CommentType = {
    id: number
    productId: number
    userName: string
    description: string
    date: Date
}

type CommentDataType = {
    commentForIphone: Array<CommentType>
    commentForSamsung: Array<CommentType>
    commentForNokia: Array<CommentType>
}

type ActionType = deleteIphoneCommentAT | deleteSamsungCommentAT | deleteNokiaCommentAT

export type deleteIphoneCommentAT = ReturnType<typeof deleteIphoneCommentAC>
export type deleteSamsungCommentAT = ReturnType<typeof deleteSamsungCommentAC>
export type deleteNokiaCommentAT = ReturnType<typeof deleteNokiaCommentAC>

const initialState: CommentDataType = {
    commentForIphone: [
        {
            id: 1,
            productId: 1,
            userName: 'Влад',
            description: 'Найкращий телефон, яким мені приходилось користуватись. Рекомендую!',
            date: new Date()
        },
        {
            id: 2,
            productId: 1,
            userName: 'Ігор',
            description: 'Раджу всім своїм друзям.',
            date: new Date()
        }]
    ,
    commentForSamsung: [
        {
            id: 3,
            productId: 2,
            userName: 'Юля',
            description: 'Досить не поганий телефон за свої гроші.',
            date: new Date()
        }
        ,
        {
            id: 4,
            productId: 2,
            userName: 'Саша',
            description: 'Я задоволений',
            date: new Date()
        }
    ],
    commentForNokia: [
        {
            id: 5,
            productId: 3,
            userName: 'Таня',
            description: 'Не достатньо функціоналу. Не рекомендую.',
            date: new Date()
        },
        {
            id: 6,
            productId: 3,
            userName: 'Оля',
            description: 'Довго тримає заряд',
            date: new Date()
        }
    ]
}

export const commentReducer = (state: CommentDataType = initialState, action: ActionType): CommentDataType => {
    switch (action.type) {
        case 'DELETE-IPHONE-COMMENT': {
            let stateCopy = {...state}
            let deletedComment = stateCopy.commentForIphone.filter(c => c.id !== action.id)
            return {...stateCopy, commentForIphone: deletedComment}
        }
        case 'DELETE-SAMSUNG-COMMENT': {
            let stateCopy = {...state}
            let deletedComment = stateCopy.commentForSamsung.filter(c => c.id !== action.id)
            return {...stateCopy, commentForSamsung: deletedComment}
        }
        case 'DELETE-NOKIA-COMMENT': {
            let stateCopy = {...state}
            let deletedComment = stateCopy.commentForNokia.filter(c => c.id !== action.id)
            return {...stateCopy, commentForNokia: deletedComment}
        }
        default:
            return state
    }
}

export const deleteIphoneCommentAC = (id: number) => {
    return {type: 'DELETE-IPHONE-COMMENT', id}
}
export const deleteSamsungCommentAC = (id: number) => {
    return {type: 'DELETE-SAMSUNG-COMMENT', id}
}
export const deleteNokiaCommentAC = (id: number) => {
    return {type: 'DELETE-NOKIA-COMMENT', id}
}
