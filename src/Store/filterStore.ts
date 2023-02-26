import { makeAutoObservable } from 'mobx'


class FilterStore {
    priceStart?: number
    priceEnd?: number
    
    constructor() {
        makeAutoObservable(this)
    }
}

export default new FilterStore()