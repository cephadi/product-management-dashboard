import React from 'react'
import { ReactComponent as ChevronLeftIcon } from '../assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from '../assets/icons/chevron-right.svg'

const Pagination = () => {
  return (
    <div className='flex gap-x-2 justify-center pt-8'>
        <button className='flex justify-center items-center w-8 h-8'>
            <ChevronLeftIcon className='w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600' />
        </button>
        {new Array(6).fill(1).map((btn, i) => (
            <button className={`flex items-center justify-center w-8 h-8 font-medium rounded-full ${i === 0 ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-indigo-600'}`}>
                {i+1}
            </button>
        ))}
        <button className='flex justify-center items-center w-8 h-8'>
            <ChevronRightIcon className='w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600' />
        </button>
    </div>
  )
}

export default Pagination