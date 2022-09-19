import React from 'react'
import PropTypes from 'prop-types'



function ProductDetail({ name, unitPrice, stock, status, calc }) {

    return (<>
        <h3>Name: {name}</h3>
        <div>
            <span>Price: {unitPrice}</span>
        </div>
        <div>
            <span>Stock: {stock}</span>
        </div>
        <div>
            <span>Status: {status}</span>
        </div>
        <div>
            <button onClick={() => calc()}>Calc Price</button>
        </div>
    </>
    )
}


const calcTax = () => {
    console.log('Calc Tax');
}

ProductDetail.defaultProps = {
    unitPrice: 5000,
    calc: calcTax
}


ProductDetail.propTypes = {
    name: PropTypes.string.isRequired,
    unitPrice : PropTypes.number,
    stock: PropTypes.number.isRequired,
    status: PropTypes.bool,
    calc: PropTypes.func
}

export default ProductDetail