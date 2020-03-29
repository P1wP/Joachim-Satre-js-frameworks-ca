import  React, {useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import ValidMessage from "./ValidMessage";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, "Firstname must be minimum 2 characters")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "Lastname must be minimum 2 characters")
        .required("Last name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
    message: yup
		.string()
        .required()
        
		.min(10, "Message must be minimum 10 characters")
        .max(30, "Message must be less than 500 characters")
});


function Contact() {
    const [validated, setValidated] = useState(false);
	const { register, handleSubmit, errors} = useForm({
        validationSchema: schema    
    });
    
    

	function onSubmit(data) {
        
        console.log("data", data);
        // SET VALIDATED TO TRUE
        setValidated(true);
        
        
        
	}
    // REMOVE LATER
    console.log(validated);

	return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {validated.valueOf(true) && <ValidMessage message=" THIS FORM IS VALID"></ValidMessage>}
            <Form.Group>
                <Form.Label>FirstName</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your firstname" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>LastName</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your lastname" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" name="message" placeholder="Enter your message" ref={register} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
	);
}

export default Contact;