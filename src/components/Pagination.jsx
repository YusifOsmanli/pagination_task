import React from 'react'

const Pagination = ({ data, perPage, setCurrentPage, currentPage }) => {
    let pages = []
    for (let index = 0; index < Math.ceil(data.length / perPage); index++) {
        pages.push(index)

    }
    return (
        <div className='btn'>{
            pages.map((page, index) => {
                return (
                    
                        <button key={index} className={index + 1 == currentPage ? 'active' : 'passive'} onClick={() => {
                            setCurrentPage(index + 1)
                        }}>{index + 1}</button>
                    
                )
            })
        }</div>
    )
}

export default Pagination