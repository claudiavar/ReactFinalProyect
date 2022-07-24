import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Loegado = () => {
    let navigate = useNavigate();
    let storage = JSON.parse(localStorage.getItem("logeado"))
    console.log(storage)



    return (
        <>
            {
                (storage === null) ? <Navigate to="/" replace={true} />
                    : <div>
                        <h1>{storage.displayName}</h1>
                        <img src={storage.photoURL} alt="" width={80} height={80} />
                    </div>

            }

        </>
    )
}