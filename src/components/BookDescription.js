import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const BookDescription = () => {
  const { id } = useParams()

  const { data: book, error } = useFetch(`http://localhost:8000/books/${id}`)
  return (
    <div>
      { error && <div> {error} </div> }
      {
        book && (
        <section>  
          <Link to="/">Back</Link>
          <h1> Book { id } - {book.title} </h1>
          <p> {book.description} </p>
        </section>
        )
      }
     
    </div>
  )
}

export default BookDescription
