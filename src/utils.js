export function mergeOrders(orderBook) { 

const groupByPrice = orderBook.reduce(function (r, a) {
      r[a.price] = r[a.price] || [];
      r[a.price].push(a);
      return r;
}, {});   
  
  const convertToArray = Object.keys(groupByPrice).map(order => groupByPrice[order]);
  
  const combinedOrders = convertToArray.map(order => { 
    const userId = [];	
  
      return order.reduce((acc, currtVal) => {
          userId.push(currtVal.id)	
          
          return {
            price: Number(acc.price) + Number(currtVal.price),
            userId: userId,
            orderQuantity: Number(acc.orderQuantity) + Number(currtVal.orderQuantity)
        }; 
      },
      {
        price: 0,
        userId: [],
        orderQuantity: 0
      });
  });
  
  return combinedOrders;
}

