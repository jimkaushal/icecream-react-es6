import React from 'react'
import './tiles.css'

const Tile = ({ data }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={data.imageUrl} alt="store" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.address}</p>
                <p className="card-text">
                    <small className="text-muted">Rating {data.rating}</small>
                    <br />
                    <small>
                        {Array.isArray(data.reviews)
                            ? data.reviews[0].text
                            : null}
                    </small>
                </p>
            </div>
        </div>
    )
}

export default Tile
