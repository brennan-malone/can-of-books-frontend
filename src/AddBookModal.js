import React from 'react';
import { Button, Form, Container, Modal } from 'react-bootstrap';

class AddBookModal extends React.Component {
  render() {
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
            <Form onSubmit={this.props.handleBookSubmit}>
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
              <Button type='submit'>Add this Book</Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default AddBookModal;
