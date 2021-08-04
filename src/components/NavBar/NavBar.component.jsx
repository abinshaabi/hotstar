import React from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'
import Dropdown from './dropdown.component'


const NavBar = () => {
    
    const NavSm = () => {
        return (
            <>
               <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3 ">
                        <div className="text-white  w-6 h-6">
                                <BiMenu className="w-full h-full hover:text-gray-400"/>
                        </div>
                        <div className="w-auto">
                            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                            className="w-full h-full pb-2"
                            alt="logo" />
                        </div>
                        <button className="bg-blue-600 text-white text-xs font-semibold px-1 py-0.5 rounded hover:bg-blue-500">SUBSCRIBE</button>
                   </div>
                   <div className="text-white w-4 h-4 hover:text-gray-400">
                        <BiSearch className="w-full h-full"/>
                   </div>
                </div>
            </>
        )
    }

    const NavMd = () => {
        return (
            <>
               <div className="flex justify-between items-center ml-3 mr-2">
                   <div className="flex items-center  gap-3 ">
                        <div className="text-white w-6 h-6">
                                <BiMenu className="w-full h-full"/>
                        </div>
                        <div className="w-auto">
                            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                            className="w-full h-full pb-2"
                            alt="logo" />
                        </div>
                        <button className="bg-blue-600 text-white text-xs font-semibold px-1 py-0.5 rounded">SUBSCRIBE</button>
                   </div>
                   <div className="flex items-center gap-5">
                        <div className=" border-b-2 border-gray-600  w-60 text-white flex items-center">
                            
                            <input type="search"  
                            placeholder="Search"
                            className=" w-full bg-transparent border-none focus:outline-none"
                            />
                            
                            <BiSearch />
                        </div>
                        <div className="text-white pb-1">
                                <button className="bg-transparent text-sm">LOGIN</button>
                        </div>
                   </div>
                </div>
            </>
        )
    }


    const NavLg = () => {
        const list1 = ["Hotstar Specials", "Quix", "Star Jalsha", "Star Plus", "Star Vijay", "Asianet", "More.."]
        return (
            <>
               <div className="flex justify-between items-center ml-3 mr-2">
                   <div className="flex items-center justify-start gap-5 ">
                        <div className="text-gray-200 w-6 h-6">
                                <BiMenu className="w-full h-full"/>
                        </div>
                        <div className="w-auto">
                            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                            className="w-full h-full pb-2"
                            alt="logo" />
                        </div>
                        <Dropdown name="TV" list={list1} />
                        <Dropdown name="Movies" list={list1}/>
                        <Dropdown name="Sports" list={list1}/>
                        
                        
                   </div>
                   <div className="flex items-center gap-5">
                        <div className=" border-b border-gray-400  w-60 text-white flex items-center focus:border-blue-400">
                            
                            <input type="search"  
                            placeholder="Search"
                            className=" w-full font-medium bg-transparent border-none focus:outline-none "
                            />
                            
                            <BiSearch />
                        </div>
                        <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded">SUBSCRIBE</button>
                        <button className="bg-transparent text-sm text-gray-200 font-semibold pb-1">LOGIN</button>
                        
                   </div>
                </div>
            </>
        )
    }
    
    return (
        <>
            <nav className="px-4 py-2 bg-nav-100 lg:px-12 lg:py-4">
                <div className="md:hidden ">
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    <NavMd />
                </div>
                <div className="hidden lg:block ">
                    <NavLg />
                </div>
            </nav>
        </>
    )
}

export default NavBar
