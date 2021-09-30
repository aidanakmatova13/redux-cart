import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const data = [
        {
            "id": 1,
            "title": "Mushroom - Chanterelle, Dry",
            "price": "4.32",
            "description": "Traumatic subcutaneous emphysema, initial encounter",
            "amount": 1,
            "images": "http://dummyimage.com/235x100.png/cc0000/ffffff"
        },
        {
            "id": 2,
            "title": "Soup - Campbells, Creamy",
            "price": "1.13",
            "description": "Hemiplegia, unspecified affecting left dominant side",
            "amount": 2,
            "images": "http://dummyimage.com/222x100.png/5fa2dd/ffffff"
        },
        {
            "id": 3,
            "title": "Beer - Maudite",
            "price": "9.42",
            "description": "Obstructed labor due to malpos and malpresent, unsp, fetus 2",
            "amount": 3,
            "images": "http://dummyimage.com/173x100.png/ff4444/ffffff"
        },
        {
            "id": 4,
            "title": "Juice - Lagoon Mango",
            "price": "2.38",
            "description": "Personal history of oth (corrected) congenital malformations",
            "amount": 4,
            "images": "http://dummyimage.com/179x100.png/5fa2dd/ffffff"
        }
    ]
    const dispatch = useDispatch()
    const catalog = useSelector(store => store.catalog)

    useEffect(() => {
        dispatch({type: 'GET_CATALOG', payload: data})
    }, [data, dispatch])

    return (
        <Layout>
            <div className='container'>
                <div className='row mt-3'>
                    {
                        catalog.map(product =>
                            <div className='col-md-3 mb-5' key={product.id}>
                                <img src={product.images} width='200' height='100' alt=""/>
                                <h5>{product.title}</h5>
                                <p>{product.price}$</p>
                                <button className='btn-info'
                                        onClick={() => dispatch({type: 'ADD_TO_CART', payload: product})}>
                                    В корзину
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    );
};


export default Home;