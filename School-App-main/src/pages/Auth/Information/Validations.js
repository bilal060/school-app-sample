import * as Yup from "yup";

const scheme = Yup.object().shape({
    email: Yup.string()
        .required("Please enter email address")
        .email("Please enter valid email address"),
        fullName: Yup.string()
        .required("Please enter full name"),
        number: Yup.string()
        
        .required("Phone number is required."),
        

        dob: Yup.string()
        .required("Please select date of birth"),
        sID: Yup.string()
        .required("Please enter student id"),
        password: Yup.string()
        .required("Please enter Password"),
        
});

export default scheme;
