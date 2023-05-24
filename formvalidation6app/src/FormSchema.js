import * as Yup from 'yup'

export const FormSchema = Yup.object({
    name:Yup.string().min(3,'Too short').max(20,'Too Long').required('jhjh'),
    email:Yup.string().email().required('Email is must')
})







