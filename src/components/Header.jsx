import React from 'react'

const Header = () => {
    return (
        <div>
             <div className="text-3xl font-bold bg-slate-500 p-4 w-screen text-center cursor-pointer" onClick={()=>window.location.href="/"}>My Movie Library</div>
        </div>
    )
}

export default Header
