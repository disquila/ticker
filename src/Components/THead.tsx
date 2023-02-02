import React from "react";
import { columns } from '../Data/THeadData'


export class THead extends React.Component {
    render() {
        return <thead className='bg-blue-200 text-black uppercase text-base leading-normal'>
            <tr>
                {columns.map(column => <th className='py-3 px-6 text-center' key={column.name}>{column.name}</th>)}
            </tr>
        </thead>
    }
}