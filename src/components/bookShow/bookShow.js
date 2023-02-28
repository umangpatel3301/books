import { useState, useContext } from "react"
import BookEdit from "../bookEdit/bookEdit"
import Books from "../../context/books"

const BookShow = ({title}) => {
    const [edit, setEdit] = useState(false)
    const{ deleteRecordById } = useContext(Books)

    const handleDeleteClick = () => {
        deleteRecordById(title.id)
    }
const handleEditDelete = () => {
    setEdit(!edit)
}

const handleSubmit = () => {
    setEdit(false)
}

let content = <h3>{title.title}</h3>;
if (edit) {
    content =<BookEdit book={title} onSubmit={handleSubmit}/>
}
    return(
        <div className="book-show">
            <img alt="load" src="https://picsum.photos/300/200" />
      <div>{content}</div>
      <div className="actions" >
        <button className="edit" onClick={handleEditDelete}></button>
        <button className="delete" onClick={handleDeleteClick}>
            Delete
        </button>
      </div>
        </div>
    )
}

export default BookShow