import {useState} from "react";
import {formData, formValidators, initialFormCurrentData} from "../../../../data";
import FormGroup from "../FormGroup";
import "./styles.css";
import {Button} from "react-bootstrap";
import swal from 'sweetalert';


const Form = () => {

    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);

    const [localForm, setLocalForm] = useState([]);

    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }

    const onSubmit = () => {
        const obj = {
            name: formCurrentData.name.value,
            email: formCurrentData.email.value,
            phone: formCurrentData.phone.value,
            password: formCurrentData.password.value,
            confirmPassword: formCurrentData.confirmPassword.value,
        }

        const formData = localStorage.getItem("dataForm");
        if (formData && JSON.parse(formData) && JSON.parse(formData).length) {

            const arrData = [...JSON.parse(formData), obj];

            return localStorage.setItem('dataForm', JSON.stringify(arrData));
        }
        localStorage.setItem('dataForm', JSON.stringify(obj));

        if (obj.name && obj.password && obj.confirmPassword && obj.phone && obj.email) {
            swal({
                title: "Good job!",
                text: "You have filled in all fields!",
                icon: "success",
            });

            setFormCurrentData(initialFormCurrentData);
        } else {
            swal({
                title: "All fields is required!",
            });
        }

    }

    const getValidationValues = (name, value) => {
        const validationValues = {value};
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;

        return validationValues;
    }


    const handleInputChange = (e) => {

        const {name, value} = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationValues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);

        setFormCurrentData(prev => {
            return {
                ...prev,
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }


        });
        setLocalForm([...localForm, {[name]: value}]);
    }

    return (
        <div className="form">
            {formData.map(data => {
                return (
                    <FormGroup
                        {...data}
                        key={data.id}
                        onChange={handleInputChange}
                        input={formCurrentData[data.name]}
                    />
                )
            })}
            <Button as="input" type="submit" onClick={onSubmit} value="Submit" className="subBtn"/>
        </div>
    )
}
export default Form;