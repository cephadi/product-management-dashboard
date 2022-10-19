import React from 'react'
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg'
import { status } from '../data/data'
import Pagination from './Pagination'
import Table from './Table'

const Main = () => {
  return (
    <main className='flex-1 pb-8'>
        <div className='flex items-center justify-between py-7 px-10'>
            <div>
                <h1 className='text-2xl font-semibold leading-relaxed text-gray-800'>Products</h1>
                <p className='text-sm font-medium text-gray-500'>Let's grow to your business! Create your product and upload here</p>
            </div>
            <button className='inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1'>
                <PlusIcon className='w-6 h-6 fill-current' />
                <span className='text-sm font-semibold tracking-wide'>Create Item</span>
            </button>
        </div>

        <ul className='flex justify-between items-center px-4 border-y border-gray-200'>
            {status.map((item, i) => (
                <li key={`status-${i}`}>
                    <button className='flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group'>
                        <item.icon className='w-6 h-6 fill-current' />
                        <span className='font-medium'>{item.name}</span>
                        <span className='absolute w-full h-0.5 bg-indigo-600 rounded left-3 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out' />
                    </button>
                </li>
            ))}
        </ul>

        <Table />
        <Pagination />
    </main>
  )
}

export default Main