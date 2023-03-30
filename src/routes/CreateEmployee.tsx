import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import SelectEmployeeRole from "../components/SelectEmployeeRole";

export default function CreateEmployee () {
    return (
        <div className="container">
            <FormContainer title="Empleados">
                <CreateEmployeeForm />
            </FormContainer>
        </div>
    );
}

function CreateEmployeeForm () {
    const [reference, setReference] = useState('');
    const [name, setName] = useState('');
    const roles = [
        {id: 1, label: 'Chofer'},
        {id: 2, label: 'Cargador'},
        {id: 3, label: 'Auxiliar'}
    ];

    const handleOnReferenceChange = (e: React.FormEvent<HTMLInputElement>) => {
        setReference(e.currentTarget.value);
    };

    const handleOnNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    return (
        <form className="row">
            <div className="col">
                <div className="row">
                    <div className="col px-5 black-box-wrapper">
                        <div className="row my-3">
                            <label htmlFor="inputReference" className="col-sm-2 col-form-label">N&uacute;mero:</label>
                            <div className="col-sm-10">
                                <input type="text" id="inputReference" className="form-control" onChange={handleOnReferenceChange} value={reference} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre:</label>
                            <div className="col-sm-10">
                                <input type="text" id="inputName" className="form-control" onChange={handleOnNameChange} value={name} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <SelectEmployeeRole roles={roles} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
