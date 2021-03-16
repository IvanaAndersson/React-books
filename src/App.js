import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookList from './components/BookList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main className="container"> 
          <Switch>
            <Route path="/">
              <BookList />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
