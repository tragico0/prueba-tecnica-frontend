import { fetchEmployees } from "../utils/api";

export default function loader () {
    return fetchEmployees().then(res => res.json()).then(data => {
        return {
            employees: data?.data
        };
    }).catch(error => {
        return {
            employees: []
        }
    });
}
