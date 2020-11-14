import React, { useState, useEffect } from "react";
import UploadBtn from "../components/UploadBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Documents() {
    // Setting our component's initial state
    const [documents, setDocuments] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadDocuments()
    }, [])
        ?
        // Loads all documents and sets them to Documents Test
        function loadDocuments() {
            API.getDocuments()
                .then(res =>
                    setDocuments(res.data)
                ).catch(err => console.log(err));
        } :

        // Deletes a document from the database with a given id, then reloads documents from the db
        function uploadDocument(id) {
            API.uploadDocument(id)
                .then(res => loadDocuments())
                .catch(err => console.log(err));
        }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveDocument({
                docName: formObject.docName,
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
                        <h3>Personal</h3>
                        <button onClick={FileUpload()} type="button" class="btn btn-primary">Click here to add documents</button>
                    </Jumbotron>
                    {documents.length ? (
                        <List>
                            {documents.map(documents => (
                                <ListItem key={documents._id}>
                                    <Link to={"/documents/" + Documents._id}>
                                        <strong>
                                            {documents.name} by {documents.category}
                                        </strong>
                                    </Link>
                                    <UploadBtn onClick={() => uploadDocument(document._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3 >No Documents to Display</h3>
                        )}
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h3>Legal</h3>
                        <button type="button" class="btn btn-primary">Click here to add documents</button>
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
                                    <uploadBtn onClick={() => uploadDocument(document._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3 >No Documents to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Documents;