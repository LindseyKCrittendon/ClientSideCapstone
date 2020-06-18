import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./FormCard.css"

//TODO:: POST NEW CHILDREN WITH CORRECT NEIGHBORHOOD ID, SAVE, AND SHOW THE FORM AGAIN.

class FormCard extends Component {
    render() {
      return (
        <div className="card" id="meal-form">
          <div className="card-content">
            <h3>Meal Request</h3>
            <p>Please fill out our form to request a meal</p>
            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Caregiver Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Child Age</Form.Label>
    <Form.Control type="number" placeholder="Age" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Neighborhood</Form.Label>
    <Form.Control as="select">
      {this.props.neighborhoods.map(neighborhood =>
        <option value={neighborhood.id}>{neighborhood.name}</option>
        )}
    </Form.Control>
  </Form.Group>
</Form>
<Button className="draw" variant="primary" size="sm">
      Submit
    </Button>
          </div>
        </div>
      );
    }
  }


export default FormCard