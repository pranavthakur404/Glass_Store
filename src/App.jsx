import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, ProductDetails, WishList, Error, Contact } from "./pages";
import RootLayout from "./root/RootLayout";
import { loader as fetchSingleProduct } from "./pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/wishList" element={<WishList />} />
      <Route
        path="/products/:id"
        loader={(args) => {
          return fetchSingleProduct(args);
        }}
        element={<ProductDetails />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
