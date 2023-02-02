export interface IQuoteInfo extends IIdModel {
    name: string
    // id: number
    last: string
    lowestAsk: string
    highestBid: string
    percentChange: string
    baseVolume: string
    quoteVolume: string
    isFrozen: string
    postOnly: string
    high24hr: string
    low24hr: string
}

export interface IQuote {
    [key: string]: IQuoteInfo
}

export interface IIdModel {
    id: number
}

export type Test = [key: string, obj: IQuoteInfo][]