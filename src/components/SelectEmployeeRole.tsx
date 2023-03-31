import { isEmpty } from "lodash";
import React from "react";
import EmployeeRoleOption from "./EmployeeRoleOption";

interface Props {
    children?: React.ReactNode,
    roles: any[],
    selectedId?: number,
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
    if (isEmpty(props.roles)) {
        return (<div>No hay roles</div>);
    }

    const roles = props.roles.map((role: any) => {
        return {
            ...role,
            label: roleCodeLabels['default'][role.code]
        };
    });

    const isOptionsChecked = function (id: number) {
        return id === props.selectedId;
    };

    return (
        <div className="row">
            <div className="col-sm-4 black-box-wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        Roles:
                    </div>
                    <div className="col-sm-6">
                    {roles.map((role: any) => (
                        <EmployeeRoleOption
                            key={role.id}
                            roleId={role.id}
                            isChecked={isOptionsChecked(role.id)}
                            label={role.label}
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
