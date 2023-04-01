import { fetchEmployeeRoles } from "../utils/api";

export default function loader (params: any): Promise<{ roles: any[] }> {
    return fetchEmployeeRoles().then(res => res.json()).then(data => {
        return {
            roles: data?.data
        };
    }).catch(error => {
        return {
            isEditing: false,
            roles: []
        }
    });
}
