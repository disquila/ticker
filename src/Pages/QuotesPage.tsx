import React from "react"
import { Table } from '../Components/Table'
import { Filter } from '../Components/Filter'
import { observer } from 'mobx-react'
import fetchQuotesStore from "../Store/fetchQuotesStore"

@observer
export class QuotesPage extends React.Component<{}> {

    componentWillUnmount() {
        fetchQuotesStore.stopLoading()
    }

    componentDidMount() {
        fetchQuotesStore.startLoading()
    }

    render() {
        return (
            < div className='container flex mx-auto max-w-max pt-5' >
                <Filter />
                {fetchQuotesStore.loading && <h1>Загрузка...</h1>}
                {fetchQuotesStore.loading || <Table data={fetchQuotesStore.quotes} eMessage={fetchQuotesStore.eMessage} />}
            </div >
        )
    };
}