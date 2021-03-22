import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from './components/BookList';
import useFetch from './hooks/useFetch'
import AddNew from "./components/AddNew";
import PageHeader from './components/PageHeader';

const apiURL = "http://localhost:8000/books"

const App = () => {
  const [showAddBook, setShowAddBook] = useState(false)
  const {data: books, setData: setBooks, error} = useFetch(apiURL)
  const handleAdd = (data) => {
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    console.log(data);
    setBooks([ ...books, data])
  }
  const handleUpdate = (id) => {
    const bookToUpdate = books.filter(book => book.id === id)
    const updBook = { ...bookToUpdate[0], isFavorite: !bookToUpdate[0].isFavorite }
    fetch(`${apiURL}/${id}`, {
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
    fetch(`${apiURL}/${id}`, {method: "DELETE"})
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <Router>
      <div className="App">
        <Header /> 
        <main className="container"> 
          <Switch>
            <Route path="/" exact>
              <PageHeader showAddBook={showAddBook} setShowAddBook={setShowAddBook} />
              {showAddBook && <AddNew handleAdd={handleAdd} />}
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
