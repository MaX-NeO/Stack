import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import UserLeftbar from './Layout/UserLeftbar';
import { Footer } from '../../components/Footer';

const UserPanel = () => {

    let uname = localStorage.getItem('xuserName');

    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        let greeting = '';
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good morning !';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Good afternoon !';
        } else {
            greeting = 'Good evening !';
        }

        setTimeOfDay(greeting);
    }, []);

    return (
        <>
            <Navbar />
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                {timeOfDay}
                </div>

                <div className='user-data-display'>
                    <div className='user-profile-container'>


                        <div className="content-profile">
                            <h2 className="text-shadows-profile">{uname}</h2>
                        </div>

                        <h4 className=''>Welcome back !</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserPanel;
