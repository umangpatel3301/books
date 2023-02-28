import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css"
import {BookCrudOperation} from "./context/books";

const el = document.getElementById('root')
const Root = createRoot(el)

Root.render(
<BookCrudOperation><App /></BookCrudOperation>
)