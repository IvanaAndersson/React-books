import Book from './Book'


const BookList = ({ books, error, handleUpdate, handleDelete }) => {
  if(!books) {
    return error ? <div> {error} </div> : <div>Loading...</div>
  } else {
    return <div className="book-list">
      {books.map(book => <Book key={book.id} {...book} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)}
    </div> 
  }
}

export default BookList
