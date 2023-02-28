import axios from "axios";
import { createContext, useState } from "react";

const Books = createContext();

const BookCrudOperation = ({ children }) => {
  const [book, setBooks] = useState([]);

  const editRecordById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });
    const editBook = book.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editBook);
  };

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const deleteRecordById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = book.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const BookCreate = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updateBook = [...book, response.data];
    setBooks(updateBook);
    console.log(updateBook);
  };

  const valueToShare = {
    book: book,
    deleteRecordById: deleteRecordById,
    editRecordById: editRecordById,
    BookCreate: BookCreate,
    fetchBook: fetchBook,
  };

  return <Books.Provider value={valueToShare}>{children}</Books.Provider>;
};

export { BookCrudOperation };
export default Books;
