import { props } from "bluebird";
import { isEmpty, isNil } from "lodash";
import { useState } from "react";
import EmployeeRoleOption from "./EmployeeRoleOption";

interface Props {
    children?: React.ReactNode,
    roles: string[]
}

interface RoleCodeLabels {
    [key: string]: any
}

const roleCodeLabels: RoleCodeLabels = {
    default: {
        'DRIVER': 'Chofer',
        'LOADER': 'Cargador',
        'AUXILIARY': 'Auxiliar'
    }
};

export default function SelectEmployeeRole (props: Props) {
    const [selectedCode, setSelectedCode] = useState(isEmpty(props.roles) ? '' : props.roles[0]);

    if (isNil(props.roles)) {
        return (<div>No hay roles</div>);
    }

    const roles = props.roles.map((role: string) => {
        return {
            code: role,
            label: roleCodeLabels['default'][role]
        };
    });

    const isOptionsChecked = function (code: string) {
        return code === selectedCode;
    };

    const handleRoleCheck = function (e: React.FormEvent<HTMLInputElement>) {
        setSelectedCode(e.currentTarget.dataset?.roleCode ?? '');
    };

    return (
        <div className="row">
            <div className="col-sm-4 black-box-wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        Roles:
                    </div>
                    <div className="col-sm-6">
                    {roles.map((role: any, index: number) => (
                        <EmployeeRoleOption
                            key={index}
                            roleCode={role.code}
                            label={role.label}
                            isChecked={isOptionsChecked(role.code)}
                            onChange={handleRoleCheck}
                        />
                    ))}
                    </div>
                </div>
            </div>
            <div className="col-sm-8"></div>
        </div>
    );
}
