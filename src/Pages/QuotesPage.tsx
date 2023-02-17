import React from "react";
import { Table } from '../Components/Table';
import { Filter } from '../Components/Filter';
import axios from 'axios';
import { IQuote, IQuoteInfo } from '../models';

interface IQuotesPage {
    quotes: IQuoteInfo[]
    loading: boolean
    eMessage: string
    priceStart: string
    priceEnd: string
}

export class QuotesPage extends React.Component<{}, IQuotesPage> {

    interval: number = 0
    test = 0

    constructor(props: {}) {
        super(props)
        this.state = {
            quotes: [],
            loading: true,
            eMessage: '',
            priceStart: '',
            priceEnd: '',
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async fetchQuotes() {
        try {
            // if (this.test % 3 === 0) throw Error('BOOM')
            const { data } = await axios.get('/public?command=returnTicker')
            const dataMap = Object.entries(data as IQuote).map(([key, obj]) => ({ ...obj, name: key }))
            this.setState({ quotes: dataMap })
            this.setState({ eMessage: '' })
        } catch (error) {
            this.setState({ eMessage: 'Произошла ошибка: ' + error })
        }
        this.setState({ loading: false })
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.fetchQuotes()

        this.interval = window.setInterval(() => {
            this.fetchQuotes();
            console.log('Get');
            // this.test++;
        }
            , 5000);
    }

    handleChangeStart = (value: string) => {
        this.setState({ priceStart: value })
        this.filter()
    }

    handleChangeEnd = (value: string) => {
        this.setState({ priceEnd: value })
        this.filter()
    }
    
    filter() {
        let dataPriceFilter = this.state.quotes
        console.log(this.state.quotes, 1);
        if (this.state.priceStart) {
            dataPriceFilter = dataPriceFilter.filter(d => Number(d.last) >= Number(this.state.priceStart))
            this.setState({ quotes: dataPriceFilter })
            console.log(dataPriceFilter, 2);
        }
        if (this.state.priceEnd) {
            dataPriceFilter = dataPriceFilter.filter(d => Number(d.last) <= Number(this.state.priceEnd))
            this.setState({ quotes: dataPriceFilter })
        }
    }

    render() {
        return (
            < div className='container flex mx-auto max-w-max pt-5' >
                <Filter handleChangeStart={this.handleChangeStart} handleChangeEnd={this.handleChangeEnd} />
                {this.state.loading && <h1>Загрузка...</h1>}
                {this.state.loading || <Table data={this.state.quotes} eMessage={this.state.eMessage} />}
            </div >
        )
    };
}