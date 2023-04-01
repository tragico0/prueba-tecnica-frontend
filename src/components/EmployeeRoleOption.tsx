export default function EmployeeRoleOption (props: any) {
    return (
        <div className="form-check">
            <input className="form-check-input"
                type="checkbox"
                value=""
                id={props.roleId}
                checked={props.isChecked}
                onChange={props.onChange}
                data-role-id={props.roleId}
            />
            <label className="form-check-label" htmlFor={props.roleId}>
                {props.label}
            </label>
        </div>
    );
}
