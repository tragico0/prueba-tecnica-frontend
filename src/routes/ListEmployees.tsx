import { isNil, map } from "lodash";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { deleteEmployee } from "../utils/api";
import { defaultPriceFormat, getDefaultRoleCodeLabel } from "../utils/general";

export default function ListEmployees () {
    const { employees } = useLoaderData() as { employees: any[] };
    const navigate = useNavigate();

    async function handleDeleteEmployee (e: React.MouseEvent<HTMLButtonElement>) {
        try {
            const response = await deleteEmployee({id: e.currentTarget.dataset?.employeeId});

            if (response.ok) {
                return navigate('.');
            }

            const errorBody = await response.json();
            console.info('There was an error when trying to create the employee', response.status, errorBody);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-stripped">
                    <thead>
                        <tr>
                        <th scope="col">Referencia</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Sueldo / Hora</th>
                        <th scope="col">Rol</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {map(employees, (employee: any) => (
                        <tr key={employee.id}>
                            <th scope="row">{employee.reference}</th>
                            <td>{`${employee.firstName} ${employee.firstLastName}`}</td>
                            <td>{defaultPriceFormat(employee.hourlyRate)}</td>
                            <td>{(isNil(employee.role.code) ? '' : getDefaultRoleCodeLabel(employee.role.code))}</td>
                            <td className="text-center">
                                <Link to={`/employees/${employee.id}/edit`} className="btn btn-primary me-2">E</Link>
                                <button type="button" className="btn btn-danger" onClick={handleDeleteEmployee} data-employee-id={employee.id}>D</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
