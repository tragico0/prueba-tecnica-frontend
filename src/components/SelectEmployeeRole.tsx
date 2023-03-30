import { props } from "bluebird";
import { isEmpty } from "lodash";
import { useState } from "react";
import EmployeeRoleOption from "./EmployeeRoleOption";

interface Props {
    children?: React.ReactNode,
    roles: any
}

export default function SelectEmployeeRole (props: Props) {
    const {roles} = props;
    const [selectedId, setSelectedId] = useState(isEmpty(roles) ? 0 : roles[0].id);

    const getCheckboxId = function (id: number) {
        return `role-checkbox-${id}`;
    };

    const isOptionsChecked = function (id: number) {
        return id === selectedId;
    };

    const handleRoleCheck = function (e: React.FormEvent<HTMLInputElement>) {
        setSelectedId(Number(e.currentTarget.dataset?.roleId));
    };

    return (
        <div className="row">
            <div className="col-sm-4 black-box-wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        Roles:
                    </div>
                    <div className="col-sm-6">
                    {isEmpty(roles) ? <div>No hay roles</div> : roles.map((role: any) => (
                        <EmployeeRoleOption
                            id={getCheckboxId(role.id)}
                            key={role.id}
                            roleId={role.id}
                            label={role.label}
                            isChecked={isOptionsChecked(role.id)}
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
