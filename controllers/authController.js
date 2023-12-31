const User = require('../models/user');


const handleErrors =(err) =>{
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    //incorrect email
    if(err.message == 'incorrect email'){
        errors.email = 'that email is not registered';
    }
    //incorrect password
    if (err.message === 'incorrect password'){
        errors.password = 'That password is incorrect';
    }
    //duplicate email error
    if (err.code == 11000){
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if (err.mesage.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }

    return errors;

}