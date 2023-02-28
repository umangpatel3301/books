
import BookList from "./components/bookList/bookList"
import SearchBar from "./components/searchBar/searchBar"
import { useEffect, useContext } from "react"
import Books from "./context/books"

const App = () => {
    const { fetchBook} = useContext(Books)

    useEffect(() => {
        fetchBook()
    }, [])
    
    return(
        <div className="app">
             <BookList />
        <SearchBar/>
        </div>
    )
}

export default App