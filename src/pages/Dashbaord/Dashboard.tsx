import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../AppBar/AppBar";

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const router = useNavigate();
    React.useEffect(() => {
        if (!token) {
            router('/login')
        }
    }, [])

    return token && <ResponsiveAppBar><>asdhasdh</></ResponsiveAppBar>
}

export default Dashboard;