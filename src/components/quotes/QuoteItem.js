import React from 'react'

const QuoteItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front center">
                   <h1> {item.content}</h1>
                </div>
                <div className="card-back  center">
    <h1 >{item.character.firstname} {item.character.lastname}</h1>
                </div>
            </div>
            
        </div>
    )
}
export default QuoteItem;
