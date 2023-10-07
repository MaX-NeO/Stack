import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const UserAuth = () => {
    const Token = localStorage.getItem('Token') !== null;
    const Role =  localStorage.getItem('Role') === "CUSTOMER";

    return (

        Token && Role ? <Outlet /> : <Navigate to='/login' />
    )
};
