import React from "react";
import { IIdModel } from "../models";
import { TRow } from "./TRow"
import { EMessage } from "./eMessage";

interface ITableProps<D extends IIdModel> {
    data: D[]
    eMessage: string
}

export class TBody<D extends IIdModel> extends React.Component<ITableProps<D>> {
    render() {
        return <tbody className='text-black text-base font-normal'>
            {this.props.eMessage && <EMessage eMessage={this.props.eMessage} />}
            {this.props.data.map(row => <TRow row={row} key={row.id} />)}
        </tbody>
    }
}