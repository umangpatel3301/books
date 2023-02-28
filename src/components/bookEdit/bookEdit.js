import { useState, useContext } from "react"
import Books from "../../context/books"

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title)
    const {editRecordById} = useContext(Books)

    const handleChange =(event) => {
setTitle(event.target.value)
    }

    const formSubmit = (event) => {
event.preventDefault(); 
editRecordById(book.id, title)
onSubmit()
    }

    return(
     <form className="book-edit" onSubmit={formSubmit}>
    <label>Title</label>
    <input className="input" onChange={handleChange} value={title} ></input>
    <button className="button-is-primary">Save</button>
     </form>
    )
}

export default BookEdit