import React from 'react';
import NavBar from '../components/NavBar/NavBar.component';

const DefaultLayout = (props) => {
    return (
        <>
            <body className="h-screen bg-nav-100">
                <NavBar />
                {props.children}
                
             
            </body>
            
        </>
    )
}

export default DefaultLayout
