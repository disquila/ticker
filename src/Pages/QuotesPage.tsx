import React from "react";
import { Table } from '../Components/Table';
import axios from 'axios';
import { IQuote, IQuoteInfo } from '../models';

interface IQuotesPage {
    quotes: IQuoteInfo[]
    loading: boolean
    eMessage: string
}

export class QuotesPage extends React.Component<{}, IQuotesPage> {

    interval: number = 0
    test = 0

    constructor(props: {}) {
        super(props)
        this.state = {
            quotes: [],
            loading: true,
            eMessage: ''
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

    render() {
        return (
            < div className='container mx-auto max-w-max pt-5' >
                {this.state.loading && <p>Загрузка...</p>}
                {this.state.loading || <Table data={this.state.quotes} eMessage={this.state.eMessage} />}
            </div >
        )
    };
}