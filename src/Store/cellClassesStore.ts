import { makeAutoObservable } from 'mobx'


class CellClassesStore {
    cellClasses: string = ''
    
    constructor() {
        makeAutoObservable(this)
    }
}

export default new CellClassesStore()