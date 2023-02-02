import React from "react";
import { TCell } from "./TCell";
import { columns } from '../Data/THeadData'
import { IIdModel, IQuote, IQuoteInfo } from "../models"
import { Quote } from "./Quote";


interface ITRowProps<R extends IIdModel> {
    row: R
}

export class TRow<R extends IIdModel> extends React.Component<ITRowProps<R>> {

    render() {
        let cells = []
        cells = columns.map(column => column.title as keyof R)
        return <tr className='even:bg-blue-100 border-b border-gray-200 hover:bg-gray-100 py-3 px-6 text-center'>
            {cells.map((cell, i) => <TCell cell={this.props.row[cell]} key={i} />)}
        </tr>
    }
}