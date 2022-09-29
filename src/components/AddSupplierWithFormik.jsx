
import axios from 'axios'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const addSupplierSchema = Yup.object().shape({
    companyName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('companyName Required'),
    contactName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('contactName Required'),
});


function AddSupplierWithFormik() {
    return (<>
        <Formik
            validationSchema={addSupplierSchema}
            initialValues={{
                companyName: '',
                contactName: '',
            }}
            onSubmit={(values) => {

                // axios.post('', values)
                // .then(res => {
                //     //
                // })

            }}
        >
            {({ errors, touched }) => (
                <Form>
                    {errors.companyName && <div>{errors.companyName}</div>}
                    <div>
                        <label>First Name</label>
                        <Field id="companyName" name="companyName" placeholder="Company Name" />
                    </div>

                    {errors.contactName && <div>{errors.contactName}</div>}
                    <div>
                        <label>Last Name</label>
                        <Field id="contactName" name="contactName" placeholder="Contact Name" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>

            )}

        </Formik>
    </>
    )
}

export default AddSupplierWithFormik