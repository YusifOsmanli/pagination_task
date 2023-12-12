import React from 'react'
import Item from './Item'

const List = ({ data }) => {
    return (
        <div className='container'>
            <div className='row'>
               
                    {
                        data.map((item, index) => {
                            return (
                                <div className='col-3 mb-5 cards' key={index}><Item item={item} /></div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default List