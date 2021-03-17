import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from './components/BookList';
import useFetch from './hooks/useFetch'
import AddNew from "./components/AddNew";

const App = () => {
  const {data: books, setData: setBooks, error} = useFetch('http://localhost:8000/books')
  const handleAdd = (data) => {
    fetch('http://localhost:8000/books', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    
    setBooks([ ...books, data])
  }
  const handleUpdate = (id) => {
    const bookToUpdate = books.filter(book => book.id === id)
    const updBook = { ...bookToUpdate[0], isFavorite: !bookToUpdate[0].isFavorite }
    fetch('http://localhost:8000/books/'+id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updBook)
    })
    setBooks(books.map((book) =>
      book.id === id ? { ...book, isFavorite: updBook.isFavorite } : book
    ));
  }
  const handleDelete = (id) => {
    fetch('http://localhost:8000/books/'+id, {method: "DELETE"})
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <Router>
      <div className="App">
        <Header /> 
        <main className="container"> 
          <Switch>
            <Route path="/">
              <AddNew handleAdd={handleAdd} />
              <BookList books={books} handleUpdate={handleUpdate} handleDelete={handleDelete} error={error}/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
