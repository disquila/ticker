import React from "react"
import { IIdModel } from "../models"
import { THead } from "./THead"
import { TBody } from "./TBody"

interface ITableProps<D extends IIdModel> {
    data: D[]
    eMessage: string
}

export class Table<D extends IIdModel> extends React.Component<ITableProps<D>> {
    render() {
        return <table className='min-w-max table-auto shadow-xl'>
            <THead />
            <TBody data={this.props.data} eMessage={this.props.eMessage} />
        </table>
    }
}