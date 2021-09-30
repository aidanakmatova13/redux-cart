import React, {useState} from 'react';
import Layout from "../../Components/Layout";
import {useSelector, useDispatch} from "react-redux";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    const [counter, setCounter] = useState(0)
    const increase = () => {

    }

    return (
        <Layout>
            <div className='container'>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map(el =>
                        <tr>
                            <td>{el.title}</td>
                            <td>{el.price}$</td>
                            <td>
                                <button className='btn-danger'
                                        onClick={() => dispatch({type: 'DECREASE_TO_ONE', payload: el})}>-
                                </button>
                                {el.quantity}
                                <button className='btn-primary'
                                        onClick={() => dispatch({type: 'ADD_TO_CART', payload: el})}>+
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-danger'
                                        onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: el.id})}>Удалить
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
            </div>
        </Layout>
    );
};

export default Cart;