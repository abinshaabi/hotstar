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
        const TV = ["Hotstar Specials", "Quix", "Star Jalsha", "Star Plus", "Star Vijay", "Asianet", "More.."]
        const Movies = ["Hindi", "Bengali", "Telugu", "Malayalam", "Tamil", "Marathi", "English", "Kannada"]
        const Sports = ["Cricket", "Football", "Formula-1", "eSports", "Tennis", "Formula-E", "Martial Arts", "Basketball",
                        "Badminton", "Hockey", "Athletics", "Golf", "Wrestling", "Kabaddi"]
        return (
            <>
               <div className="flex justify-between items-center ml-3 mr-2">
                   <div className="flex items-center justify-start gap-6 ">
                        <div className="text-gray-200 w-6 h-6">
                                <BiMenu className="w-full h-full cursor-pointer"/>
                        </div>
                        <div className="w-auto">
                            <a href="/">
                                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" 
                            className="w-full h-full pb-2 cursor-pointer"
                            alt="logo" href="/mov" />
                            </a>
                        </div>
                        <Dropdown name="TV" list={TV} />
                        <Dropdown name="Movies" list={Movies}/>
                        <Dropdown name="Sports" list={Sports}/>
                        <a href="/" className="text-gray-200 font-semibold  cursor-pointer">Premium</a>
                        <div className="flex flex-col items-center  cursor-pointer">
                            <h1 href="/" className="mt-2 text-gray-200 font-semibold ">Disney+</h1>
                            <div className=" w-5 ">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCA3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCA3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFGODBFMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yLjIsN1YyLjhMNC44LDdoMS4zVjAuNkg0Ljh2NC4yTDIuMiwwLjZIMC45VjdIMi4yeiBNMTEuNiw3VjUuOWgtM1Y0LjJoMi41di0xSDguNlYxLjdoM1YwLjZINy4zVjdIMTEuNnoKCSBNMTQuNyw3bDEtNC4zbDEsNC4zaDEuM2wxLjQtNi40aC0xLjNsLTAuOSw0LjZsLTEtNC42aC0xLjFsLTEuMSw0LjVsLTAuOS00LjVoLTEuM0wxMy4zLDdIMTQuN3oiLz4KPC9zdmc+Cg==" 
                                alt="new" className=" w-full  object-cover" />
                            </div>
                            
                        </div>
                        <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="kids" />
                        
                        
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
