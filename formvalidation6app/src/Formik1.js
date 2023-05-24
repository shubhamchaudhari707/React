import React from 'react'
import { useFormik } from 'formik'
import { FormSchema } from './FormSchema'

const Formik1 = () => {

    const formInitialvalues = {
        name: '',
        email: ''
    }

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: formInitialvalues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            console.log(values)
        }

    })



    return (
        <>
            <h1>Formik demo </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Enter Name : </label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} /> <br />
                    <h5 style={{ color: 'red' }}>{errors.name}</h5>
                </div>

                <div>
                    <label htmlFor="">Enter Email : </label>
                    <input type="text" name="email" value={values.email} onChange={handleChange} /> <br />
                    <h5 style={{ color: 'red' }}>{errors.email}</h5>
                </div>

                <input type="submit" value="Submit" />
            </form>


        </>
    )
}

export default Formik1