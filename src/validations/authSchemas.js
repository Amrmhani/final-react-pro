import * as yup from "yup"

export const registerSchema = yub.object({
    fullName:yup.string().required("Full Name is required")
    .min(3,"Full Name must be at latest 3 char"),
    userName:yup.string().required("User Name is required")
    .min(3,"User Name must be at latest 3 char"),
    email:yup.string().required("Email is required").email("Invalid Email Format"),
    password:yup.string().required("Password is required")
    .min(6,"Password must be at least 6 char")
    .matches(/[A-Z]/,"Password must contain an uppercase letter")
    .matches(/[a-z]/,"Password must contain an lowercase letter")
    .matches(/[0-9]/,"Password must contain a number"),
    phoneNumber:yup.string().required("phon Number is required")
    .matches(/^05\d{8}$/,"Phone number start with 05 and must be 10 digits")
})