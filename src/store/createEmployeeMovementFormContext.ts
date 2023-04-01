import { createContext, Dispatch, SetStateAction } from "react";

interface CreateEmployeeMovementFormData {
    reference: string;
    name: string;
    role: string;
    selectedMonth: number;
    deliveriesQuantity: number;
};

export const defaultCreateEmployeeMovementFormValues: CreateEmployeeMovementFormData = {
    reference: '',
    name: '',
    role: '',
    selectedMonth: 1,
    deliveriesQuantity: 1
};

export type CreateEmployeeMovementFormContextType = {
    formData: CreateEmployeeMovementFormData,
    setFormData: Dispatch<SetStateAction<CreateEmployeeMovementFormData>>
}

export const CreateEmployeeMovementFormContext = createContext<CreateEmployeeMovementFormContextType>({
    formData: defaultCreateEmployeeMovementFormValues,
    setFormData: () => {}
});
