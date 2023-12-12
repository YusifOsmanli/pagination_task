import React from 'react'

const Item = ({item}) => {
    return (
        <div className="card" style={{width: "18rem", height:"400px"}}>
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.body.slice(0,80)}</p>
                </div>
        </div>
    )
}

export default Item