import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorize = ({ children }: PropsWithChildren) => {
    const token = localStorage.getItem('token');
    const router = useNavigate()

    React.useEffect(() => {
        if (token) {
            router('/dashboard')
        }
    }, []);

    return !token && <>{children}</>
}

export default UnAuthorize;
