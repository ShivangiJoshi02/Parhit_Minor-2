import React, { } from "react";
import Logo from "../img/PARHIT.png";
import { NavLink, Link } from "react-router-dom";



const DBLeftSection=()=>{
    return <div className="h-full py-full flex flex-col bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-8 px-12" >
       
        <hr/>
        <ul className="flex flex-col gap-4" >
        <NavLink to={"/dashboard/Items"}
            /*className={({isActive})=>
            isActive
            ? `${isActiveStyles} px-4 py-2 border-l-8 border-orange-500`
            : isNotActiveStyles
}*/
> Donation-Categories </NavLink>
            
<NavLink to={"/dashboard/donations"}
            /*className={({isActive})=>
            isActive
            ? `${isActiveStyles} px-4 py-2 border-l-8 border-orange-500`
            : isNotActiveStyles
}*/
> Donations </NavLink>


<NavLink to={"/dashboard/newItems"}
            /*className={({isActive})=>
            isActive
            ? `${isActiveStyles} px-4 py-2 border-l-8 border-orange-500`
            : isNotActiveStyles
}*/
> New Items </NavLink>

        
        </ul>

    </div>
}

export default DBLeftSection;