import axios from "axios";

export default {
  // Gets all books
  getDocuments: function () {
    return axios.get("/api/documents");
  },
  // Gets the book with the given id
  getDocuments: function (id) {
    return axios.get("/api/documents/" + id);
  },
  // Deletes the book with the given id
  deleteDocuments: function (id) {
    return axios.delete("/api/documents/" + id);
  },
  // Saves a book to the database
  saveDocuments: function (documentData) {
    return axios.post("/api/documents", documentData);
  }
};
