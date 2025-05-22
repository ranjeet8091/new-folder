import React, { useEffect, useState } from 'react'

const Component1 = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            setData(json)
            console.log(json)
        }
        fetchData()
    },[])
  return (
    <>
 
    </>
  )
}

export default Component1
