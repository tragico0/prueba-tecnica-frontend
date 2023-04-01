import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { CreateEmployeeMovementFormContext, defaultCreateEmployeeMovementFormValues } from "../store/createEmployeeMovementFormContext";
import { addEmployeeDeliveries } from "../utils/api";

export default function CreateEmployeeMovement () {
    const [formData, setFormData] = useState(defaultCreateEmployeeMovementFormValues);
    const navigate = useNavigate();

    async function handleCreateNewEmployee (e: React.MouseEvent<HTMLButtonElement>) {
        try {
            const response = await addEmployeeDeliveries(formData);

            if (response.ok) {
                return navigate('..');
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
                    <CreateEmployeeMovementFormContext.Provider value={{formData, setFormData}}>
                        <FormContainer title="Captura de movimientos por mes" onClickNewButton={handleCreateNewEmployee}>
                            <CreateEmployeeMovementForm />
                        </FormContainer>
                    </CreateEmployeeMovementFormContext.Provider>
                </div>
            </div>
        </div>
    );
}

function CreateEmployeeMovementForm () {
    const {formData, setFormData} = useContext(CreateEmployeeMovementFormContext);

    const handleOnInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setFormData({
            ...formData,
            ...{[e.currentTarget.name]: /^\d+$/.test(value) ? Number(value) : value}
        });
    };

    return (
        <form className="row">
            <div className="col px-5 black-box-wrapper">
                <div className="row my-3">
                    <label htmlFor="inputReference" className="col-sm-2 col-form-label">N&uacute;mero:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputReference" name="reference" onChange={handleOnInputChange} value={formData.reference} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputReference" className="col-sm-2 col-form-label">Nombre:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputReference" name="name" onChange={handleOnInputChange} value={formData.name} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputRole" className="col-sm-2 col-form-label">Rol:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="inputRole" name="role" onChange={handleOnInputChange} value={formData.role} />
                    </div>
                    <div className="col-sm-6"></div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputMonth" className="col-sm-2 col-form-label">Mes:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="selectedMonth" min={1} max={12} name="selectedMonth" onChange={handleOnInputChange} value={formData.selectedMonth} />
                    </div>
                    <div className="col-sm-6"></div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDeliveries" className="col-sm-2 col-form-label">Cantidad de entregas:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" min={1}  id="inputDeliveries" name="deliveriesQuantity" onChange={handleOnInputChange} value={formData.deliveriesQuantity} />
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        </form>
    );
}
