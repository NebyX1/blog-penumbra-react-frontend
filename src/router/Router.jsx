//? Importamos los componentes de React Router para generar el sistema de rutas de la app
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//? Importamos los componentes de las páginas de la app
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/BlogPage";
import PostPage from "../pages/PostPage";
import NotFound404 from "../pages/NotFound";

const Router = () => {
  //? Crear el sistema de rutas
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostPage />} />

          //? Ruta 404 (Not Found)
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
