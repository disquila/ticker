import React from "react";
import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='h-[50px] flex justify-between items-center px-5 bg-blue-400 text-white'>
            <span className='text-2xl font-bold'>Quotes Spy</span>

            <span>
                <Link to='/' className='mr-2 text-lg font-semibold'>Main</Link>
                <Link to='/quotes' className='text-lg font-semibold'>Quotes</Link>
            </span>
        </nav>
    )
}