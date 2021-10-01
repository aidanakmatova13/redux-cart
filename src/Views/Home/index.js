import React, {useEffect} from 'react';
import Layout from "../../Components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getCatalog} from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch()
    const catalog = useSelector(s => s.catalog)

    useEffect(() => {
        dispatch(getCatalog())
    }, [dispatch])

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