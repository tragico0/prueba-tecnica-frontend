import { useState } from "react";
import FormContainer from "../components/FormContainer";

export default function CreateEmployeeMovement () {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <FormContainer title="Captura de movimientos por mes">
                        <CreateEmployeeMovementForm />
                    </FormContainer>
                </div>
            </div>
        </div>
    );
}

const initialFormData = {
    name: '',
    reference: '',
    role: '',
    month: 1,
    deliveries: 0
};

function CreateEmployeeMovementForm () {
    const [formData, setFormData] = useState(initialFormData);

    const handleOnInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            ...{[e.currentTarget.name]: e.currentTarget.value}
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
                        <input type="number" className="form-control" id="inputMonth" min={1} max={12} name="month" onChange={handleOnInputChange} value={formData.month} />
                    </div>
                    <div className="col-sm-6"></div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDeliveries" className="col-sm-2 col-form-label">Cantidad de entregas:</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" min={1}  id="inputDeliveries" name="deliveries" onChange={handleOnInputChange} value={formData.deliveries} />
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        </form>
    );
}
