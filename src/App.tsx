import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  // let contador = 0;
  const [contador, setContador] = useState(0);
  const [lista, setLista] = useState<string[]>([]);
  const [todo, setTodo] = useState("");
  // useEffect
  useEffect(() => {
    console.log("useEffect");
  }, [lista]);
  const sumar = () => {
    setContador(contador + 1);
  };
  const agregarALista = (param: string) => {
    setLista([...lista, todo]);
  };
  const eliminar = (index: number) => {
    setLista(lista.filter((item, i) => i !== index));
  };
  return (
    <div className="App">
      {/* mision aprender sobre useEffect y useState */}
      <h1>React Hooks</h1>
      <h2>useEffect</h2>
      {/* <input type="text" />
      <button onClick={agregarALista()}>{contador}</button> */}
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => agregarALista(todo)}>Agregar a la lista</button>
      {lista.map((item, index) => (
        <div>
          <p key={index}>{item}</p>
          <button onClick={() => eliminar(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
