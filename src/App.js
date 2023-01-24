import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks 
              books={this.state.books}
              />}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
