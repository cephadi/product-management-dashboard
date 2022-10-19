import React, { useRef, useEffect } from 'react'
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg'
import { ReactComponent as PencilIcon } from '../assets/icons/pencil.svg'
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg'

import { products } from '../data/data'

const Table = () => {
    const checkboxAllRef = useRef()

    useEffect(() => {
        checkboxAllRef.current.indeterminate = true
    }, [])
    

    return (
        <table className='w-full border-b border-gray-200'>
            <thead>
                <tr className='text-sm font-medium text-gray-700 border-b border-gray-200'>
                    <td className='pl-10'>
                        <div className='flex items-center gap-x-4'>
                            <input ref={checkboxAllRef} type="checkbox" className='w-6 h-6 text-indigo-600 rounded-md border-gray-300' />
                            <span>Product Name</span>
                        </div>
                    </td>
                    <td className='py-4 px-4 text-center'>Pricing</td>
                    <td className='py-4 px-4 text-center'>Downloaded</td>
                    <td className='py-4 px-4 text-center'>Rating</td>
                    <td className='py-4 px-4 text-center'>Platforms</td>
                    <td className='py-4 pr-10 pl-4 text-center'>
                        <FilterIcon className='w-6 h-6 fill-current' />
                    </td>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => (
                    <tr key={`product-${i}`} className='hover:bg-gray-100 transition-colors group'>
                        <td className='flex gap-x-4 items-center py-4 pl-10'>
                            <input type="checkbox" className='w-6 h-6 text-indigo-600 rounded-md border-gray-300' />
                            <img src={product.imageUrl} alt={product.name} className='w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200' />
                            <div>
                                <a href={`#${product.name}`} className='text-lg font-semibold text-gray-700'>{product.name}</a>
                                <div className='font-medium text-gray-400'>{product.category}</div>
                            </div>
                        </td>
                        <td className='font-medium text-center'>${product.price}</td>
                        <td className='font-medium text-center'>{product.downloaded}</td>
                        <td className='text-center'>
                            <span className='font-medium'>{product.rating}</span>
                            <span className='text-gray-400'>/5</span>
                        </td>
                        <td>
                            <div className='flex gap-x-2 justify-center items-center'>
                                {product.platformIcons.map((Icon, j) => (
                                    <a href={`#icon-${product.name}-${j}`} className='p-2 bg-gray-200 rounded-md hover:bg-gray-300'>
                                        <Icon className='w-6 h-6' />
                                    </a>
                                ))}
                            </div>
                        </td>
                        <td>
                            <span className='inline-block w-20 group-hover:hidden'>{product.createdAt}</span>
                            <div className='hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2'>
                                <button className='p-2 hover:rounded-md hover:bg-gray-200'>
                                    <PencilIcon className='w-6 h-6 fill-current' />
                                </button>
                                <button className='p-2 hover:rounded-md hover:bg-gray-200'>
                                    <TrashIcon className='w-6 h-6 fill-current' />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table