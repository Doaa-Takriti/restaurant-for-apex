import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = Yup.object().shape({
    phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .required('Phone number is required'),

    password: Yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),

        uniqueid: Yup.string().required("required filed")
       
  

});