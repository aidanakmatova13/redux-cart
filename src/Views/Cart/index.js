import React from 'react';
import Layout from "../../Components/Layout";
import {useSelector, useDispatch} from "react-redux";
import './style.css'
import {addCatalog, delCatalog} from "../../redux/actions";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)

    return (
        <Layout>
            <div className='container'>
                {
                    cart.length ? <>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Название</th>
                                    <th scope="col">Описание</th>
                                    <th scope="col">Цена</th>
                                    <th scope="col">Количество</th>
                                    <th scope="col">Удалить</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cart.map(el =>
                                    <tr>
                                        <td>{el.title}</td>
                                        <td>{el.description}</td>
                                        <td>{el.price}$</td>
                                        <td>
                                            <button className='btn-danger'
                                                    onClick={() => dispatch(delCatalog(el))}>-
                                            </button>
                                            {el.quantity}
                                            <button className='btn-primary'
                                                    onClick={() => dispatch(addCatalog(el))}>+
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger'
                                                    onClick={() => dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: el.id
                                                    })}>Удалить
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <h5>Итого:
                                {
                                    cart.reduce((acc, el) => {
                                        return (el.price * el.quantity) + acc
                                    }, 0).toFixed(2)
                                }
                            </h5>
                        </>
                        : <h3 className='error-cart mt-4'>
                            Корзина пуста!
                        </h3>
                }
            </div>
        </Layout>
    );
};

export default Cart;