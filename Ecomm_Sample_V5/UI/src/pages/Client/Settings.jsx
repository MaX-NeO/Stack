import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import UserLeftbar from './Layout/UserLeftbar'
import { Footer } from '../../components/Footer'
import { editUser } from '../../service/api'
import CryptoJS from 'crypto-js'

export const Settings = () => {

    const uid = localStorage.getItem('xuserId')
    const [editData, setEditData] = useState({
        name: localStorage.getItem('xuserName'),
        phone: localStorage.getItem('xuserPhone'),
        email: localStorage.getItem('xuserEmail'),
        address: localStorage.getItem('xuserAddress'),
        isEnabled: 'true'
    })
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleSave = async () => {
        console.log(editData)
        await editUser(uid, editData)
        localStorage.setItem('xuserName', editData.name);
        localStorage.setItem('xuserPhone', editData.phone);
        localStorage.setItem('xuserAddress', editData.address);
        setEdit(!edit)

    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditData({ ...editData, [e.target.id]: e.target.value })
    }
    return (
        <div className='mainx'>
            <Navbar />
            <UserLeftbar />
            <div className='titlebar'>
                Account Settings
            </div>
            <div className='user-data-edit shadow'>
                {edit ?
                    <div className='user-data-display'>

                        <div className='user-data-display-action'>
                            <h1 className='user-data-display-title'>Edit Details</h1>
                            <button onClick={handleSave} className='save-action-btn bg-green white'>Save</button>
                        </div>
                        <div className='user-data-container'>

                            <div className='user-data-display-l mt-4'>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Name </h4>
                                    <input type="text" name="Name" id="name" value={editData.name} className='data-input bg-secondary-input black' onChange={handleChange} />

                                </div>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Phone </h4>
                                    <input type="text" name="Phone" id="phone" value={editData.phone} className='data-input bg-secondary-input black' onChange={handleChange} />

                                </div>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Email (Can't Change Email)</h4>
                                    <input type="text" name="Email" id="email" value={editData.email} className='data-input bg-secondary-input black' readOnly />

                                </div>
                            </div>
                            <div className='user-data-display-r mt-4'>

                                <div className='ydata-container'>
                                    <h4 className='x-title primary'> Address </h4>
                                    <textarea className='data-input bg-secondary-input black' rows='9' value={editData.address} onChange={handleChange} id='address' />
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='user-data-display'>

                        <div className='user-data-display-action'>
                            <h1 className='user-data-display-title'>Welcome <span className='primary pl-1'> {editData.name} </span> !</h1>
                            <button onClick={handleEdit} className='edit-action-btn bg-primary white'>Edit</button>
                        </div>

                        <div className='user-data-container'>

                            <div className='user-data-display-l mt-4'>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Name </h4>
                                    <h1 className='x-data'>{editData.name}</h1>
                                </div>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Phone </h4>
                                    <h1 className='x-data'>{editData.phone}</h1>
                                </div>
                                <div className='xdata-container'>
                                    <h4 className='x-title primary'> Email </h4>
                                    <h1 className='x-data'>{editData.email}</h1>
                                </div>
                            </div>
                            <div className='user-data-display-r mt-4'>

                                <div className='ydata-container'>
                                    <h4 className='x-title primary'> Address </h4>
                                    <h1 className='y-data'>{editData.address}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}
