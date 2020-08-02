import React from 'react'
import Tile from './tile.component'

const ListTiles = props => {
    const { stores, city } = props.location.state
    console.log('YAHOO');
    return (
        <div className="container">
            <h1>{`${city}'s Top 12 Ice cream stores`}</h1>
            <div className="card-deck">
                {Object.keys(stores).map(key => {
                    return <Tile data={stores[key]} key={key} />
                })}
            </div>
        </div>
    )
}

export default ListTiles
