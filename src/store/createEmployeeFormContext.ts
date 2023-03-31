import { useContext, createContext, Dispatch, SetStateAction } from "react"
import { RoleCode } from "../utils/enums";

export type CreateEmployeeFormData = {
    name?: string;
    reference?: string;
    roleCode?: string;
};

type CreateEmployeeFormContextType = {
    formData: CreateEmployeeFormData;
    setFormData: Dispatch<SetStateAction<CreateEmployeeFormData>>
}

export const defaultFormDataValues: CreateEmployeeFormData = {
    name: '',
    reference: '',
    roleCode: RoleCode.DRIVER
};

export const CreateEmployeeFormContext = createContext<CreateEmployeeFormContextType>({
    formData: defaultFormDataValues,
    setFormData: () => {}
});

export function useCreateEmployeeFormContext () {
    return useContext(CreateEmployeeFormContext);
}
