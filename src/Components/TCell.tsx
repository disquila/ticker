import { observer } from "mobx-react"
import React from "react"
import cellClassesStore from "../Store/cellClassesStore"

interface ITCellProps<E = any> {
    cell: E
}

@observer
export class TCell extends React.Component<ITCellProps> {

    cellClasses: string = ''

    componentDidUpdate(prevProps: any) {
        if ((prevProps.cell) > (this.props.cell)) {
            cellClassesStore.cellClasses = 'text-red-500 font-bold'
        } else if ((prevProps.cell) < (this.props.cell)) {
            cellClassesStore.cellClasses = 'text-green-500 font-bold'
        }
        this.cellClasses = cellClassesStore.cellClasses
    }

    render() {
        return <td className={this.cellClasses}>
            {this.props.cell}
        </td >
    }
}