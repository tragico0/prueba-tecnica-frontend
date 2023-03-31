import { fetchPayrollByMonth } from "../utils/api";

export default function loader () {
    return fetchPayrollByMonth().then(res => res.json()).then(data => {
        return {
            payrolls: data?.data
        };
    }).catch(error => {
        return {
            payrolls: []
        }
    });
}
