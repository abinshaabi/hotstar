import React from 'react';
import NavBar from '../components/NavBar/NavBar.component';

const DefaultLayout = (props) => {
    return (
        <>
            <body className=" bg-nav-100 text-white">
                <NavBar />
                {props.children}
                
             
            </body>
            
        </>
    )
}

export default DefaultLayout
