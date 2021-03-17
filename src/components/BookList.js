import useFetch from '../hooks/useFetch'
import Book from './Book'


const BookList = () => {
  const {data: books, error} = useFetch('http://localhost:8000/books')

  if(!books) {
    return error ? <div> {error} </div> : <div>Loading...</div>
  } else {
    return books.map(book => <Book key={book.id} {...book}/>)
  }
}

export default BookList
