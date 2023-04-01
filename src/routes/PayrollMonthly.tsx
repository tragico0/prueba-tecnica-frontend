import { map } from "lodash";
import { useLoaderData } from "react-router-dom";
import { defaultPriceFormat } from "../utils/general";

export default function PayrollMonthly () {
    const { payrolls } = useLoaderData() as { payrolls: any[] };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-stripped">
                    <thead>
                        <tr>
                        <th scope="col">Referencia</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Horas Trabajadas</th>
                        <th scope="col">Sueldo Total</th>
                        <th scope="col">Pago Total / Entregas</th>
                        <th scope="col">Pago Total / Bonos</th>
                        <th scope="col">Vales</th>
                        <th scope="col">Retenciones</th>
                        <th scope="col">Pago Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {map(payrolls, (payroll: any) => (
                        <tr key={payroll.employeeId}>
                            <th scope="row">{payroll.employeeReference}</th>
                            <td>{payroll.name}</td>
                            <td>{payroll.registeredHours}</td>
                            <td>{defaultPriceFormat(payroll.grossSalary)}</td>
                            <td>{defaultPriceFormat(payroll.deliveriesPayment)}</td>
                            <td>{defaultPriceFormat(payroll.bonusesPayment)}</td>
                            <td>{defaultPriceFormat(payroll.groceryVouchersPayment)}</td>
                            <td>{defaultPriceFormat(payroll.taxesPayment)}</td>
                            <td>{defaultPriceFormat(payroll.netTotal)}</td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
