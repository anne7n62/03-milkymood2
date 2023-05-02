import React from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field, useField} from 'formik';
import {Input, Label, Error, Submit} from './styles'

const InputComponent = ({label, ...props}) => {
    const [field,  meta] = useField(props);
    return (
        <Label>
            {label}:{meta.touched && meta.error && <Error>{meta.error}</Error>}
            <Input {...field} {...props} />
        </Label>
    )
}


const FormComponent = ({handleSuccess}) => {
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Required field'),
        email: Yup.string().email('Must be a valid email address').required('Required field')
    });
    
    return (
        <Formik
            initialValues={{
                name: "",
                email: ""
            }}
            onSubmit={handleSuccess}
            validationSchema = {schema}
            >
            {() => (
                <Form>
                    <InputComponent name="name" type="text" label="Name" autoComplete="off"/>
                    <InputComponent name="email" type="text" label="Email" autoComplete="off"/>
            <Submit type="submit">Submit</Submit> 
               
                {/* <label>Name:</label>
                <Field name="name" type="text"  autoComplete="off" />
                {props.errors && <div>{props.errors.name}</div> }

                <label>Email adress:</label>
                <Field name="email" type="text"  autoComplete="off" />
                {props.errors && <div>{props.errors.email}</div> }
                <button type="submit">Submit</button> */} 
                
                </Form>
            )}
           
         </Formik>

    )
}

export default FormComponent;