import * as Yup from "yup";

const scheme = Yup.object().shape({
    email: Yup.string()
        .required("Please enter email address")
        .email("Please enter valid email address"),
        fullName: Yup.string()
        .required("Please enter full name"),
        number: Yup.string()
        .required("Please enter phone number"),
        state: Yup.string()
        .required("Please select state"),
        city: Yup.string()
        .required("Please select city"),

        dob: Yup.string()
        .required("Please select date of birth"),
        sID: Yup.string()
        .required("Please enter student id"),
        
});

export default scheme;
