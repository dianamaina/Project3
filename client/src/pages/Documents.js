import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Documents() {
  // Setting our component's initial state
  const [documents, setDocuments] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadDocuments()
  }, [])

  // Loads all documents and sets them to Documents
  function loadDocuments() {
    API.getDocuments()
      .then(res =>
        setDocuments(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a document from the database with a given id, then reloads documents from the db
  function deleteDocument(id) {
    API.deleteDocument(id)
      .then(res => loadDocuments())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveDocument({
        document: formObject.document,
        category: formObject.category,
        synopsis: formObject.synopsis
      })
        .then(res => loadDocuments())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Click here to add documents</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="document"
              placeholder="document name (required)"
            />
            <Input
              onChange={handleInputChange}
              category="category"
              placeholder="Category required (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Document
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1> Click here to add documents</h1>
          </Jumbotron>
          {documents.length ? (
            <List>
              {documents.map(documents => (
                <ListItem key={documents._id}>
                  <Link to={"/documents/" + Documents._id}>
                    <strong>
                      {documents.title} by {documents.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteDocument(document._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Documents;
