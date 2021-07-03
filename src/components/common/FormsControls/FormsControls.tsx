import React from 'react';
import styles from "./FormsControl.module.css"

export const Textarea = ({...props}) => {

    const hasError = props.meta.touched && props.meta.error

    return(
        <div className={styles.formControl+ " "+ (hasError ? styles.error: "")}>
            <div>
            <textarea {...props.input} {...props.meta}/>
            </div>
            { hasError && <span > {props.meta.error}</span>}
        </div>
    )
}