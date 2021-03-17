import useFetch from '../hooks/useFetch'
import Book from './Book'


const BookList = () => {
  const {data: books, setData: setBooks, error} = useFetch('http://localhost:8000/books')
  const handleDelete = (id) => {
    fetch('http://localhost:8000/books/'+id, {method: "DELETE"})
    setBooks(books.filter(book => book.id !== id));
  }

  if(!books) {
    return error ? <div> {error} </div> : <div>Loading...</div>
  } else {
    return books.map(book => <Book key={book.id} {...book} handleDelete={handleDelete}/>)
  }
}

export default BookList
