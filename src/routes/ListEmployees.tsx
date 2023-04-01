import { isNil, map } from "lodash";
import { useLoaderData } from "react-router-dom";
import { defaultPriceFormat, getDefaultRoleCodeLabel } from "../utils/general";

export default function ListEmployees () {
    const { employees } = useLoaderData() as { employees: any[] };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-stripped">
                    <thead>
                        <tr>
                        <th scope="col">referencia</th>
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
                                <button type="button" className="btn btn-primary me-2">E</button>
                                <button type="button" className="btn btn-danger">D</button>
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
