const validateNA = (e) => {
    const { value: string, id } = e.target;
    const pattern = /^[a-zA-Z]{1}[a-z]{1,16}/;
    validate(pattern, string, `l${id}`);
};

const validateEmail = (e) => {
    const { value: string, id } = e.target;
    const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/;
    validate(pattern, string, `l${id}`);
};
const validateTel = (e) => {
    const { value: string, id } = e.target;
    const pattern = /^([9]{1})[0-9]{8}$/ // /(\+51)\s?\d{2}\s?-?\d{4}\s?-?\d{4}$/;
    validate(pattern, string, `l${id}`);
};

// validatePassword()
const validate = (pattern, string, id) => {
    console.log(pattern, string, id);
    pattern.test(string)
        ? (document.getElementById(id).innerHTML = "")
        : (document.getElementById(id).innerHTML = "Campo invalido");
};
export {
    validate,
    validateTel,
    validateEmail,
    validateNA
}