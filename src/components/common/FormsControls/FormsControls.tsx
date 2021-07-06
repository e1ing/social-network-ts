import React, {FC, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import {FieldMetaProps} from "formik";


type ElementProps = {
    formik: any
    name: string
}

export const FormControl: FC<ElementProps> = ({children, name, formik: {errors, touched}}) => {
    const hasError = touched[name] && errors && errors[name]
    return (
        <div>
            {children}
            {hasError && <span>{errors[name]}</span>}
            {/*<input  {...formik.getFieldProps({input})}  onBlur={formik.handleBlur} />*/}
            {/*{formik.touched.input && formik.errors.input ? <div style={{color: "red"}}>  {formik.errors.input} </div> : null}*/}
        </div>
    )
}



export const Textarea = (props: ElementProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const {formik, name, ...restProps} = props
    return (
        <FormControl {...props}> <textarea {...restProps} {...formik.getFieldProps(name)}
                                           onBlur={formik.handleBlur}/></FormControl>
    )
}
export const Input = (props: ElementProps & InputHTMLAttributes<HTMLInputElement>) => {
    const { formik, name, ...restProps} = props
    return (
        <FormControl {...props}> <input {...restProps} {...formik.getFieldProps(name)}
                                        onBlur={formik.handleBlur}/></FormControl>
    )
}

