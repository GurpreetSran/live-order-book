import React from 'react';
import uuid from 'uuid';
import { mergeOrders }  from './utils';

const OrderBook = ({orderBook}) =>  {
    
    const buyBook = orderBook.filter(order => order.type === 'buy');
    const sellBook = orderBook.filter(order => order.type === 'sell')    
    
    const sellMergedOrders = mergeOrders(sellBook);
    const buyMergedOrders = mergeOrders(buyBook);

    const sortedBuy = buyMergedOrders.sort((a, b) => b - a).reverse();

    return (
        <div className="orderbook">
            <div className="buy">
                Buy
                {
                    sortedBuy.map((order) => 
                        <p key={uuid()}>
                            <span>{order.orderQuantity} kg</span>
                            {' for '}
                            <span>£ {order.price}</span>
                            
                            
                        </p>
                    )
                }
            </div>

            <div className="sell">     
                Sell
                {
                    sellMergedOrders.map((order) => 
                    <p key={uuid()}>
                        <span>{order.orderQuantity} kg</span>
                            {' for '}
                        <span>£ {order.price}</span>
                    </p>
                    )
                }
            </div>
        </div>
    )
}

export default OrderBook;