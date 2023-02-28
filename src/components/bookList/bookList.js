import BookShow from "../bookShow/bookShow"
import { useContext } from "react"
import Books from "../../context/books"

const BookList = () => {

    const {book} = useContext(Books)

    const renderedBook = book.map((image) => {
        return <BookShow key={image.id} title={image}/>
    })    
    return(
        <div className="book-list">
            {renderedBook}
        </div>
    )
}

export default BookList