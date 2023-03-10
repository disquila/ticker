import React from "react"
import { observer } from 'mobx-react'
import quotesStore from "../Store/quotesStore"

@observer
export class Filter extends React.Component<{}> {

    handleChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        quotesStore.tempStart = +e.target.value
    }

    handleChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        quotesStore.tempEnd = +e.target.value
    }

    render() {
        return (
            <div className='mx-6 shadow-xl'>
                <h5 className="bg-blue-200 text-black uppercase font-bold text-base text-center leading-normal py-3">Поиск по цене</h5>
                <input className='px-2 py-2'
                    type="number"
                    placeholder="ОТ"
                    value={quotesStore.tempStart || ''}
                    name="priceStart"
                    onChange={this.handleChangeStart}
                />
                <input className='px-2 py-2'
                    type="number"
                    placeholder="ДО"
                    value={quotesStore.tempEnd || ''}
                    name="priceEnd"
                    onChange={this.handleChangeEnd}
                />
                <div className="py-2 px-2">
                    <button className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="button" onClick={quotesStore.filterApply}>
                        Поиск
                    </button>
                </div>
            </div>
        )
    }
}