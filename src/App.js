import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from './components/BookList';
import useFetch from './hooks/useFetch'
import AddNew from "./components/AddNew";

const App = () => {
  const {data: books, setData: setBooks, error} = useFetch('http://localhost:8000/books')
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
              <BookList books={books} handleDelete={handleDelete} error={error}/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
