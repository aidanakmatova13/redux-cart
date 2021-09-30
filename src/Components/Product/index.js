import React, {useState} from 'react';

const Product = () => {
    const [amount, setAmount] = useState(0)
    const addProduct = () => {
        setAmount(amount + 1)
    }
    return (
        <div className='d-flex justify-content-between'>
            <button onClick={addProduct} type="button" className="btn btn-info">В корзину</button>
            Amount: {amount}
        </div>
    );
};

export default Product;