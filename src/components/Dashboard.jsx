import React from 'react'

import Header from './Header'
import Search from './Search'

const Dashboard = () => {
    return (
        <div className='flex flex-col w-screen min-h-screen text-white bg-slate-700'>
            <Header />
            <Search />
        </div>
    )
}

export default Dashboard
