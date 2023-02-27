import { observer } from "mobx-react"
import React from "react"

interface ITCellProps<E = any> {
    cell: E
}

@observer
export class TCell extends React.Component<ITCellProps> {

    cellClasses: string = ''

    componentDidUpdate(prevProps: any) {
        this.cellClasses = prevProps.cell > this.props.cell ? 'text-red-500 font-bold' : 'text-green-500 font-bold'
    }

    render() {
        return <td className={this.cellClasses}>
            {this.props.cell}
        </td >
    }
}