import useSWR, {SWRResponse} from "swr";

interface GetApiUrlOptions {
    useSSL: boolean;
    apiVersion: number;
}

const defaultGetApiUrlOptions: GetApiUrlOptions = {
    useSSL: false,
    apiVersion: 1
};

export function getApiUrl (options = defaultGetApiUrlOptions) {
    const protocol = options.useSSL ? 'https' : 'http';

    return `${protocol}://${process.env.REACT_APP_API_DOMAIN}/api/v${options.apiVersion}`;
}

export function getEndpointUrl (name: Endpoint) {
    return getApiUrl() + name;
}

export enum Endpoint {
    AddEmployeeDeliveries = '/employees/add-deliveries',
    CreateEmployee = '/employees/create',
    ListEmployees = '/employees',
    GetEmployeeById = '/employees',
    GetRoles = '/roles',
    PayrollByMonth = '/payroll/monthly'
}


/* Posting */

export function createNewEmployee (data: any) {
    const { name, ...passthrough } = data;
    return fetch(getEndpointUrl(Endpoint.CreateEmployee), {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({
            data: {
                ...passthrough,
                firstName: name,
            }
        })
    });
}

export function addEmployeeDeliveries (data: any) {
    const { reference, name, role, ...passThrough } = data;
    return fetch(getEndpointUrl(Endpoint.AddEmployeeDeliveries), {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({
            data: {
                employeeReference: data.reference,
                employeeName: data.name,
                employeeRole: data.role,
                ...passThrough
            }
        })
    });
}


/* Fetching */

function parseResponseWithDataKey (response: SWRResponse) {
    const {data, ...passthrough} = response;

    return {
        ...passthrough,
        data: data?.data
    } as SWRResponse;
}

export const fetcherJson = (url: string) => fetch(url).then((res) => res.json());

export function useRoles () {
    const response = useSWR(getEndpointUrl(Endpoint.GetRoles), fetcherJson);
    return parseResponseWithDataKey(response);
}
   
export function fetchEmployeeRoles () {
    return fetch(getEndpointUrl(Endpoint.GetRoles));
}

export function fetchPayrollByMonth () {
    return fetch (getEndpointUrl(Endpoint.PayrollByMonth));
}

export function fetchEmployees () {
    return fetch (getEndpointUrl(Endpoint.ListEmployees));
}

export function fetchEmployeeById (id: number) {
    return fetch(getEndpointUrl(Endpoint.ListEmployees) + '/' + id);
}
