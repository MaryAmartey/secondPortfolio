import React,{useEffect, useState}  from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import CircleLoader from "react-spinners/CircleLoader";

export default function Home(){
    const [loading, setLoading] =useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, [])

    return(
        <div>
        {
            loading ? 
            <div className="loading">
            <CircleLoader color={'#FFC369'} loading={loading} size={200} />
            </div>
            :
            <>
            <Header />
            <Main />
            </>

        }
        </div>
    )
}


