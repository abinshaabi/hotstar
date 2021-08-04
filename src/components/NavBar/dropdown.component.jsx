import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import './dropdown.css'

export default function Dropdown(props) {

  const abc = props.list.filter((item, index) => {if (!(index===0||index===(props.list.length-1))) return item }  )
  console.log(abc); //{if ( !(index===0||index===(props.list.length-1)) ) return item }
  
  return (
    <>
      <div className="">

        <div className="dropdown inline-block relative">
          <a className="bg-transparent text-gray-200 font-semibold  cursor-pointer rounded inline-flex items-center">
            <span className="mr-1 text-base">{props.name}</span>
            
          </a>
          
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-4">
            <li className=""><a className="rounded-t bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{props.list[0]}</a></li>

            {abc.map((item) => (
              <li className=""><a className="bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{item}</a></li>

            ))}
            
            <li className=""><a className="rounded-b bg-nav-200 text-sm text-gray-200 hover:bg-nav-300 py-2 px-4 block whitespace-nowrap" href="#">{props.list[props.list.length-1]}</a></li>
          </ul>
          
        </div>

      </div>
    </>
  )
}

