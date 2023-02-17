import React from "react";
import { IQuoteInfo } from '../models';


interface IFilterProps {
    handleChangeStart: Function
    handleChangeEnd: Function
}

interface IFilter {
    priceStart: string
    priceEnd: string
}

export class Filter extends React.Component<IFilterProps, IFilter> {

    constructor(props: IFilterProps) {
        super(props)
        this.state = {
            priceStart: '',
            priceEnd: ''
        }
    }

    handleChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ priceStart: e.target.value })
    }

    handleChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ priceEnd: e.target.value })
    }

    render() {
        return (
            <div className='mx-6 shadow-xl'>
                <h5 className="bg-blue-200 text-black uppercase font-bold text-base text-center leading-normal py-3">Поиск по цене</h5>
                <input className='px-2 py-2'
                    type="number"
                    placeholder="ОТ"
                    value={this.state.priceStart}
                    name="priceStart"
                    onChange={this.handleChangeStart}
                />
                <input className='px-2 py-2'
                    type="number"
                    placeholder="ДО"
                    value={this.state.priceEnd}
                    name="priceEnd"
                    onChange={this.handleChangeEnd}
                />
                <div className="py-2 px-2">
                    <button className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="button" onClick={() => {
                        this.props.handleChangeStart(this.state.priceStart)
                        this.props.handleChangeEnd(this.state.priceEnd)
                    }}>
                        Поиск
                    </button>
                </div>
            </div>
        )
    }
}