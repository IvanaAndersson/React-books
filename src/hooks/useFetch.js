import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw Error('Could not fetch data for that resource')
      }
      return res.json()}
    )
    .then(data => {
      setData(data)
      setError(null)
    })
    .catch(err => setError(err.message))
  },[url])

  return {data, setData, error}
}

export default useFetch