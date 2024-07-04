import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//? Importamos el archivo de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//? Importamos el archivo de JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//? Importamos el componente Router
import Router from "./router/Router.jsx";

//? Importamos el componente QueryClientProvider
import { QueryClientProvider } from "react-query";
//? Importamos el QueryClient
import queryClient from "./api/queryClient";

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <Router />
    </QueryClientProvider>
)
