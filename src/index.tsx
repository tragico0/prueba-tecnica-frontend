import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import CreateEmployee from './routes/CreateEmployee';
import CreateEmployeeMovement from './routes/CreateEmployeeMovement';
import loadEmployeesCreateData from './loaders/load-employee-create-data';
import loadPayrollMonthlyData from './loaders/load-payroll-monthly-data';
import editEmployeeLoader from './loaders/edit-employee-loader';
import listEmployeesLoader from './loaders/list-employees-loader';
import PayrollMonthly from './routes/PayrollMonthly';
import ListEmployees from './routes/ListEmployees';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
    
const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
        {path: 'employees', element: null, children: [
            {index: true, element: <ListEmployees />, loader: listEmployeesLoader},
            {path: 'create', element: <CreateEmployee key="create" />, loader: loadEmployeesCreateData},
            {path: 'create-movement', element: <CreateEmployeeMovement />},
            {path: ':id/edit', element: <CreateEmployee key="edit" />, loader: editEmployeeLoader}
        ]},
        {path: 'payroll', element: null, children: [
            {path: 'monthly', element: <PayrollMonthly />, loader: loadPayrollMonthlyData}
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
