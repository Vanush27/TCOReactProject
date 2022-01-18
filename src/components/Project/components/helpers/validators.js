export const isRequired = ({value}) => value?.length ? undefined : "Field is required";
export const validateName = ({value}) => value?.match("([a-zA-Z]{3,15}s*)+") ? undefined : "Write correct name,places!";
export const validateEmail = ({value}) => value?.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? undefined : "Write correct email,places!";
export const validatePhone = ({value}) => value?.match(/\d{9}/) ? undefined : "Write correct phone,places!";
export const validatePassword = ({value}) => value?.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") ? undefined : "Write correct password,places!";
export const confirmPasswordValidator = ({
                                             value,
                                             password
                                         }) => value === password ? undefined : "Wrong Confirmation of password!";
