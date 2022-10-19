import React from 'react'
import Logo from '../assets/images/logo.png'
import { sidebar } from '../data/data'

const Sidebar = () => {
    return (
        <aside className='py-6 px-10 w-64 border-r-2 border-gray-200'>
            <img src={Logo} alt="Logo YCC" className="w-28" />
            {sidebar.map((group, i) => (
                <ul key={`group-${i}`} className='flex flex-col gap-y-6 pt-20'>
                {group.map((item, j) => (
                    <li key={`menu-${j}`}>
                        <a href="#abc" className={(j === 0 && i === 0) ? 'menu--active-text' : 'flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group'}>
                            <span className={(j === 0 && i === 0) ? 'menu--active' : 'absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out'} />
                            <item.icon />
                            <span>{item.name}</span>
                        </a>
                    </li>
                ))}
                </ul>
            ))}
        </aside>
    )
}

export default Sidebar