import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import UserLeftbar from './Layout/UserLeftbar';
import { Footer } from '../../components/Footer';
import { getUserOrders } from '../../service/api';

const UserPanel = () => {
    const [orders, setOrders] = useState([]);
    
    let uid = localStorage.getItem('xuserId');

    const fetchOrders = async () => {
        try {
            const response = await getUserOrders(uid);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching user orders:", error);
        }
    }
    console.log(orders)
    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Order History
                </div>
                <div className='shadow bg-white data-table-container'>
                    <table className='data-table'>
                        <thead className='data-table-thead shadow'>
                            <tr>
                                <th>Date</th>
                                <th>Products</th>
                                <th>Deliver Location</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(orders) && orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.oid}>
                                        <td>{order.orderDate}</td>
                                        <td>{ order.products.map((product) => product.productName).join(', ')}</td>
                                        <td>{order.orderAddress}</td>
                                        <td>{order.orderTotal}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No orders found.</td>
                                </tr>
                            )
                            
                            
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserPanel;
