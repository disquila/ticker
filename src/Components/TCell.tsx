import React from "react";

interface ITCellProps<E = any> {
    cell: E
}

export class TCell extends React.Component<ITCellProps, { cellClasses: string }> {

    constructor(cell: ITCellProps) {
        super(cell)
        this.state = {
            cellClasses: ''
        }
    }

    componentDidUpdate(prevProps: any) {
        if ((prevProps.cell) > (this.props.cell)) {
            this.setState({ cellClasses: 'text-red-500 font-bold' })
        } else if ((prevProps.cell) < (this.props.cell)) {
            this.setState({ cellClasses: 'text-green-500 font-bold' })
        }
    }

    render() {
        return <td className={this.state.cellClasses}>
            {this.props.cell}
        </td >
    }
}