import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Github } from 'lucide-react'
const Home = () => {
    const nav = useNavigate()

    const routeProducts = () => {
        nav('/products')
    }


    return (

        <div className='main'>
            <Navbar />

            <div className='home-container'>
                <div className='home-l'>
                    <p className='home-title primary'>M4X Store </p>
                    <p className='home-data'>
                        Sample Home Content... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                    </p>
                </div>
                <div className='home-r'>
                    {/* <img src='https://ik.imagekit.io/nodehive/hive/illustratorx/Startup_SVG_css.svg' className='home-r-img'/> */}


                    <div className="cardx-grid">
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category ">Category</p>
                                <h3 className="cardx__heading">Example Category</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Category</p>
                                <h3 className="cardx__heading">Example Category</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Category</p>
                                <h3 className="cardx__heading">Example Category</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575500221017-ea5e7b7d0e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Category</p>
                                <h3 className="cardx__heading">Example Category</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="social-container">
                <Link to='https://www.facebook.com'>
                    <Facebook color="#004cff" />
                </Link>
                <Link to='https://www.instagram.com'>
                    <Instagram color="#ff0059" />
                </Link>
                <Link to='https://www.github.com'>
                    <Github color="#000000" />
                </Link>
            </div>
            <Footer />
        </div>
    )
}
export default Home;
