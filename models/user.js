const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercare:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
      }

});

