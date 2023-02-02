export const columns = [
    {
        name: 'Валютная пара',
        title: 'name',
        type: 'string'
    }, {
        name: 'Последняя цена',
        title: 'last',
        type: 'string'
    }, {
        name: 'Ask',
        title: 'lowestAsk',
        type: 'string',
    }, {
        name: 'Bid',
        title: 'highestBid',
        type: 'custom'
    }, {
        name: 'Изменение %',
        title: 'percentChange',
        type: 'string'
    }, {
        name: 'Max',
        title: 'high24hr',
        type: 'string'
    }, {
        name: 'Min',
        title: 'low24hr',
        type: 'string'
    }];