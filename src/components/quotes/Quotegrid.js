import React from 'react'
import QuoteItem from './QuoteItem'
import Spinner from '../ui/Spinner'

const Quotegrid = ({items,isLoading}) => {
    return isLoading ? (<Spinner/>):(<section  className="cards">
        {items.map(item=>(
            <QuoteItem key={item._id} item={item}></QuoteItem>
        ))}
            

        
    </section>)
    
}

export default Quotegrid
