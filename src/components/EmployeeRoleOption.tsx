export default function EmployeeRoleOption (props: any) {
    return (
        <div className="form-check">
            <input className="form-check-input"
                type="checkbox"
                value=""
                id={props.roleCode}
                checked={props.isChecked}
                onChange={props.onChange}
                data-role-code={props.roleCode}
            />
            <label className="form-check-label" htmlFor={props.roleCode}>
                {props.label}
            </label>
        </div>
    );
}
