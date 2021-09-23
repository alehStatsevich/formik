import React, {useState} from 'react';
import style from './Contact.module.css'
import { useFormik } from 'formik';
import {useDispatch} from "react-redux";
import DatePicker from "react-datepicker";
import {addToCartAC, dataType} from "./bll/form-reducer";

type FormikErrorType = {
    firstName?:string
    lastName?: string
    email?: string
}

const validate = (values: { firstName: string | any[]; lastName: string | any[]; email: string; }) => {

    const errors:FormikErrorType = {

    };
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 10) {
        errors.firstName = 'Must be 10 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 10) {
        errors.lastName = 'Must be 10 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Contact = ( ) => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState<Date | any>(new Date()) ;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            data: startDate,
        },
        validate,
        onSubmit: (values:dataType) => {
            const {email, firstName, lastName, data}=values
            dispatch(addToCartAC({
                firstName,
                lastName,
                email,
                data
            }))
            console.log(  dispatch(  dispatch(addToCartAC({
                firstName,
                lastName,
                email,
                data
            }))))
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return ( <form onSubmit={formik.handleSubmit} className={style.blockContainer}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div className={style.link}>{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div className={style.link}>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div className={style.link}>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        </form>

    );
};
export default Contact;