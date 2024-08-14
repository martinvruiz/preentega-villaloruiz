import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App(){

    return <>
        <NavBar/>
        <ItemListContainer mensaje="Hola"/>
        </> 
}

root.render(<App/>)