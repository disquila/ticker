import React from "react";

interface IEMessageProps {
    eMessage: string
}

export class EMessage extends React.Component<IEMessageProps> {
    error = ''
    render() {
        return <tr className='bg-red-50 border-b border-gray-200 hover:bg-red-100 text-center'>
            <td colSpan={7} className='text-red-500 text-xl font-bold'> {this.props.eMessage} </td>
        </tr>
    }
}