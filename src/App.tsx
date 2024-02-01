import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Typography, Box, TextField, Paper } from "@mui/material";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // let contador = 0;
  const [contador, setContador] = useState(0);
  const [lista, setLista] = useState<string[]>([]);
  const [todo, setTodo] = useState("");
  const [buscar, setBuscar] = useState("");
  // useEffect
  // useEffect(() => {
    
  // }, []);
  const listaPrototipo =[
    "h",
    "palabra",
    "otra",
    "hola",
    "mundo",
    "adios",
  ]
  const sumar = () => {
    setContador(contador + 1);
  };
  const agregarALista = (param: string) => {
    setLista([...lista, todo]);
    toast.success("Agregado a la lista!");
  };
  const eliminar = (index: number) => {
    setLista(lista.filter((item, i) => i !== index));
    toast.info("tarea eliminada!");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      bgcolor="#224944"
    >
      <Paper className="App" elevation={10} sx={{ padding: 10 }}>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
        <Typography fontSize={24} fontStyle={"comic sans"}>
          To-do list
        </Typography>
        <TextField variant="outlined" label="Buscar" onChange={(e) => {
          setBuscar(e.target.value);
          if(lista.length > 0){
            lista.filter((item, i) => {
              if(item === buscar){
                toast.info(`Palabra encontrada: ${buscar}`);
              }
            })
          }
        }}/>

        <Box
          sx={{ padding: 10, display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => agregarALista(todo)}
            sx={{ marginLeft: 2 }}
          >
            Agregar a la lista
          </Button>
        </Box>
        {lista.map((item, index) => (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography key={index}>{item}</Typography>
            <Button variant="outlined" onClick={() => eliminar(index)}>
              X
            </Button>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}

export default App;
