import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {Modal} from '../Modal/Modal';
import s from './CatalogPage.module.css'
import {connect, useDispatch} from 'react-redux';
import {
    addProductAC,
    filterTitleAC,
    deleteProductAC,
    ProductType,
    filterCountAC,
} from '../../store/products-reducer';
import {AppRootStateType} from '../../store/store';
import {compose} from 'redux';

export type CatalogPagePropsType = {
    products: Array<ProductType>
    addProductAC: (title: string, description: string, count: string) => string
    filterTitleAC: (value: string) => string
    deleteProductAC: (id: number) => number
    filterCountAC: (value: string) => string
}

const CatalogPage = (props: CatalogPagePropsType) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const dispatch = useDispatch()

    const deleteProduct = (id: number) => {
        dispatch(props.deleteProductAC(id))
    }

    const addProduct = (title: string, description: string, count: string) => {
        dispatch(props.addProductAC(title, description, count))
    }

    const changeFilter = (value: string) => {
        if (value === 'title') {
            dispatch(props.filterTitleAC(value))
        } else if (value === 'count') {
            dispatch(props.filterCountAC(value))
        }
    }

    let ProductsCards = props.products.map(p => {
        return (
            <div key={p.id}>
                <div>
                    <img src={p.imageUrl} alt="avatar"
                         className={s.img}/>
                </div>
                <div>
                    <h2>
                        {p.title}
                        <button title="Видалити товар" onClick={() => deleteProduct(p.id)}>Х</button>
                    </h2>
                    <div>
                        Короткий опис товару: <br/>
                        {p.description}
                        <div>
                            Розміри:
                            <ul>
                                <li>{p.size.weight}</li>
                                <li>{p.size.width}</li>
                                <li>{p.size.height}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        Кількість товарів в наявності: {p.count}
                    </div>
                    <div>
                        Кольори, які є в наявності: {p.color}
                    </div>
                    <div>
                        <NavLink to={p.title}> Детальніше </NavLink>
                    </div>
                </div>
            </div>
        )
    })

    return <div>
        <Modal active={modalActive} setActive={setModalActive} addProduct={addProduct}/>
        <h1>Каталог товарів</h1>
        <div>
            <button onClick={() => setModalActive(true)}>Додати товар</button>
        </div>
        <div>
            <select onChange={(e) => changeFilter(e.target.value)}>
                <option value="sort">
                    Сортувати за
                </option>
                <option value="title">По назві</option>
                <option value="count">По кількості товару</option>
            </select>
        </div>
        <div>
            {ProductsCards}
        </div>
    </div>
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        products: state.products
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addProductAC,
        filterTitleAC,
        deleteProductAC,
        filterCountAC
    }),
) (CatalogPage)

