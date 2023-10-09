import React, { useState, useEffect } from 'react'
import { getProduct } from '../../service/api'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token') !== 'null');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setProducts(response.data);
            setLoading(false)
        }

        catch (error) {
            console.log(error);
        }
    }
    console.log(products);
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        if (isLoggedIn) {
            dispatch(addToCart(product));
            toast.success(`${product.productName} added to cart !`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.warning(`Login to Continue`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className='main'>
            <Navbar />
            <div className='d-flex-r-g'>

                {loading ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className='card-cli'>
                            <Skeleton width={'100px'} height={'100px'} />
                            <Skeleton count={2} />
                            <Skeleton width={80} height={'15px'} />
                            <Skeleton width={40} />
                            <Skeleton width={100} height={'25px'} />
                        </div>
                    ))
                ) : (
                    products.isArray ? (
                        <h1>Checking for Products</h1>
                    ) : (
                        products.map((product) => (
                            <div key={product.pid} className='card-cli'>
                                <img src={product.productImage} className='product-cli-img' alt={product.productName} />
                                <h2 className='product-cli-text'>{product.productName}</h2>
                                <h1 className='product-cli-price'> ₹ {product.productPrice} </h1>
                                <button className='product-btn' onClick={() => handleAdd(product)}>
                                    Add to cart
                                </button>
                            </div>
                        ))
                    )
                )
                }

            </div>

            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
export default Products;
