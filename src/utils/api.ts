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
    CreateEmployee = '/employees/create',
    GetRoles = '/roles'
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
   
