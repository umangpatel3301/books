import { useState, useContext } from "react"
import Books from "../../context/books"

const SearchBar = () => {
    const [term, setTerm] = useState('')
    const { BookCreate } = useContext(Books)

    const handleChange = (event) => {
setTerm(event.target.value)
    }

    const handleFormSumbit = (event) =>{
        event.preventDefault()
        BookCreate(term)
        setTerm('')
    }
    return(
        <div className="book-create">
        <h3>Add Book</h3>
        <form onSubmit={handleFormSumbit}>
            <label>Title</label>
            <input className="input" value={term} onChange={handleChange}/>
            <button className="button" onSubmit={handleFormSumbit}>Add Book</button>
        </form>
        </div>
    )
}

export default SearchBar