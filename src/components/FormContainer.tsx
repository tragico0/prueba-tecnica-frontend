import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FormContainer.module.css';

type Props = {
    ref?: React.RefObject<unknown>
    title?: string,
    children?: React.ReactNode,
    onClickNewButton?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function FormContainer (props: Props) {
    return (
        <div className="row black-box-wrapper">
            <div className="col">
                <div className="row">
                    <div className={clsx([styles.header, 'col'])}>
                        <div>{props.title}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mx-5 my-3">
                        <div className="row">
                            <div className="col mb-3 p-0">
                                <button type="button" className="btn btn-primary" onClick={props.onClickNewButton}>Nuevo</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {props.children}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-3 p-0 text-end">
                                <button type="button" className="btn btn-primary me-3">Guardar</button>
                                <Link to=".." className="btn btn-danger">Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
