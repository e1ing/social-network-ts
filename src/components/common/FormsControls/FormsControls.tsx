import React from 'react';
import styles from "./FormsControl.module.css"
import {Simulate} from "react-dom/test-utils";


export FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error

    return(
        <div className={styles.formControl+ " "+ (hasError ? styles.error: "")}>
            <div>
              {props.children}
            </div>
            { hasError && <span> {meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const ({input, meta, child, element, ...props}) = props
    return(
      <FormControl {...props}> <textarea {...props.input}{...restProps}/></FormControl>
    )
}
export const Input = (props) => {
    const ({input, meta, child, element, ...props}) = props
    return(
        <FormControl {...props}> <input {...input}{...restProps}/></FormControl>
    )
}
