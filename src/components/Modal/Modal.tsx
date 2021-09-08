import React from 'react';
import './Modal.css'

type ModalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    addProduct: (title: string, description: string, count: string) => void
}

export const Modal = (props: ModalPropsType) => {

    const newTitle = React.createRef<HTMLInputElement>()
    const newDescription = React.createRef<HTMLInputElement>()
    const newCount = React.createRef<HTMLInputElement>()

    const setActiveModal = () => props.setActive(!props.active)

    const addProduct = () => {
        if (newTitle.current && newDescription.current && newCount.current) {
            props.addProduct(newTitle.current.value, newDescription.current.value, newCount.current.value)
        }
        props.setActive(false)
    }

    const cancelAdding = () => {
        props.setActive(false)
    }


    return (
        <div className={props.active ? 'modal active' : 'modal'}
             onClick={setActiveModal}>
            <div className={props.active ? 'modal_content active' : 'modal_content'}
                 onClick={(e) => e.stopPropagation()}>
                <h1>Добавте новий продукт</h1>
                <div>
                    <input ref={newTitle} placeholder={'Назва товару'}/>
                </div>
                <div>
                    <input ref={newDescription} placeholder={'Опис товару'}/>
                </div>
                <div>
                    <input type={'number'} ref={newCount} placeholder={'Кількість'}/>
                </div>
                <div>
                    <button onClick={addProduct}>Додати товар</button>
                    <button onClick={cancelAdding}>Відмінити</button>
                </div>
            </div>
        </div>
    )
}

