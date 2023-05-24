import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Axiosapp = () => {
    const baseURL = 'http://jsonplaceholder.typicode.com/posts'
    const [mydata, setData] = useState([])

    useEffect(() => {
        Axios.get(baseURL).then((result) => {
            setData(result.data)
        }).catch((err) => {

        });
    }, [])
    return (
        <>
            {/* <h1>{mydata.id}</h1>
            <h1>{mydata.title}</h1>
            <h1>{mydata.body}</h1> */}

            {
                mydata.map((item) => {
                    const { id, title, body } = item
                    return (
                        <>
                            <h1>{id}</h1>
                            <h1>{title}</h1>
                            <h1>{body}</h1>
                            <hr />
                        </>
                    )
                })
            }

        </>
    )
}

export default Axiosapp