    const Validation = (inputs) => {
    const errors = {};
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const validEmail = (regexEmail.test(inputs.email) && inputs.email.length <=35
       )
       if(!validEmail){
        errors.email = "Debes ingresar un e-mail valido";
       }
       const atLeastOneNumberRegex = /.*[0-9].*/;
       const validPassword = (atLeastOneNumberRegex.test(inputs.password) &&
        inputs.password.length >=6  && inputs.password.length <=10)

        if(!validPassword){
            errors.password = "Ingresa un password valido";
       
    }
    return errors;
}
    export default Validation;