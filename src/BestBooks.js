import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`

      let bookData = await axios.get(url)

      this.setState({
        books: bookData.data
      })
    } catch (error){
      console.log(error.response)
    }
  }

  componentDidMount(){
    this.getBooks()
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel slide={false}>
            {this.state.books.map((book, index) => {
              return (
                <Carousel.Item>
                  <p>{book.title}</p>
                  <p>{book.description}</p>
                  {book.status ? (
                  <p>The book is available</p>
                  ) : (
                    <p>Book is not available</p>
                  )}

                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
