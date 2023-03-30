import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import CreateEmployee from './routes/CreateEmployee';
import CreateEmployeeMovement from './routes/CreateEmployeeMovement';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
    
const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
        {path: 'employees', element: null, children: [
            {path: 'create', element: <CreateEmployee />},
            {path: 'create-movement', element: <CreateEmployeeMovement />}
        ]}
    ]}
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
