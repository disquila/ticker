import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { IQuote, IQuoteInfo } from '../models'

class QuotesStore {
    quotes: IQuoteInfo[] = []
    loading: boolean = true
    eMessage: string = ''
    interval: number = 0
    tempStart?: number
    tempEnd?: number
    priceStart?: number
    priceEnd?: number

    constructor() {
        makeAutoObservable(this)
    }

    stopLoading() {
        clearInterval(this.interval);
    }

    async fetchQuotes() {
        try {
            // if (this.test % 3 === 0) throw Error('BOOM')
            const { data } = await axios.get('/public?command=returnTicker')
            const dataMap = Object.entries(data as IQuote).map(([key, obj]) => ({ ...obj, name: key }))
            runInAction(() => {
                if (this.priceStart || this.priceEnd) {
                    this.quotes = dataMap.filter(this.filterPriceRange)
                } else {
                    this.quotes = dataMap
                }
                this.eMessage = ''
            })
        } catch (error) {
            runInAction(() => {
                this.eMessage = 'Произошла ошибка: ' + error
            })
        }
        runInAction(() => {
            this.loading = false
        })
    }

    startLoading() {
        this.loading = true
        this.fetchQuotes()

        this.interval = window.setInterval(() => {
            this.fetchQuotes()
            console.log('Get')
            // this.test++;
        }
            , 5000);
    }


    filterApply = () => {
        this.priceStart = this.tempStart
        this.priceEnd = this.tempEnd
        this.fetchQuotes()
    }

    filterPriceRange = (quote: IQuoteInfo) => {
        return (this.priceStart ? (this.priceStart <= +quote.last) : true) && (this.priceEnd ? (this.priceEnd >= +quote.last) : true)
    }
}

export default new QuotesStore()