import Book from './Book'


const BookList = ({ books, error, handleDelete }) => {
  if(!books) {
    return error ? <div> {error} </div> : <div>Loading...</div>
  } else {
    return books.map(book => <Book key={book.id} {...book} handleDelete={handleDelete}/>)
  }
}

export default BookList
