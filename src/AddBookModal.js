import React from 'react';
import { Button, Form, Container, Modal } from 'react-bootstrap';

class AddBookModal extends React.Component {

  handleBookSubmit = (event) => {
    event.preventDefault();
    this.props.onHide()

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    }
    this.props.handlePostBook(bookObj)
  }
  render() {
    console.log(this.props.onHide)
    return (
        <Modal
        show={this.props.isOpen}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='status'>
                <Form.Check type='checkbox' label='status' />
              </Form.Group>
              <Button variant='outline-primary' type='submit'>Add this Book</Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default AddBookModal;
