import { fetchEmployeeById, fetchEmployeeRoles } from "../utils/api";

export default async function loader ({params}: {params: any}): Promise<any> {
    try {
        const [roleResponse, employeeResponse] = await Promise.all([
            fetchEmployeeRoles(),
            fetchEmployeeById(params?.id)
        ]);
    
        const rolesData = await roleResponse.json();
        const employeeData = await employeeResponse.json();
    
        return {
            isEditing: true,
            roles: rolesData?.data,
            employee: employeeData?.data
        }
    } catch (error) {
        return {
            roles: [],
            employee: null
        };
    };
}
