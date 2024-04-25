import React from "react";
import { Navigate, useNavigate, useNavigate } from 'react-router-dom';
import { NavLink } from './Navbar';


function Dashboard() {
    const useNavigate=useNavigate()
    return(
        <div>
            <Navbar>
                <button className="dash-btn" onClick={()=>Navigate("/product")}>More</button>
            </Navbar>
        </div>
    );
}
export default Dashboard;