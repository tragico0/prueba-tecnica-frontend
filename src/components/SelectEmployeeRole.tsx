import { isNil } from "lodash";
import React from "react";
import EmployeeRoleOption from "./EmployeeRoleOption";

interface Props {
    children?: React.ReactNode,
    roles: string[],
    selectedCode?: string,
    onRoleCheck: (e: React.FormEvent<HTMLInputElement>) => void
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
        return code === props.selectedCode;
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
                            label={role.label}
                            roleCode={role.code}
                            isChecked={isOptionsChecked(role.code)}
                            onChange={props.onRoleCheck}
                        />
                    ))}
                    </div>
                </div>
            </div>
            <div className="col-sm-8"></div>
        </div>
    );
}
