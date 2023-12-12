import React from 'react'

const Header = ({ handleSearch }) => {
    return (
        <nav className='navbar'>
            <h1>Comments</h1>
            <input className="input" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                handleSearch(e)
            }} />
        </nav>
    )
}

export default Header