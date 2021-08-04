import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import './dropdown.css'

export default function Dropdown(props) {
  const List = (val,i) => {
    return (
      <>
       <li className=""><a className="rounded-b bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{props.list[1]}</a></li>
      </>
    )
  
  }
  return (
    <>
      <div className="">

        <div className="dropdown inline-block relative">
          <button className="bg-transparent text-gray-200 font-semibold   rounded inline-flex items-center">
            <span className="mr-1 text-base">{props.name}</span>
            
          </button>
          
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-4">
            <li className=""><a className="rounded-t bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{props.list[0]}</a></li>
            {props.list.forEach(List(val,i))}
            <li className=""><a className="rounded-b bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{props.list[2]}</a></li>
          </ul>
          
        </div>

      </div>
    </>
  )
}

