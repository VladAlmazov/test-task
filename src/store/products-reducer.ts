import iphone12Photo from '../common/photo/iphone-12-pro-family-hero.jpg'
import iphone11Photo from '../common/photo/iphone11.jpg'
import iphone10Photo from '../common/photo/iphone10.jpg'

type SizeType = {
    width: string
    height: string
    weight: string
}

export type ProductType = {
    id: number
    imageUrl: string
    title: string
    description: string
    count: string
    size: SizeType
    color: Array<string>
}

type ActionType = changeFilterTitleAT | addProductAT | deleteProductAT | changeFilterCountAT


export type changeFilterTitleAT = ReturnType<typeof filterTitleAC>
export type changeFilterCountAT = ReturnType<typeof filterCountAC>
export type addProductAT = ReturnType<typeof addProductAC>
export type deleteProductAT = ReturnType<typeof deleteProductAC>


const initialState: Array<ProductType> = [
    {
        id: 1,
        imageUrl: iphone12Photo,
        title: 'Iphone',
        description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A14 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 256 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14',
        count: '4',
        size: {
            width: '71.5 мм',
            height: '146.7 мм',
            weight: '162 г',
        },
        color: ['Чорний, ', 'Сірий, ', 'Червоний, ']
    },
    {
        id: 2,
        imageUrl: iphone11Photo,
        title: 'Samsung',
        description: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
        count: '2',
        size: {
            width: '75.7 мм',
            height: '150.9 мм',
            weight: '194 г'
        },
        color: ['Оранжевий, ', 'Синій, ', 'Коричневий, ']
    },
    {
        id: 3,
        imageUrl: iphone10Photo,
        title: 'Nokia',
        description: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
        count: '5',
        size: {
            width: '150,9 мм',
            height: '75,7 мм',
            weight: '194 г',
        },
        color: ['Чорний, ', 'Рожевий, ', 'Зелений, ']
    }
]

export const productsReducer = (state: Array<ProductType> = initialState, action: ActionType): Array<ProductType> => {
    switch (action.type) {
        case 'DELETE-PRODUCT': {
            let stateCopy = [...state]
            return stateCopy.filter(p => p.id !== action.id)
        }
        case 'ADD-PRODUCT': {
            return [...state, {
                id: state.length + 1,
                imageUrl: '',
                title: action.title,
                description: action.description,
                count: action.count,
                size: {
                    width: 'Не вказано',
                    height: 'Не вказано',
                    weight: 'Не вказано',
                },
                color: ['Жовтий, ', 'Синій, ', 'Зелений, ']
            }]
        }
        case 'FILTER-TITLE': {
            let stateCopy = [...state]
            return stateCopy.sort((a, b) => a.title.toLowerCase() <= b.title.toLowerCase() ? -1 : 1)
        }
        case 'FILTER-COUNT': {
            let stateCopy = [...state]
            return stateCopy.sort((a,b) => a.count <= b.count ? -1 : 1)
        }
        default:
            return state
    }
}

export const deleteProductAC = (id: number) => {
    return {type: 'DELETE-PRODUCT', id} as const
}
export const filterTitleAC = (value: string) => {
    return {type: 'FILTER-TITLE', value} as const
}
export const filterCountAC = (value: string) => {
    return {type: 'FILTER-COUNT', value} as const
}
export const addProductAC = (title: string, description: string, count: string) => {
    return {type: 'ADD-PRODUCT', title, description, count} as const
}