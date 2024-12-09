import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import AppointmentAvailability from './pages/appointmentAvailability.tsx';
import ErrorPage from './pages/errorPage.tsx';
import PersonalInformation from './pages/personalInformation.tsx';
import Login from './pages/Login.tsx';
import PropertyDetails from './pages/propertyDetails.tsx';
import ServiceSelection from './pages/serviceSelection.tsx';
import Summary from './pages/summary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ServiceSelection />,
      }, 
      {
        path: '/ServiceSelection',
        element: <ServiceSelection />,
      }, 
      {
        path: '/PropertyDetails',
        element: <PropertyDetails />,
      }, 
      {
        path: '/AppointmentAvailability',
        element: <AppointmentAvailability />,
      }, 
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/PersonalInformation',
        element: <PersonalInformation />,
      }, 
      {
        path: '/Summary',
        element: <Summary />,
      }, 
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
};
