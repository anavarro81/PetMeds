import React from 'react'
import Header from './Header'
import SearchPage from './Pages/SearchPage/SearchPage'
import MyFavoritesPage from './Pages/MyFavoritesPage/MyFavoritesPage'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CalculateDosePage from './Pages/CalculateDosePage/CalculateDosePage'
import MedicineCabinetPage from './Pages/MedicineCabinetPage/MedicineCabinetPage';
import RegisterMedicationsPage from './Pages/RegisterMedicationsPage/RegisterMedicationsPage';
import MedicineDetailPage from './Pages/MedicineDetailPage/MedicineDetailPage';
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        
        {
          index: true,
          element: <SearchPage />,
        },

        {
          path: '/buscador',
          element: <SearchPage />
        },

        {
          path: '/medicamento/:id',
          element: <MedicineDetailPage />
        },

        {
          path: '/calcular-dosis',
          element: <CalculateDosePage />
        }, 
        {
          path: '/mis-favoritos',
          element: <MyFavoritesPage />

        },
        {
          path: '/botiquin-virtual',
          element: <MedicineCabinetPage />
        },
        {
          path: '/alta-medicamento',
          element: <RegisterMedicationsPage />
        },
      ]
    }
  ])



  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default App