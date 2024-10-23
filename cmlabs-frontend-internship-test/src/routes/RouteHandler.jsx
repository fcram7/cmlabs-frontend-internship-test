import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Category from '../pages/category/Index';
import CategoryDetail from '../pages/categoryDetail/Index';
import MealDetail from '../pages/mealDetail/Index';

const RouteHandler = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Category />}/>
        <Route path=':strCategory/'>
          <Route path='' element={<CategoryDetail />}/>
          <Route path=':idMeal' element={<MealDetail />}/>
        </Route>
      </Route>
    )
  )
  return ( 
    <RouterProvider router={router} />
   );
}
 
export default RouteHandler;