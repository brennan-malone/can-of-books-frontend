import React from 'react';
import axios from 'axios';
import { Button, Carousel } from 'react-bootstrap';
import AddBookModal from './AddBookModal';
import UpdateBookModal from './UpdateBookModal.js';
import bookImage from './assets/books.jpg'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isOpen: false,
      isUpdateOpen: false
    }
  }
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`

      let bookData = await axios.get(url)

      this.setState({
        books: bookData.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  deleteBooks = async (singleBook) => {
    let url = `${process.env.REACT_APP_SERVER}/books/${singleBook._id}`
    console.log(url)
    await axios.delete(url);
    let updatedBooks = this.state.books.filter(book => book._id !== singleBook._id)
    console.log(updatedBooks)
    this.setState({
      books: updatedBooks
    })
  }

  updateBook = async (bookToUpdate) => {

    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
      let updatedBook = await axios.put(url, bookToUpdate)

      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook
      });

      this.setState({
        books: updatedBookArray
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  handlePostBook = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`

      let createdBook = await axios.post(url, bookObj)

      this.setState({
        books: [...this.state.books, createdBook.data]
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  openUpdateModal = () => this.setState({ isUpdateOpen: true });
  closeUpdateModal = () => this.setState({ isUpdateOpen: false });

  componentDidMount() {
    this.getBooks()
  }

  render() {
    console.log(this.state.closeModal)

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel slide={false}>
            {this.state.books.map((book, index) => {
              return (
                <Carousel.Item key={index} style={{ textAlign: 'center' }}>
                  <img style={{ width: '50%', height: '50%' }} src={bookImage} alt='book' />

                  <Carousel.Caption>
                    <p>{book.title}</p>
                    <p>{book.description}</p>
                    {book.status ? (
                      <p>The book is available</p>
                    ) : (
                      <p>Book is not available</p>
                    )}
                  </Carousel.Caption>
                  <Carousel.Caption>
                    <Button style={{ alignItems: 'center' }} variant='warning' onClick={() => this.deleteBooks(book)}>Delete</Button>
                    <Button onClick={this.openUpdateModal} variant='info'>Update</Button>

                    <UpdateBookModal
                      openUpdateModal={this.openUpdateModal}
                      onHide={this.closeUpdateModal}
                      isUpdateOpen={this.state.isUpdateOpen}
                      updateBook={this.updateBook}
                      book={book}
                    />

                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}

        <Button onClick={this.openModal}>Add a Book</Button>
        {this.state.isOpen && (
          <AddBookModal
            openModal={this.openModal}
            onHide={this.closeModal}
            isOpen={this.state.isOpen}
            handlePostBook={this.handlePostBook}
          />
        )}
      </>
    )
  }
}

export default BestBooks;
