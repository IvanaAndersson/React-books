import React from 'react'
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const BookDescription = () => {
  const { id } = useParams()
  const history = useHistory();
  const { data: book, error } = useFetch(`http://localhost:8000/books/${id}`)

  const handleGoBack = () => {
    history.go(-1)
  }
  return (
    <div>
      { error && <div> {error} </div> }
      {
        book && (
        <section>  
          <button className="btn" onClick={handleGoBack}>Back </button>
          <h1> Book { id } - {book.title} </h1>
          <p> {book.description} </p>
        </section>
        )
      }
     
    </div>
  )
}

export default BookDescription
