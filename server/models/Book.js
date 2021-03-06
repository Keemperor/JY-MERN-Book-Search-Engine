const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    
  },
  pageCount: {
    type: Number,
    required: true,
  },
  //TODO: add the pageCount property. It should be a Number. 
  //TODO: add the publishedDate property. It should be a String.  
});

module.exports = bookSchema;
