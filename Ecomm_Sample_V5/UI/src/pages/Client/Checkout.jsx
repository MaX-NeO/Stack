import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../service/api';
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../redux/cartSlice';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ordered, setOrdered] = useState(false);
    const id = localStorage.getItem('xuserId')
    const name = localStorage.getItem('xuserName')
    const phone = localStorage.getItem('xuserPhone')
    const email = localStorage.getItem('xuserEmail')
    const address = localStorage.getItem('xuserAddress')
    const datex = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    }
    const currentdate = datex();

    const cartItems = useSelector((state) => state.cart.items);
    const productData = () => {
        const pData = cartItems.map((product) => `${product.productName} x (${product.quantity})`).join(', ');
        const pTotal = cartItems.reduce((acc, product) => acc + product.productPrice * product.quantity, 0);
        // const oDatax = cartItems.map((product)=>`{"pid":${product.pid},"quantity":${product.quantity}}`).join(', ')
        // const oData= `[${oDatax}]`
        return { pData, pTotal };
    };


    useEffect(() => {
        if (data.pTotal == 0) {
            navigate('/products')
        }
    }, [])

    const data = productData();


    // console.log(data.oData)
    const handleOrder = async () => {
        setOrdered(true);
        const orderdata = {
            uid: id,
            orderdate: currentdate,
            orderAddress: address,
            paymentMode: "cod",
            products: cartItems.map((product) => ({
                pid: product.pid,
                quantity: product.quantity,
            })),

        }
        console.log(orderdata)
        const checkstatus = await addOrder(orderdata)
        if (checkstatus.status == 200) {
            dispatch(removeAllFromCart());
            navigate('/user/order/success')
            // console.log(orderdata);
        }
        else {
            setOrdered(false);
        }

    }
    return (
        <>
            <div className='main'>
                <div className='order-data'>

                    <div className='cart-l'>
                        <div className='cart-l-1  shadow bg-white'>
                            <div className='order-element-title'>
                                Cart Items
                            </div>
                            <div className='order-element-data-l-1'>
                                {data.pData}
                            </div>
                        </div>
                        <div className='cart-l-2  shadow bg-white'>
                            <div className='order-element-title'>
                                Cart Total
                            </div>
                            <div className='order-element-data-l-2'>
                                Rs. <span className='primary'>{data.pTotal}</span>
                            </div>
                        </div>
                    </div>
                    <div className='cart-r'>
                        <div className='cart-r-1 shadow bg-white'>
                            <div className='order-element-title'>
                                Shipping Details
                            </div>
                            <div className='order-element-data-r-1'>
                                <h4>Name</h4>
                                <h3>
                                    {name}
                                </h3>
                                <h4>Phone</h4>
                                <h3>
                                    {phone}
                                </h3>
                                <h4>Email</h4>
                                <h3>
                                    {email}
                                </h3>
                            </div>
                        </div>
                        <div className='cart-r-2 shadow bg-white'>
                            <div className='order-element-title'>
                                Shipping Address
                            </div>
                            <div className='order-element-data-r-2'>
                                <h4>
                                    {address}
                                </h4>
                            </div>
                        </div>
                        <div className='cart-r-3 shadow bg-white'>
                            <div className='order-element-title'>
                                Payment Mode
                            </div>
                            <div className='order-element-data-r-3'>
                                <h4>
                                    Cash on Delivery
                                </h4>
                            </div>
                        </div>
                        <div className='cart-r-3 shadow bg-white'>
                            <div className='order-element-title'>
                                Order Date
                            </div>
                            <div className='order-element-data-r-3'>
                                <h4>
                                    {currentdate}
                                </h4>
                            </div>
                        </div>
                        <button className='bg-green white checkout-btn' onClick={handleOrder} disabled={ordered}>
                            {ordered ? 'Processing' : 'Place Order'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
