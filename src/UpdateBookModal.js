import React from 'react';
import { Button, Form, Container, Modal } from 'react-bootstrap';

class UpdateBookModal extends React.Component {
  
  handleBookUpdate = (event) => {
    event.preventDefault();
    this.props.onHide();

    let bookToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBook(bookToUpdate)
  }
  render() {
    return (
      <Modal
        show={this.props.isUpdateOpen}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleBookUpdate}>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control defaultValue={this.props.book.title} type='text' />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control defaultValue={this.props.book.description} type='text' />
              </Form.Group>
              <Form.Group controlId='status'>
                <Form.Check defaultChecked={this.props.book.status} type='checkbox' label='status' />
              </Form.Group>
              <Button variant='info' type='submit'>Update This Book</Button>
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

export default UpdateBookModal;