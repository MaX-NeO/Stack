import React from 'react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Topbar/>
        <Leftbar/>
    </div>
    </>
  )
}

export default Layout