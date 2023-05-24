import React, { useEffect, useState } from 'react'
import API from "./data"

const Axios = () => {

    let [myData, setMyData] = useState([]);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //         console.log(res)
    //         setMyData(res.data)
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // }, [])

    // let API = 'https://jsonplaceholder.typicode.com/posts'

    let getApiData = async () => {
        try {
            let res = await API.get("/posts")
            setMyData(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getApiData()
    }, [])

    return (
        <>
            {
                myData.map((val) => {
                    let { id, title, body } = val;
                    return (
                        <div key={id}>
                            <h3>id : {id}</h3>
                            <h3>title : {title}</h3>
                            <h3>{body}</h3>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Axios