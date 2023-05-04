import React, { } from "react";
import {CreateContainer, DBDonations, DBHeader, DBHome, DBItems, DBUsers} from "../components";
import { Routes, Route } from "react-router-dom";

const DBRightSection=()=>{
    return <div className="flex flex-col px-12 py-12 flex-1 h-full" >
        <DBHeader/>
        <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
            <Routes>
            <Route path="/home" element={<DBHome/>}/>
            <Route path="/donations" element={<DBDonations/>}/>
            <Route path="/items" element={<DBItems/>}/>
            <Route path="/newItems" element={<CreateContainer/>}/>
            <Route path="/users" element={<DBUsers/>}/>
            
            </Routes>
            
        </div>
    </div>
}

export default DBRightSection;