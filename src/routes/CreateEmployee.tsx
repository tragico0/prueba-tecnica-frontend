import { get } from "lodash";
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import SelectEmployeeRole from "../components/SelectEmployeeRole";
import { CreateEmployeeFormContext, CreateEmployeeFormData, defaultFormDataValues } from '../store/createEmployeeFormContext';
import { createNewEmployee } from "../utils/api";

export default function CreateEmployee () {
    const [formData, setFormData] = useState<CreateEmployeeFormData>(defaultFormDataValues);
    const navigate = useNavigate();

    async function handleCreateNewEmployee (e: React.MouseEvent<HTMLButtonElement>) {
        try {
            const response = await createNewEmployee(formData);

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
            <CreateEmployeeFormContext.Provider value={{formData, setFormData}}>
                <FormContainer title="Empleados" onClickNewButton={handleCreateNewEmployee}>
                    <CreateEmployeeForm/>
                </FormContainer>
            </CreateEmployeeFormContext.Provider>
        </div>
    );
}

function CreateEmployeeForm () {
    const { formData, setFormData } = useContext(CreateEmployeeFormContext);
    const { roles } = useLoaderData() as { roles: any[] };

    const handleOnReferenceChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            reference: e.currentTarget.value
        });
    };

    const handleOnNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            name: e.currentTarget.value
        });
    };

    const handleOnRoleCheck = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            roleId: Number(e.currentTarget.dataset?.roleId) ?? 0
        });
    };

    const setSelectedId = (formDataId: number = 0) => {
        return (formDataId !== 0 ? formDataId : get(roles, '[0].id', 0));
    }

    return (
        <form className="row">
            <div className="col">
                <div className="row">
                    <div className="col px-5 black-box-wrapper">
                        <div className="row my-3">
                            <label htmlFor="inputReference" className="col-sm-2 col-form-label">N&uacute;mero:</label>
                            <div className="col-sm-10">
                                <input type="text" id="inputReference" className="form-control" onChange={handleOnReferenceChange} value={formData.reference} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre:</label>
                            <div className="col-sm-10">
                                <input type="text" id="inputName" className="form-control" onChange={handleOnNameChange} value={formData.name} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <SelectEmployeeRole selectedId={setSelectedId(formData.roleId)} roles={roles} onRoleCheck={handleOnRoleCheck} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
