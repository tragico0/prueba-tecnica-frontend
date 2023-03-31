import { fetchEmployeeRoles } from "../utils/api";

export default function loader (): Promise<{ roles: any[] }> {
    return fetchEmployeeRoles().then(res => res.json()).then(data => {
        return {
            roles: data?.data
        };
    });
}
